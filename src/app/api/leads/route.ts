import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { contact } from "@/data/site";

export type LeadPayload = {
  name: string;
  phone: string;
  purpose?: string;
  propertyType?: string;
  location?: string;
  budget?: string;
  /** Page the enquiry was sent from, e.g. "/listings/atlantis-360-2325-sqft-flat". */
  sourcePage?: string;
  /** Honeypot: real visitors never fill this in. */
  website?: string;
};

const clean = (value: unknown, max = 200) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * Appends the lead record to local on-disk storage at `data/leads.json`.
 * If filesystem is read-only (such as certain serverless edge environments),
 * catches the error safely without throwing.
 */
async function saveLeadLocally(lead: Record<string, string>) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "leads.json");

    await fs.mkdir(dataDir, { recursive: true });

    let existingLeads: Array<Record<string, string>> = [];
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        existingLeads = parsed;
      }
    } catch {
      // File does not exist yet or is empty
      existingLeads = [];
    }

    existingLeads.push(lead);
    await fs.writeFile(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.warn("[API /api/leads] Local filesystem write skipped or unsupported:", err);
    return false;
  }
}

/**
 * Forwards the lead to LEAD_WEBHOOK_URL when it is set, for example a Google
 * Apps Script web app writing to Google Sheets, a Zapier/Make hook, or a CRM
 * endpoint. The request body is the JSON lead object. Returns whether the
 * lead was delivered; the caller must not fail the visitor if this is false.
 */
async function forwardLead(lead: Record<string, string>) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(5000),
    });

    return response.ok;
  } catch (error) {
    console.error("[API /api/leads] Webhook delivery failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    // Honeypot: pretend success so bots do not retry, but store nothing.
    if (clean(body.website)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(body.name, 100);
    const phone = clean(body.phone, 30);

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 },
      );
    }

    if (phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required." },
        { status: 400 },
      );
    }

    const sanitizedLead = {
      name,
      phone,
      purpose: clean(body.purpose, 50) || "Buy",
      propertyType: clean(body.propertyType, 50) || "Residential",
      location: clean(body.location) || "Not specified",
      budget: clean(body.budget, 100) || "Not fixed yet",
      sourcePage: clean(body.sourcePage, 300) || "/",
      receivedAt: new Date().toISOString(),
    };

    const messageLines = [
      "Hello Vedang Properties,",
      `Name: ${sanitizedLead.name}`,
      `Phone: ${sanitizedLead.phone}`,
      `Purpose: ${sanitizedLead.purpose}`,
      `Property Type: ${sanitizedLead.propertyType}`,
      `Preferred Location: ${sanitizedLead.location}`,
      `Budget: ${sanitizedLead.budget}`,
    ];

    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
      messageLines.join("\n"),
    )}`;

    const [savedLocally, delivered] = await Promise.all([
      saveLeadLocally(sanitizedLead),
      forwardLead(sanitizedLead),
    ]);

    // Always keep a server log as a last-resort record (visible in hosting logs).
    console.log("[API /api/leads] New lead received:", {
      ...sanitizedLead,
      savedLocally,
      delivered,
    });

    return NextResponse.json({
      success: true,
      message: "Lead inquiry received successfully.",
      savedLocally,
      delivered,
      whatsappUrl,
    });
  } catch (error) {
    console.error("[API /api/leads] Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead inquiry." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Vedang Properties Leads API",
    endpoint: "POST /api/leads",
    storageTiers: {
      tier1_localDisk: "Appends to project data/leads.json (Node/VPS runtime)",
      tier2_webhook: "Dispatches to LEAD_WEBHOOK_URL when configured (Google Sheets/CRM)",
      tier3_whatsapp: "Generates direct pre-filled WhatsApp link for instant visitor transmission",
      tier4_serverLogs: "Emits structured console logs visible in hosting runtime logs",
    },
    acceptedFields: [
      "name",
      "phone",
      "purpose",
      "propertyType",
      "location",
      "budget",
      "sourcePage",
    ],
  });
}
