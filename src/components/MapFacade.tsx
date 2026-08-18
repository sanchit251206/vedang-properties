"use client";

import { useState } from "react";
import Image from "next/image";

type MapFacadeProps = {
  title: string;
  mapQuery: string;
  mapUrl?: string;
  mapImage?: string;
  aspectRatio?: string;
  allowInteractive?: boolean;
  badgeText?: string;
};

export function MapFacade({
  title,
  mapQuery,
  mapUrl,
  mapImage,
  aspectRatio = "aspect-[16/10]",
  allowInteractive = true,
  badgeText = "Location Map",
}: MapFacadeProps) {
  const [isLiveLoaded, setIsLiveLoaded] = useState(false);

  const directMapUrl =
    mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      mapQuery,
    )}`;

  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery,
  )}&output=embed`;

  if (isLiveLoaded) {
    return (
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-slate-100`}>
        <iframe
          title={title}
          src={embedSrc}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div
      className={`group relative w-full ${aspectRatio} overflow-hidden bg-gradient-to-br from-slate-900 via-[#102f33] to-[#0c2b2d] text-white`}
    >
      {mapImage ? (
        <Image
          src={mapImage}
          alt={`${title} map visual`}
          fill
          className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(#d6a74e_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

      <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10383a]/90 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur">
          <MapPinMiniIcon />
          {badgeText}
        </span>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center">
        <p className="max-w-xs text-base font-semibold drop-shadow md:text-lg">
          {title}
        </p>
        <p className="mt-1 text-xs text-white/80 drop-shadow">
          {mapQuery}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {allowInteractive && (
            <button
              type="button"
              onClick={() => setIsLiveLoaded(true)}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md bg-[#d6a74e] px-3.5 py-2 text-xs font-semibold text-[#102f33] shadow-md transition hover:bg-[#e0b862] focus:outline-none focus:ring-4 focus:ring-[#d6a74e]/30"
              aria-label={`Load live interactive map for ${title}`}
            >
              <LiveMapIcon />
              Load live map
            </button>
          )}

          <a
            href={directMapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md border border-white/40 bg-black/40 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur shadow-md transition hover:border-white hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            <ExternalMapIcon />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

function MapPinMiniIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-[#d6a74e]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function LiveMapIcon() {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function ExternalMapIcon() {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}
