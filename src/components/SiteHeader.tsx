"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { contact } from "@/data/site";

type SiteHeaderProps = {
  variant?: "hero" | "teal" | "dark";
};

export function SiteHeader({ variant = "hero" }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hello Vedang Properties, I want help comparing property options in Mohali.",
  )}`;

  // Close drawer on escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Listings", href: "/listings" },
    { label: "Services", href: "/#property-types" },
    { label: "Areas", href: "/#areas" },
    { label: "Reviews", href: "/#google-profile" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const headerBgClass =
    variant === "hero"
      ? "bg-transparent"
      : variant === "teal"
        ? "bg-[#10383a]"
        : "bg-[#102f33]";

  return (
    <header className={`relative z-30 w-full text-white ${headerBgClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <BrandLockup />

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${contact.tel}`}
            className="hidden h-11 items-center justify-center gap-1.5 rounded-md border border-white/30 px-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 sm:inline-flex"
          >
            <PhoneMiniIcon />
            <span>Call</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-md bg-[#d6a74e] px-3.5 text-sm font-semibold text-[#102f33] shadow-sm transition hover:bg-[#e0b862]"
          >
            <WhatsAppMiniIcon />
            <span>WhatsApp</span>
          </a>

          {/* Hamburger button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/30 bg-white/5 text-white transition hover:border-white hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20 lg:hidden"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col bg-[#102f33] p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <span className="text-lg font-semibold text-[#d6a74e]">Menu</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10"
          >
            <CloseIcon />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation links"
          className="mt-6 flex flex-1 flex-col gap-1 overflow-y-auto"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-12 items-center rounded-lg px-4 text-base font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/15 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#d6a74e]">
            Contact Vedang Properties
          </p>
          <div className="mt-3 grid gap-2">
            <a
              href={`tel:${contact.tel}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 font-semibold text-white transition hover:bg-white/15"
            >
              <PhoneMiniIcon />
              Call {contact.phoneDisplay}
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d6a74e] font-semibold text-[#102f33] transition hover:bg-[#e0b862]"
            >
              <WhatsAppMiniIcon />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-4 text-xs leading-5 text-white/60">
            {contact.addressShort}
          </p>
        </div>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PhoneMiniIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z" />
    </svg>
  );
}

function WhatsAppMiniIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.3 8.5 8.5 0 0 1-10.2 2.1L3 21l2.1-5.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="m9.5 9.5 1.3 1.3a1 1 0 0 1 0 1.4l-.4.4a6 6 0 0 0 2.9 2.9l.4-.4a1 1 0 0 1 1.4 0l1.3 1.3" />
    </svg>
  );
}
