"use client";

import Link from "next/link";
import { contact } from "@/data/site";

export function MobileQuickBar() {
  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hello Vedang Properties, I want help comparing property options in Mohali.",
  )}`;

  return (
    <div
      aria-label="Mobile quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2">
        <a
          href={`tel:${contact.tel}`}
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#10383a] bg-white px-2 text-xs font-semibold text-[#10383a] transition active:bg-slate-100"
          aria-label={`Call Vedang Properties at ${contact.phoneDisplay}`}
        >
          <PhoneIcon />
          <span>Call</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-2 text-xs font-semibold text-white shadow-sm transition active:bg-[#20bd5a]"
          aria-label="Chat on WhatsApp with Vedang Properties"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/#contact"
          className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#10383a] px-2 text-xs font-semibold text-white shadow-sm transition active:bg-[#0c2b2d]"
          aria-label="Book a property consultation or shortlist"
        >
          <EnquireIcon />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="m9.5 9.5 1.3 1.3a1 1 0 0 1 0 1.4l-.4.4a6 6 0 0 0 2.9 2.9l.4-.4a1 1 0 0 1 1.4 0l1.3 1.3" />
    </svg>
  );
}

function EnquireIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#d6a74e]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
