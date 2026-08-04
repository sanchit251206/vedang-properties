export type ListingCategory = "Flat" | "Plot" | "Land";

export type ListingFact = {
  label: string;
  value: string;
};

export type PropertyListing = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ListingCategory;
  status: string;
  transaction: string;
  location: string;
  locality: string;
  mapQuery: string;
  price: string;
  priceNote: string;
  image: string;
  imageAlt: string;
  summary: string;
  description: string[];
  facts: ListingFact[];
  nearby: string[];
  verification: string[];
};

export const listings: PropertyListing[] = [
  {
    slug: "green-lotus-utsav-2100-sqft-3bhk",
    title: "3 BHK Flat at Green Lotus Utsav",
    shortTitle: "Green Lotus Utsav · 2,100 sq ft",
    category: "Flat",
    status: "Ready to move",
    transaction: "For sale",
    location: "PR-7 Airport Road, Zirakpur",
    locality: "Zirakpur",
    mapQuery: "Green Lotus Utsav PR7 Zirakpur",
    price: "On request",
    priceNote: "Confirm the current asking price and availability before a visit.",
    image: "/images/listings/green-lotus-utsav-2100-sqft.png",
    imageAlt:
      "Branded conceptual listing graphic for a 2100 sq ft 3 BHK flat at Green Lotus Utsav",
    summary:
      "A ready-to-move 3 BHK flat measuring approximately 2,100 sq ft on the 8th floor at Green Lotus Utsav.",
    description: [
      "This listing is for buyers comparing a ready-to-move three-bedroom home on the PR-7 Airport Road corridor in Zirakpur.",
      "The exact unit condition, inclusions, maintenance position, parking, ownership documents and commercial terms should be confirmed before making a decision.",
    ],
    facts: [
      { label: "Property type", value: "Residential flat" },
      { label: "Configuration", value: "3 BHK" },
      { label: "Size", value: "2,100 sq ft" },
      { label: "Floor", value: "8th floor" },
      { label: "Possession", value: "Ready to move" },
      { label: "Transaction", value: "For sale" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "Zirakpur Bus Stand and PR-7 connectivity",
      "Paras Downtown and Cosmo Plaza",
      "Schools, hospitals and daily-use markets across Zirakpur",
      "Road access toward Chandigarh, Mohali and Panchkula",
    ],
    verification: [
      "Confirm the exact flat number, parking allocation and included fixtures.",
      "Check ownership, society dues, maintenance and transfer requirements.",
      "Inspect the actual unit; the website image is a conceptual listing graphic.",
    ],
  },
  {
    slug: "suman-marvellous-1745-sqft-3bhk",
    title: "3 BHK Flat at Suman Marvellous",
    shortTitle: "Suman Marvellous · 1,745 sq ft",
    category: "Flat",
    status: "Available",
    transaction: "For sale",
    location: "VIP Junction Road area, Zirakpur",
    locality: "Zirakpur",
    mapQuery: "The Suman Marvelous Zirakpur",
    price: "Allotment price + premium",
    priceNote:
      "The complete price basis and premium must be confirmed before publishing or paying.",
    image: "/images/listings/suman-marvellous-1745-sqft.png",
    imageAlt:
      "Branded conceptual listing graphic for a 1745 sq ft 3 BHK flat at Suman Marvellous",
    summary:
      "A 3 BHK flat measuring approximately 1,745 sq ft is available for sale at Suman Marvellous in Zirakpur.",
    description: [
      "This option may be considered by buyers looking for a three-bedroom flat around the VIP Junction Road side of Zirakpur.",
      "The original information refers to an allotment price plus premium. The full breakup, payment stage, floor, possession position and transfer terms require confirmation.",
    ],
    facts: [
      { label: "Property type", value: "Residential flat" },
      { label: "Configuration", value: "3 BHK" },
      { label: "Size", value: "1,745 sq ft" },
      { label: "Floor", value: "Confirm on enquiry" },
      { label: "Possession", value: "Confirm on enquiry" },
      { label: "Transaction", value: "For sale" },
    ],
    nearby: [
      "Amcare Hospital and other Zirakpur healthcare options",
      "D-Mart, Best Price and local markets",
      "Zirakpur Bus Stop",
      "Chandigarh International Airport corridor",
      "Road access toward Elante Mall and Chandigarh",
    ],
    verification: [
      "Confirm whether the quoted commercial basis is per square foot or a total payment stage.",
      "Verify the exact floor, possession status, allotment and transfer documents.",
      "Inspect the actual unit; the website image is a conceptual listing graphic.",
    ],
  },
  {
    slug: "atlantis-360-2325-sqft-flat",
    title: "2,325 sq ft Flat at Atlantis 360",
    shortTitle: "Atlantis 360 · 2,325 sq ft",
    category: "Flat",
    status: "Available",
    transaction: "For sale",
    location: "PR-7 Airport Road, Zirakpur",
    locality: "Zirakpur",
    mapQuery: "Atlantis 360 PR7 Zirakpur",
    price: "On request",
    priceNote:
      "Configuration, floor, price and current availability will be confirmed on enquiry.",
    image: "/images/listings/atlantis-360-2325-sqft.png",
    imageAlt:
      "Branded conceptual listing graphic for a 2325 sq ft flat at Atlantis 360",
    summary:
      "A flat measuring approximately 2,325 sq ft is available for sale at Atlantis 360 on PR-7 Airport Road.",
    description: [
      "This listing is for buyers comparing a larger apartment in the PR-7 and Airport Road corridor of Zirakpur.",
      "The supplied listing does not confirm the exact configuration or floor. Those details, along with the payment plan and possession position, must be checked before a site visit.",
    ],
    facts: [
      { label: "Property type", value: "Residential flat" },
      { label: "Configuration", value: "Confirm on enquiry" },
      { label: "Size", value: "2,325 sq ft" },
      { label: "Floor", value: "Confirm on enquiry" },
      { label: "Possession", value: "Confirm on enquiry" },
      { label: "Transaction", value: "For sale" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "PR-7 connectivity toward Aerocity and Mohali",
      "IT City Mohali and employment corridors",
      "Zirakpur markets, hospitals and bus connectivity",
      "Retail and entertainment across Zirakpur and Chandigarh",
    ],
    verification: [
      "Confirm the exact BHK configuration, floor, unit number and possession stage.",
      "Review the full payment breakup, allotment or ownership documents and applicable dues.",
      "Inspect the actual unit or approved plan; the website image is conceptual.",
    ],
  },
  {
    slug: "green-lotus-utsav-2525-sqft-3-plus-1-bhk",
    title: "3+1 BHK Flat at Green Lotus Utsav",
    shortTitle: "Green Lotus Utsav · 2,525 sq ft",
    category: "Flat",
    status: "Ready to move",
    transaction: "For sale",
    location: "PR-7 Airport Road, Zirakpur",
    locality: "Zirakpur",
    mapQuery: "Green Lotus Utsav PR7 Zirakpur",
    price: "On request",
    priceNote: "Confirm the current asking price and availability before a visit.",
    image: "/images/listings/green-lotus-utsav-2525-sqft.png",
    imageAlt:
      "Branded conceptual listing graphic for a 2525 sq ft 3 plus 1 BHK flat at Green Lotus Utsav",
    summary:
      "A ready-to-move 3+1 BHK flat measuring approximately 2,525 sq ft is available on a middle floor.",
    description: [
      "The additional room may suit a study, guest space or another household requirement, subject to the actual approved layout and unit inspection.",
      "Buyers should confirm the exact floor, unit condition, fixtures, parking, maintenance and transfer requirements before proceeding.",
    ],
    facts: [
      { label: "Property type", value: "Residential flat" },
      { label: "Configuration", value: "3+1 BHK" },
      { label: "Size", value: "2,525 sq ft" },
      { label: "Floor", value: "Middle floor" },
      { label: "Possession", value: "Ready to move" },
      { label: "Transaction", value: "For sale" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "PR-7 connectivity toward Aerocity and Mohali",
      "Paras Downtown, Cosmo Plaza and Elante Mall",
      "Schools and healthcare options across the Tricity",
      "Road access toward Chandigarh, Mohali and Panchkula",
    ],
    verification: [
      "Confirm the exact flat number, floor and approved 3+1 layout.",
      "Check ownership, parking, society dues, maintenance and transfer terms.",
      "Inspect the actual unit; the interior shown in the website graphic is conceptual.",
    ],
  },
  {
    slug: "mardapur-ghanaur-road-7-bigha-land",
    title: "7 Bigha Land at Mardapur",
    shortTitle: "Mardapur · 7 bigha",
    category: "Land",
    status: "Available",
    transaction: "For sale",
    location: "Mardapur, Ghanaur Road, Rajpura",
    locality: "Rajpura",
    mapQuery: "Mardapur Ghanaur Road Rajpura Punjab",
    price: "On request",
    priceNote: "Confirm the exact price, measurement and commercial terms on enquiry.",
    image: "/images/listings/mardapur-ghanaur-road-7-bigha-only.png",
    imageAlt:
      "Branded conceptual listing graphic for 7 bigha of land at Mardapur on Ghanaur Road",
    summary:
      "A 7 bigha land parcel is available for sale at Mardapur on Ghanaur Road in the Rajpura area.",
    description: [
      "This is a larger land listing in the Rajpura–Ghanaur region. The exact site pin, access, measurement method and current land use should be checked on the ground and through the relevant records.",
      "No development, approval, frontage or return claim is made on this website. Buyers should complete independent legal and technical verification before paying any amount.",
    ],
    facts: [
      { label: "Property type", value: "Land parcel" },
      { label: "Size", value: "7 bigha" },
      { label: "Location", value: "Mardapur" },
      { label: "Road", value: "Ghanaur Road" },
      { label: "Region", value: "Rajpura" },
      { label: "Transaction", value: "For sale" },
    ],
    nearby: [
      "Ghanaur Road connectivity",
      "Rajpura town, markets and daily-use services",
      "Rajpura Junction railway station",
      "Schools and hospitals in the Rajpura–Ghanaur region",
      "Regional road access toward Patiala, Ambala and Chandigarh",
    ],
    verification: [
      "Confirm the exact khasra numbers, title chain, possession and measured area.",
      "Verify legal access, land use, acquisition status and applicable permissions.",
      "The map and image are approximate context only, not a survey or boundary plan.",
    ],
  },
  {
    slug: "dharamgarh-mohali-1-kanal-land",
    title: "1 Kanal Land at Dharamgarh, Mohali",
    shortTitle: "Dharamgarh, Mohali · 1 kanal",
    category: "Land",
    status: "Available",
    transaction: "For sale",
    location: "Dharamgarh, Mohali",
    locality: "Mohali",
    mapQuery: "Dharamgarh Mohali Punjab",
    price: "On request",
    priceNote: "Confirm the current price, exact site pin and ownership details.",
    image: "/images/listings/dharamgarh-mohali-1-kanal-land.png",
    imageAlt:
      "Branded conceptual listing graphic for one kanal of land at Dharamgarh Mohali",
    summary:
      "One kanal of land is available for sale at Dharamgarh, Mohali, adjoining the Expo Extension Zone.",
    description: [
      "This land listing is presented for buyers exploring the wider Mohali airport-region corridor. Its exact relationship to planned development must be verified from the precise khasra and official records.",
      "Because planning and acquisition information can change, buyers should obtain current authority information and independent legal advice before taking any financial step.",
    ],
    facts: [
      { label: "Property type", value: "Land parcel" },
      { label: "Size", value: "1 kanal" },
      { label: "Location", value: "Dharamgarh, Mohali" },
      { label: "Area context", value: "Adjoining Expo Extension Zone" },
      { label: "Exact pin", value: "Confirm on enquiry" },
      { label: "Transaction", value: "For sale" },
    ],
    nearby: [
      "Expo City and airport-region planning context",
      "Airport Road and Aerocity corridor",
      "Chandigarh International Airport",
      "Road access toward Mohali, Chandigarh and Zirakpur",
      "Schools, hospitals and markets across the wider Mohali region",
    ],
    verification: [
      "Confirm the exact khasra number, title, possession and measured area.",
      "Check master-plan land use and any acquisition or Social Impact Assessment status.",
      "The map and image are approximate context only, not a survey or boundary plan.",
    ],
  },
  {
    slug: "aerocity-e-block-300-sqyd-resale-plot",
    title: "300 sq yd Plot in E Block, Aerocity",
    shortTitle: "Aerocity E Block · 300 sq yd",
    category: "Plot",
    status: "Resale",
    transaction: "For resale",
    location: "E Block, Aerocity, Mohali",
    locality: "Mohali",
    mapQuery: "E Block Aerocity Mohali",
    price: "On request",
    priceNote: "The asking price is negotiable, as stated in the supplied listing.",
    image: "/images/listings/aerocity-e-block-300-sqyd-plot.png",
    imageAlt:
      "Branded conceptual listing graphic for a 300 square yard residential resale plot in E Block Aerocity Mohali",
    summary:
      "A 300 sq yd residential plot is available for resale in E Block, Aerocity, Mohali.",
    description: [
      "This listing is for buyers comparing a residential plot in Mohali's planned Aerocity development with access to employment, healthcare, transport and retail destinations across the Tricity.",
      "The exact plot number, dimensions, facing, ownership, authority dues, transfer conditions and building controls should be confirmed before a site visit or payment.",
    ],
    facts: [
      { label: "Property type", value: "Residential plot" },
      { label: "Size", value: "300 sq yd" },
      { label: "Block", value: "E Block" },
      { label: "Location", value: "Aerocity, Mohali" },
      { label: "Price", value: "On request · negotiable" },
      { label: "Transaction", value: "Resale" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "ISBT Sector 43 Chandigarh",
      "Mohali IT Park Sector 67 and JLPL Sector 66A",
      "PGI Satellite Centre Sector 48 and GMCH Sector 32",
      "CP67 Mall and Elante Mall",
    ],
    verification: [
      "Confirm the plot number, title, dues, transfer conditions and exact site dimensions.",
      "Check facing, legal access and applicable GMADA building or development controls.",
      "Nearby references are approximate area context; confirm travel times from the exact pin.",
    ],
  },
];

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}
