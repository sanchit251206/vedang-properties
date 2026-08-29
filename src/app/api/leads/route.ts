import { NextResponse } from "next/server";
import { contact } from "@/data/site";

export type LeadPayload = {
  name: string;
  phone: string;
  purpose?: string;
  propertyType?: string;
  location?: string;
  budget?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, purpose, propertyType, location, budget } = body as LeadPayload;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const sanitizedLead = {
      name: name.trim(),
      phone: phone.trim(),
      purpose: purpose?.trim() || "Buy",
      propertyType: propertyType?.trim() || "Residential",
      location: location?.trim() || "Not specified",
      budget: budget?.trim() || "Not fixed yet",
      receivedAt: new Date().toISOString(),
    };

    // Format WhatsApp message payload
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
      messageLines.join("\n")
    )}`;

    // In a production setup, lead can also be forwarded to CRM, email webhook, or SQLite/Postgres.
    // For now we log and return the structured response.
    console.log("[API /api/leads] New lead received:", sanitizedLead);

    return NextResponse.json({
      success: true,
      message: "Lead inquiry received successfully.",
      lead: sanitizedLead,
      whatsappUrl,
    });
  } catch (error) {
    console.error("[API /api/leads] Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead inquiry." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Vedang Properties Leads API",
    endpoint: "POST /api/leads",
    acceptedFields: ["name", "phone", "purpose", "propertyType", "location", "budget"],
  });
}
