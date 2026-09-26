"use client";

import { useMemo, useState } from "react";
import { ListingCard } from "@/components/ListingCard";
import type { PropertyListing } from "@/data/listings";

type FilterValue =
  | "All"
  | "Flats"
  | "Plots & land"
  | "Commercial"
  | "Ready to move";

const filters: FilterValue[] = [
  "All",
  "Flats",
  "Plots & land",
  "Commercial",
  "Ready to move",
];

export function ListingsExplorer({ listings }: { listings: PropertyListing[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredListings = useMemo(() => {
    if (activeFilter === "Flats") {
      return listings.filter((listing) => listing.category === "Flat");
    }

    if (activeFilter === "Plots & land") {
      return listings.filter((listing) =>
        ["Plot", "Land"].includes(listing.category),
      );
    }

    if (activeFilter === "Commercial") {
      return listings.filter((listing) => listing.category === "Commercial");
    }

    if (activeFilter === "Ready to move") {
      return listings.filter((listing) => listing.status === "Ready to move");
    }

    return listings;
  }, [activeFilter, listings]);

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
        aria-label="Filter property listings"
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[#d6a74e]/25 ${
                isActive
                  ? "border-[#10383a] bg-[#10383a] text-white"
                  : "border-slate-300 bg-white text-[#10383a] hover:border-[#10383a]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-slate-500" aria-live="polite">
        Showing {filteredListings.length} of {listings.length} listings
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </div>
    </div>
  );
}
