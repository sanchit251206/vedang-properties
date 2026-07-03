"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  whatsappNumber: string;
  compact?: boolean;
};

type LeadState = {
  name: string;
  purpose: string;
  propertyType: string;
  location: string;
  budget: string;
  phone: string;
};

const initialState: LeadState = {
  name: "",
  purpose: "Buy",
  propertyType: "Residential",
  location: "",
  budget: "",
  phone: "",
};

export function LeadForm({ whatsappNumber, compact = false }: LeadFormProps) {
  const [lead, setLead] = useState<LeadState>(initialState);

  function updateLead(field: keyof LeadState, value: string) {
    setLead((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Vedang Properties,",
      `My name: ${lead.name}`,
      `I want to: ${lead.purpose}`,
      `Property type: ${lead.propertyType}`,
      `Preferred location: ${lead.location || "Not specified"}`,
      `Budget: ${lead.budget || "Not fixed yet"}`,
      `My phone number: ${lead.phone}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/50 bg-white/95 p-5 text-slate-950 shadow-2xl shadow-slate-950/20 backdrop-blur md:p-6"
    >
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase text-[#b85f45]">
          Quick enquiry
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-[#10383a]">
          Get matching property options
        </h2>
      </div>

      <div className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}>
        <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Name
          <input
            required
            value={lead.name}
            onChange={(event) => updateLead("name", event.target.value)}
            placeholder="Your name"
            className="h-12 rounded-md border border-slate-200 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#d6a74e] focus:ring-4 focus:ring-[#d6a74e]/20"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          I want to
          <select
            value={lead.purpose}
            onChange={(event) => updateLead("purpose", event.target.value)}
            className="h-12 rounded-md border border-slate-200 bg-white px-3 text-base text-slate-950 outline-none transition focus:border-[#d6a74e] focus:ring-4 focus:ring-[#d6a74e]/20"
          >
            <option>Buy</option>
            <option>Sell</option>
            <option>Rent</option>
            <option>Invest</option>
            <option>Book a site visit</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Property type
          <select
            value={lead.propertyType}
            onChange={(event) =>
              updateLead("propertyType", event.target.value)
            }
            className="h-12 rounded-md border border-slate-200 bg-white px-3 text-base text-slate-950 outline-none transition focus:border-[#d6a74e] focus:ring-4 focus:ring-[#d6a74e]/20"
          >
            <option>Residential</option>
            <option>Plot or land</option>
            <option>Commercial</option>
            <option>Builder floor</option>
            <option>Villa</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Preferred location
          <input
            value={lead.location}
            onChange={(event) => updateLead("location", event.target.value)}
            placeholder="Aerocity, IT City, Kharar..."
            className="h-12 rounded-md border border-slate-200 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#d6a74e] focus:ring-4 focus:ring-[#d6a74e]/20"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Budget
          <input
            value={lead.budget}
            onChange={(event) => updateLead("budget", event.target.value)}
            placeholder="50L, 1Cr, flexible..."
            className="h-12 rounded-md border border-slate-200 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#d6a74e] focus:ring-4 focus:ring-[#d6a74e]/20"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Phone number
          <input
            required
            value={lead.phone}
            onChange={(event) => updateLead("phone", event.target.value)}
            placeholder="+91..."
            inputMode="tel"
            className="h-12 rounded-md border border-slate-200 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#d6a74e] focus:ring-4 focus:ring-[#d6a74e]/20"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#10383a] px-5 text-base font-semibold text-white transition hover:bg-[#0c2b2d] focus:outline-none focus:ring-4 focus:ring-[#10383a]/25"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="m9.5 9.5 1.3 1.3a1 1 0 0 1 0 1.4l-.4.4a6 6 0 0 0 2.9 2.9l.4-.4a1 1 0 0 1 1.4 0l1.3 1.3" />
        </svg>
        Send enquiry on WhatsApp
      </button>
    </form>
  );
}
