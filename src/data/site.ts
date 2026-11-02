const vedangGoogleQuery =
  "Vedang Properties 171 MCC 2 GMADA Aerocity Mohali";

// Verified Google Business Profile Share URL
const googleProfileUrl =
  process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL?.trim() ||
  "https://share.google/OPXRIxW7Er3fVmykt";

// Direct "write a review" link, e.g.
// https://search.google.com/local/writereview?placeid=<YOUR_PLACE_ID>
// Set NEXT_PUBLIC_GOOGLE_REVIEW_URL once the Place ID is known. Until then the
// profile link is used, where the "Write a review" button is available.
const googleReviewUrl =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim() || googleProfileUrl;

export const businessHours = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  opens: "09:30",
  closes: "20:00",
  officeHoursDisplay: "Monday - Sunday: 9:30 AM - 8:00 PM (Open all 7 days)",
  onlineInquiryDisplay: "Online inquiries: 24 hours",
};

export const contact = {
  phoneDisplay: "+91 82646 30736",
  tel: "+918264630736",
  whatsapp: "918264630736",
  addressShort: "#171 MCC 2, Aerocity, Mohali",
  addressFull:
    "171, MCC - 2, GMADA Aerocity, Sahibzada Ajit Singh Nagar, Matran, Punjab 140306",
  // Update this only after confirming the verified Google Business Profile uses the same hours.
  officeHoursDisplay: businessHours.officeHoursDisplay,
  hoursDisplay: `${businessHours.officeHoursDisplay} | ${businessHours.onlineInquiryDisplay}`,
  googleProfileUrl,
  googleReviewUrl,
  googleMapsQuery: vedangGoogleQuery,
  googleMapsUrl: googleProfileUrl,
  googleDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    vedangGoogleQuery,
  )}`,
};

export const officialSourceLinks = [
  {
    label: "GMADA official updates",
    href: "https://gmada.gov.in/en",
  },
  {
    label: "GMADA online citizen services",
    href: "https://puda.gov.in/",
  },
];

export type SectionLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "google"
    | "review"
    | "direction"
    | "guide"
    | "area";
};

export type GoogleProfileCard = {
  businessName: string;
  ratingText?: string;
  address: string;
  profileUrl: string;
  reviewsUrl?: string;
  directionsUrl?: string;
  badge?: string;
};

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  links?: SectionLink[];
  googleProfileCard?: GoogleProfileCard;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  category: "Buyer Guide" | "Seller Guide" | "Market Notes";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  sections: ArticleSection[];
  sources?: { label: string; href: string }[];
  map?: {
    title: string;
    query: string;
    href: string;
  };
  faqs?: ArticleFaq[];
};

export const articles: Article[] = [
  {
    slug: "luxury-apartments-airport-road-mohali-marbella-homeland-falcon-hero-homes",
    category: "Buyer Guide",
    title:
      "Luxury Flats on Airport Road Mohali: Marbella Grand, Homeland, Falcon View & Hero Homes (2026 Price List & Guide)",
    excerpt:
      "Compare 2026 resale prices, floor plans, appreciation rates & verified location highlights for Marbella Grand, Homeland Heights, Falcon View & Hero Homes in Mohali.",
    date: "01 Nov 2026",
    readTime: "14 min read",
    image: "/images/google-ads-marbella-grand-clean-landscape.jpg",
    imageAlt:
      "Luxury flats in Mohali on Airport Road: Marbella Grand, Homeland Heights, Falcon View and Hero Homes",
    tags: [
      "Luxury flats in Mohali",
      "Marbella Grand Mohali",
      "Homeland Heights Mohali",
      "Falcon View Mohali",
      "Hero Homes Mohali",
      "Flats in Mohali for sale",
      "3BHK flats in Mohali",
      "Airport Road Mohali",
      "Property in Mohali",
      "Mohali luxury apartments 2026",
    ],
    sources: [
      {
        label: "Punjab RERA Official Portal",
        href: "https://rera.punjab.gov.in/",
      },
      {
        label: "GMADA Official Master Plan & Updates",
        href: "https://gmada.gov.in/en",
      },
      {
        label: "IGRS Punjab Collector Rates (SAS Nagar)",
        href: "https://igrspunjab.gov.in/",
      },
      {
        label: "NGDRS Punjab Registration Portal",
        href: "https://punjab.ngdrs.gov.in/",
      },
    ],
    map: {
      title: "Airport Road Luxury Residential Corridor & Vedang Properties",
      query:
        "Airport Road Mohali Marbella Grand Homeland Heights Falcon View",
      href: "https://www.google.com/maps/search/?api=1&query=Airport+Road+Mohali+Marbella+Grand+Homeland+Heights+Falcon+View",
    },
    sections: [
      {
        heading:
          "Airport Road (PR-7): Mohali's premier luxury high-rise residential corridor",
        paragraphs: [
          "Over the past five years, the 200-foot-wide PR-7 Airport Road corridor in SAS Nagar (Mohali) has transformed into the most sought-after luxury residential and commercial expressway in the entire Chandigarh Tricity region. Connecting Zirakpur, GMADA Aerocity, IT City, and Kharar with direct, signal-free access to the Shaheed Bhagat Singh International Airport, this belt commands premium attention from corporate executives, business families, and NRI investors searching for high-end flats in Mohali.",
          "While Mohali was traditionally known for standalone plotted kothis in older sectors, modern high-net-worth buyers increasingly prioritize integrated luxury societies. The demand is driven by multi-tier 24/7 security, professional facility management, resort-grade clubhouses, expansive green podiums, and covered multi-level parking—luxuries that standalone houses cannot replicate.",
          "Four landmark projects consistently dominate buyer shortlists along this corridor: Marbella Grand (Sector 82A), Homeland Heights (Sector 70), Falcon View (Sector 66A), and Hero Homes (Sector 88). Below is an objective, ground-verified comparison of their architectural layouts, livability, and investment potential—along with how Vedang Properties helps buyers navigate shortlisting and purchase execution.",
        ],
      },
      {
        heading:
          "Quick price & specification comparison: 4 landmark societies at a glance",
        bullets: [
          "Marbella Grand (Sector 82A / Airport Road): Spanish-inspired architecture, ultra-luxury 3+1 and 4+1 BHK sky-villas (approx. 2,580 to 3,620+ sq. ft.), skywalk amenities, and direct frontage on the IT City / Airport junction.",
          "Homeland Heights (Sector 70 / Airport Road): The established benchmark of Tricity luxury, 3, 4, and 5 BHK premium apartments and penthouses, unmatched central city connectivity, mature community living, and iconic landmark visibility.",
          "Falcon View by JLPL (Sector 66A): Sprawling 28.5-acre low-density township development, expansive 3 BHK and 4 BHK layouts (approx. 2,480 to 3,000+ sq. ft.), massive central sports and garden podiums, and immediate proximity to the International Airport traffic corridor.",
          "Hero Homes (Sector 88): Sustainable, green-certified living engineered by the trusted Hero Group, efficient 2 BHK, 3 BHK, and 3+1 BHK configurations, strong community infrastructure, and superior rental liquidity.",
        ],
      },
      {
        heading:
          "1. Marbella Grand (Sector 82A) – Resale prices, 3 & 4 BHK floor plans and amenities",
        image: "/images/google-ads-marbella-grand-clean-landscape.jpg",
        imageAlt:
          "Marbella Grand Luxury Apartments Sector 82A Airport Road Mohali",
        imageCaption:
          "Marbella Grand, Sector 82A: Spanish elevations, expansive sunlit balconies, and panoramic views of the Airport Road green corridor.",
        paragraphs: [
          "Situated directly on the growth axis of Sector 82A near IT City, Marbella Grand is widely recognized for introducing Spanish-inspired luxury elevations and royal architectural detailing to Mohali. Designed for buyers who desire expansive private living spaces, each apartment features large wrap-around balconies, private foyer entries, dedicated servant quarters, and imported marble flooring.",
          "The project is celebrated for its multi-level clubhouse amenities, including a climate-controlled indoor swimming pool, open-air skywalk, bowling alley, mini-cineplex, and fitness arenas. With prominent proximity to major multinational IT employers (Infosys, QuarkCity) and world-class universities, Marbella Grand represents the peak of high-end modern living in Greater Mohali.",
        ],
        bullets: [
          "Primary Configurations: 3 BHK + Store + Puja (approx. 2,580–2,601 sq. ft.) and 4 BHK + Store + Puja (approx. 3,612–3,672 sq. ft.), plus limited luxury 5 BHK sky-villas (approx. 7,111 sq. ft.).",
          "Current Indicative Resale Price List (2025–2026):\n• 3 BHK (2,580–2,601 sq. ft.): ₹2.60 Cr – ₹3.30 Cr (Depending on floor, interior fit-outs & park facing)\n• 4 BHK (3,612–3,672 sq. ft.): ₹3.95 Cr – ₹4.50 Cr+\n• 5 BHK Sky Villas / Penthouses (7,111 sq. ft.): ₹7.80 Cr+",
          "Price Per Sq. Ft. & Growth Trajectory: Current rates hover between ₹10,500 and ₹14,500+ per sq. ft. The project has recorded over 45%–50% capital appreciation since launch, propelled by the extreme scarcity of 2,600+ sq. ft. high-rise floor plans on the IT City corridor.",
          "Location & Transit Highlights:\n• Shaheed Bhagat Singh International Airport: 10–12 min (approx. 7 km)\n• Infosys & IT City Mohali Hub: 3–5 min\n• Premier Universities (ISB, Amity, Plaksha): 5–7 min\n• CP67 Mall & High Street Retail: 7–8 min\n• Fortis Hospital Mohali: 12 min\n• Tribune Chowk / Chandigarh Sector 34/35: 15 min",
          "Best Suited For: C-suite executives, senior IT leaders, NRI families, and industrialists seeking grand scale and resort-grade private amenities.",
        ],
        links: [
          {
            label: "Explore Airport Road Area Guide",
            href: "/areas/airport-road-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Consult Vedang on Marbella Grand Resale & Primary Units",
            href: "/contact",
            isExternal: false,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "2. Homeland Heights (Sector 70) – Verified resale price list, price growth & location",
        image: "/images/homeland-heights-resale-price-list.png",
        imageAlt:
          "Homeland Heights Sector 70 Mohali Resale Price List and Price Growth",
        imageCaption:
          "Homeland Heights Sector 70: Transparent 2025–2026 resale price list, 58% capital appreciation since 2018, and central location highlights.",
        paragraphs: [
          "Homeland Heights stands prominently at the bustling intersection of Sector 70 and Airport Road. Unlike newer suburban expansions, Homeland Heights enjoys a central Mohali municipal address, meaning residents are within a 5-minute radius of Mohali's most vibrant commercial markets (Phase 7 and Phase 3B2), Fortis Hospital, top ICSE/CBSE schools, and the Chandigarh border.",
          "The project features an earthquake-resistant RCC shear-wall structure, 3-tier electronic surveillance, an expansive landscaped central podium with zero vehicular movement at ground level, and a refined social community comprising doctors, advocates, corporate leaders, and prominent public figures.",
        ],
        bullets: [
          "Current Resale Price List (2025–2026 Indicative Values):\n• 3 BHK (1,788 – 2,200 sq. ft.): ₹2.5 Cr – ₹3.2 Cr (Available)\n• 4 BHK (2,800 – 3,500 sq. ft.): ₹3.5 Cr – ₹4.5 Cr (Limited Inventory)\n• 5 BHK (3,500 – 4,057 sq. ft.): ₹4.5 Cr – ₹5.5 Cr (Available)\n• Penthouses (4,057+ sq. ft.): ₹5.5 Cr+ (On Request)",
          "Price Growth Trajectory (Over 58% Appreciation Since 2018):\n• 2018 (Possession): ~₹8,500 per sq. ft.\n• 2020: ~₹9,200 per sq. ft.\n• 2022: ~₹10,500 per sq. ft.\n• 2024: ~₹12,100 per sq. ft.\n• 2025–2026: ~₹13,500 – ₹14,000 per sq. ft. (yielding over 58% cumulative capital gain)",
          "Location Highlights (Connected to Everything That Matters):\n• Elante Mall (Chandigarh): 10 min\n• North Country Mall (VR Punjab): 10 min\n• Chandigarh University: 10 min\n• IT City Mohali: 15 min\n• Fortis Hospital: 15 min\n• Chandigarh International Airport: 20 min",
          "Best Suited For: Buyers who refuse to compromise on city center proximity, want immediate ready possession without construction delays, and value an established, prestigious neighborhood.",
        ],
        links: [
          {
            label: "Punjab Stamp Duty & Registry Calculation Guide",
            href: "/blog/stamp-duty-and-property-registration-mohali-2026",
            isExternal: false,
            variant: "guide",
          },
          {
            label: "Inquire for Verified Homeland Heights Resale Units",
            href: "/contact",
            isExternal: false,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "3. Falcon View by JLPL (Sector 66A) – 28-acre green campus, prices & transit highlights",
        paragraphs: [
          "Developed by Janta Land Promoters Limited (JLPL), Falcon View is an expansive 28.5-acre gated residential marvel in Sector 66A. While many modern high-rises construct towers in tight proximity, Falcon View dedicates a massive percentage of its land parcel to open landscaped gardens, walking plazas, and outdoor sporting infrastructure.",
          "Located adjacent to the Indian Institute of Science Education and Research (IISER) and within minutes of GMADA Aerocity and the Mohali Railway Station, Falcon View provides unmatched openness, fresh air, and light ventilation. The project is fully gated with dedicated underground parking decks and an active resident community of over 800 families.",
        ],
        bullets: [
          "Primary Configurations: Generously planned 3 BHK + Servant (approx. 2,480–2,490 sq. ft.) and 4 BHK + Servant (approx. 3,008–3,110 sq. ft.), plus limited penthouses (3,800+ sq. ft.).",
          "Current Indicative Resale Price List (2025–2026):\n• 3 BHK + Servant (2,480–2,490 sq. ft.): ₹2.48 Cr – ₹3.25 Cr\n• 4 BHK + Servant (3,008–3,110 sq. ft.): ₹3.10 Cr – ₹3.85 Cr\n• Penthouses (3,800+ sq. ft.): ₹4.50 Cr+",
          "Price Per Sq. Ft. & Growth Trajectory: Current market rates average ₹10,000 to ₹12,800 per sq. ft. From early launch pricing around ₹5,500–₹6,500/sq. ft., the project has registered over 90%–100% cumulative appreciation, demonstrating exceptional capital preservation and zero execution risk.",
          "Location & Transit Highlights:\n• Chandigarh International Airport: 10–12 min (approx. 7.5 km)\n• Mohali Railway Station: 5 min\n• IISER & NABI Biotech Cluster: 2 min\n• GMADA Aerocity Commercial Belt: 4 min\n• CP67 Mall & Bestech Square: 8–10 min\n• Fortis Hospital: 12 min",
          "Best Suited For: Joint families and multi-generational households prioritizing open outdoor spaces for children and elderly parents, clean environment, and peaceful surroundings.",
        ],
        links: [
          {
            label: "Explore GMADA Aerocity Location Guide",
            href: "/areas/aerocity-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Checklist Before Shortlisting Properties in Mohali",
            href: "/blog/buying-plot-mohali-shortlisting-checks",
            isExternal: false,
            variant: "guide",
          },
        ],
      },
      {
        heading:
          "4. Hero Homes (Sector 88) – Sustainable luxury flats, price list & rental yields",
        paragraphs: [
          "Backed by the immense trust of the Hero Group (Hero Realty), Hero Homes in Sector 88 brings sustainable engineering and thoughtful master planning to the Airport Road corridor. Guided by the four core pillars of wellness—climate-responsive orientation, water conservation, green landscaping, and active lifestyle infrastructure—Hero Homes offers an ideal balance of modern luxury and practical affordability.",
          "Its strategic position in Sector 88 places residents close to upcoming GMADA administrative complexes, the Judicial Courts complex, and the connecting arterial road to QuarkCity and Kharar. Hero Homes also demonstrates exceptionally high tenant occupancy and rental liquidity.",
        ],
        bullets: [
          "Primary Configurations: Efficient 2 BHK / 2.5 BHK (approx. 1,095–1,290 sq. ft.), 3 BHK Variants (approx. 1,481–1,950 sq. ft.), and 4 BHK Luxury (approx. 3,490 sq. ft.).",
          "Current Indicative Price List (2025–2026):\n• 2 BHK / 2.5 BHK (1,095–1,290 sq. ft.): ₹95 Lakhs – ₹1.15 Cr\n• 3 BHK (1,481–1,950 sq. ft.): ₹1.35 Cr – ₹2.10 Cr\n• 4 BHK Luxury (3,490 sq. ft.): ₹2.86 Cr – ₹3.49 Cr",
          "Price Per Sq. Ft. & Growth Trajectory: Current rates hover between ₹9,300 and ₹11,000 per sq. ft. Hero Homes consistently records 10%–15% year-on-year appreciation, outpacing Sector 88's baseline while generating strong 3.8%–4.5% gross rental yields from nearby corporate IT and institutional tenants.",
          "Location & Transit Highlights:\n• Judicial Courts Complex & GMADA Administrative Hub: 3 min\n• Top Schools (Manav Mangal Smart School, Oakridge): 5–7 min\n• Sohana Hospital / Fortis Hospital: 8–10 min\n• QuarkCity & Phase 8 Industrial Area: 10 min\n• CP67 Mall: 10 min\n• Chandigarh International Airport: 18–20 min",
          "Best Suited For: Modern nuclear families, first-time luxury homebuyers, and investors looking for predictable rental income, lower maintenance overheads, and strong corporate brand governance.",
        ],
        links: [
          {
            label: "Explore IT City Mohali Guide",
            href: "/areas/it-city-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Contact Vedang for Hero Homes Resale & Builder Inventory",
            href: "/contact",
            isExternal: false,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "Head-to-head comparison: Marbella Grand vs. Homeland Heights vs. Falcon View vs. Hero Homes",
        bullets: [
          "For Grand Scale, High Specifications & International Vibe: Marbella Grand is the top choice, offering the most expansive private apartment footprints and resort-style indoor recreation along the airport axis.",
          "For Central Municipal Convenience & Established Prestige: Homeland Heights is unmatched, placing you right in Sector 70 with instant connectivity to mature commercial markets and Chandigarh.",
          "For Open Green Lawns, Outdoor Sports & Peace of Mind: Falcon View (JLPL) leads the category with its 28.5-acre sprawling campus and generous open space-to-building ratios.",
          "For Eco-Friendly Living, Balanced Budget & Rental Income: Hero Homes provides the highest liquidity, brand reliability, and efficient layouts for nuclear families and investors.",
        ],
      },
      {
        heading:
          "Essential buyer checklist: Resale verification & Punjab stamp duty rules",
        paragraphs: [
          "Purchasing a luxury apartment in SAS Nagar requires thorough legal and financial checks—especially when evaluating secondary market resales versus developer inventory. Overlooking hidden charges or incomplete paperwork can lead to unexpected outlays at the time of possession.",
        ],
        bullets: [
          "1. Developer Allotment vs. Resale Chain: In resale transactions, ensure that the entire chain of transfer agreements, original allotment letter, and builder endorsements are completely intact without any missing links.",
          "2. Builder No Dues Certificate (NDC): Before paying any advance token, demand an official No Objection Certificate (NOC) and NDC from the developer confirming that all construction installments, interest charges, and maintenance fees are fully cleared.",
          "3. Non-Encumbrance Verification (Form 15/16): Verify that the apartment is not pledged against an unpaid home loan or builder mortgage through certified searches at the Sub-Registrar DAC Sector 76.",
          "4. Clarify Incidental One-Time Charges: Always ask for a written breakdown of one-time charges, including IFMS (Interest-Free Maintenance Security), sinking funds, club membership fees, dual parking allocation charges, and power backup meter connection dues.",
          "5. Punjab Stamp Duty Math: Calculate statutory charges accurately. Punjab levies 7% stamp duty for male buyers, 5% for female buyers, and 6% for joint ownership, plus 1% registration fee based on SAS Nagar District Collector Rates under Section 47-A.",
        ],
      },
      {
        heading:
          "How Vedang Properties helps you buy apartments in these projects",
        image: "/images/vedang-luxury-advisory-mohali-2026.png",
        imageAlt:
          "Vedang Properties (vedangproperties.in) Luxury Residential Projects Advisory Mohali",
        imageCaption:
          "Vedang Properties (vedangproperties.in): Unbiased inventory comparison, title scrutiny, and purchase due diligence across Marbella Grand, Homeland Heights, Falcon View, and Hero Homes.",
        paragraphs: [
          "Navigating high-ticket luxury real estate along Mohali's Airport Road requires grounded local clarity, not sales talk. At Vedang Properties, headquartered permanently at #171 MCC-2 in GMADA Aerocity, we act as your dedicated buyer advocates throughout the entire property acquisition journey.",
          "Here is exactly how our advisory team assists you in securing the best home across Marbella Grand, Homeland Heights, Falcon View, Hero Homes, or other premium societies:",
        ],
        bullets: [
          "1. 100% Unbiased Inventory Shortlisting (Primary vs. Resale): Unlike project sales desks incentivized to push specific builder inventory, we represent your interests. We compare direct developer inventory against genuine, distress, or early-allottee resale listings to ensure you secure the most competitive rate per square foot.",
          "2. Unit-Level Selection Precision: Two apartments in the same society can have vastly different living experiences. We inspect on-ground sunlight orientation (North-East morning sun vs. harsh South-West afternoon exposure), corner ventilation, floor height privacy, elevator proximity, and road traffic noise levels along Airport Road before you shortlist.",
          "3. Rigorous Document Scrutiny & Title Verification: We inspect the original parent deeds, developer LOI/allotments, builder NOCs, maintenance RWA clearance, and encumbrance certificates so your investment is 100% legally clean and litigation-free.",
          "4. Total Acquisition Cost Transparency: We provide a clear mathematical breakdown of the total capital outlay—including base price, preferential location charges (PLC), IFMS deposits, club fees, GST (where applicable), and exact Punjab stamp duty and registration fees—eliminating last-minute financial surprises.",
          "5. Seamless Home Loan & Sub-Registrar Registry Support: We coordinate with approved nationalized and private banking partners (HDFC, SBI, ICICI) for fast title clearances and competitive loan rates. Finally, our senior team physically accompanies you to the Sub-Registrar Tehsil Complex at the Sector 76 District Administrative Complex for smooth biometric execution and certified deed handover.",
        ],
        googleProfileCard: {
          businessName: "Vedang Properties",
          ratingText: "5.0 ★ Rating on Google (Verified Business Profile)",
          address:
            "171, MCC - 2, GMADA Aerocity, Sahibzada Ajit Singh Nagar, Punjab 140306",
          profileUrl: "https://share.google/OPXRIxW7Er3fVmykt",
          reviewsUrl: "https://share.google/OPXRIxW7Er3fVmykt",
          directionsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Vedang%20Properties%20171%20MCC%202%20GMADA%20Aerocity%20Mohali",
          badge: "Verified Real Estate Advisory Hub",
        },
        links: [
          {
            label: "Open Verified Google Business Profile",
            href: "https://share.google/OPXRIxW7Er3fVmykt",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Get Turn-by-Turn Directions to Aerocity Office",
            href: "https://www.google.com/maps/dir/?api=1&destination=Vedang%20Properties%20171%20MCC%202%20GMADA%20Aerocity%20Mohali",
            isExternal: true,
            variant: "direction",
          },
          {
            label: "Call Office Directly: +91 82646 30736",
            href: "tel:+918264630736",
            isExternal: true,
            variant: "primary",
          },
          {
            label: "WhatsApp Real Estate Advisory Desk",
            href: "https://wa.me/918264630736?text=Hello%20Vedang%20Properties%2C%20I%20want%20guidance%20on%20luxury%20apartments%20on%20Airport%20Road%20Mohali.",
            isExternal: true,
            variant: "primary",
          },
          {
            label: "Explore Airport Road Area Guide",
            href: "/areas/airport-road-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Punjab Stamp Duty & Registration Guide (2026)",
            href: "/blog/stamp-duty-and-property-registration-mohali-2026",
            isExternal: false,
            variant: "guide",
          },
          {
            label: "Schedule In-Person Advisory at Aerocity Office",
            href: "/contact",
            isExternal: false,
            variant: "primary",
          },
        ],
      },
    ],
    faqs: [
      {
        question:
          "Which is the best luxury apartment society on Airport Road Mohali?",
        answer:
          "The choice depends on your primary lifestyle priority:\n• Marbella Grand (Sector 82A) is the top choice for grand sky-villa living (2,580 to 3,670+ sq. ft.) with Spanish elevations and resort-grade indoor amenities.\n• Homeland Heights (Sector 70) is ideal for buyers seeking established prestige, mature community living, and instant 5-minute connectivity to Phase 7/Phase 3B2 and Chandigarh.\n• Falcon View by JLPL (Sector 66A) leads in open green spaces with its sprawling 28.5-acre low-density campus and dedicated sports infrastructure.\n• Hero Homes (Sector 88) offers trusted corporate brand governance, sustainable wellness features, and excellent rental liquidity.",
      },
      {
        question:
          "What is the current resale price in Homeland Heights Sector 70 Mohali?",
        answer:
          "As of 2025–2026, indicative resale prices at Homeland Heights range from ₹2.5 Cr to ₹3.2 Cr for 3 BHK (1,788–2,200 sq. ft.), ₹3.5 Cr to ₹4.5 Cr for 4 BHK (2,800–3,500 sq. ft.), ₹4.5 Cr to ₹5.5 Cr for 5 BHK (3,500–4,057 sq. ft.), and ₹5.5 Cr+ for penthouses. The project has registered over 58% capital appreciation since 2018.",
      },
      {
        question:
          "What are the flat sizes, prices, and rates in Marbella Grand Sector 82A Mohali?",
        answer:
          "Marbella Grand offers 3 BHK + Store + Puja (2,580–2,601 sq. ft.) priced between ₹2.60 Cr and ₹3.30 Cr, and 4 BHK + Store + Puja (3,612–3,672 sq. ft.) priced between ₹3.95 Cr and ₹4.50 Cr+. Limited 5 BHK sky villas (approx. 7,111 sq. ft.) start from ₹7.80 Cr+. Average per-square-foot rates range from ₹10,500 to ₹14,500+.",
      },
      {
        question:
          "What is the Punjab stamp duty and registration charge on luxury apartments in Mohali?",
        answer:
          "Stamp duty in SAS Nagar (Mohali) is 7% for male buyers, 5% for female buyers (enjoying a 2% state government concession), and 6% for joint ownership. An additional 1% registration fee and applicable municipal/social infrastructure cesses apply under Section 47-A collector rate valuation. Vedang Properties provides certified pre-registration calculations before token deposits.",
      },
      {
        question:
          "What legal due diligence should I conduct before purchasing a resale flat on Airport Road?",
        answer:
          "Essential checks include:\n1) Verifying the complete allotment and transfer agreement chain back to the original developer\n2) Obtaining an official No Dues Certificate (NDC) and NOC from the builder\n3) Checking Form 15/16 Non-Encumbrance records at the Sub-Registrar DAC Sector 76\n4) Validating one-time charges such as IFMS, sinking funds, and dual parking bay allotments\n5) Reviewing society RWA bylaws and monthly maintenance dues.",
      },
      {
        question:
          "How can Vedang Properties help me buy an apartment in Marbella Grand, Homeland, Falcon View, or Hero Homes?",
        answer:
          "Vedang Properties (headquartered at #171 MCC-2 in GMADA Aerocity) acts as your independent buyer consultant. We compare direct developer inventory with genuine private resale listings to secure the best rates, inspect unit-level sunlight/privacy factors, verify all title and encumbrance papers, and physically accompany you through registry execution at the Sub-Registrar DAC Sector 76.",
      },
    ],
  },
  {
    slug: "top-10-property-dealers-in-mohali-2026-guide",
    category: "Market Notes",
    title:
      "Top 10 property dealers and real estate consultants in Mohali (2026 selection & due diligence guide)",
    excerpt:
      "A practical, verified guide to the top property dealers and real estate consultants in Mohali, SAS Nagar, and Aerocity—categorized by micro-market specialization, RERA compliance, and buyer due diligence.",
    date: "22 Oct 2026",
    readTime: "14 min read",
    image: "/images/blog-area-comparison.jpg",
    imageAlt:
      "Top property dealers and real estate consultants in Mohali SAS Nagar",
    tags: [
      "Property dealers in Mohali",
      "Real estate consultants",
      "Best property dealers in Mohali",
      "Aerocity Mohali",
      "GMADA plots",
      "Mohali real estate 2026",
    ],
    sources: [
      {
        label: "Punjab RERA Official Portal",
        href: "https://rera.punjab.gov.in/",
      },
      {
        label: "GMADA Official Citizen Services",
        href: "https://gmada.gov.in/en",
      },
      {
        label: "IGRS Punjab Collector Rates (SAS Nagar)",
        href: "https://igrspunjab.gov.in/",
      },
      {
        label: "NGDRS Punjab Registration Portal",
        href: "https://punjab.ngdrs.gov.in/",
      },
      {
        label: "PUDA Citizen Services (NDC & Ownership Change)",
        href: "https://puda.gov.in/",
      },
    ],
    map: {
      title: "Mohali Real Estate Advisory Hub & Aerocity Corridor",
      query: "Vedang Properties 171 MCC 2 GMADA Aerocity Mohali",
      href: "https://www.google.com/maps/search/?api=1&query=Vedang+Properties+171+MCC+2+GMADA+Aerocity+Mohali",
    },
    sections: [
      {
        heading:
          "Why choosing the right property consultant in Mohali matters in 2026",
        paragraphs: [
          "Mohali (SAS Nagar) has evolved from a satellite town of Chandigarh into one of North India's most dynamic real estate corridors. With mega infrastructure developments across PR-7 Airport Road, GMADA Aerocity, IT City (Sectors 82–83), and New Chandigarh, thousands of homebuyers, commercial investors, and NRI families enter the market every month.",
          "However, navigating Mohali's property landscape is fundamentally different from buying in mature metropolitan centers like Delhi or Mumbai. Here, the market is strictly divided between GMADA-planned urban estates, private builder societies, municipal corporation sectors, and suburban expansion belts. Each comes with distinct documentation, transfer rules, and statutory fee calculations.",
          "Working with an unverified or inexperienced broker often means inflated price quotes, undisclosed authority dues, circle rate discrepancies leading to Section 47-A stamp duty penalties, or disputes over land mutation (Inteqal). Choosing an authentic, corridor-specialized property consultant is the single most critical decision in protecting your capital.",
        ],
      },
      {
        heading:
          "The 5 essential due diligence filters before hiring a Mohali property dealer",
        bullets: [
          "1. Punjab RERA Registration & Compliance: Under the Real Estate (Regulation and Development) Act, any agent brokering registered builder projects must hold a valid Punjab RERA agent license (verifiable on rera.punjab.gov.in). Never work with unverified operators who cannot provide credentials.",
          "2. Physical On-Ground Office Presence: Mohali has seen an influx of fly-by-night brokers who operate exclusively from cars or phone numbers. Always insist on visiting a dealer's physical office in Mohali or Aerocity to verify their local roots, staff permanence, and community standing.",
          "3. Deep Familiarity with GMADA & PUDA Citizen Portals: For plotted land in Aerocity, IT City, or EcoCity, the consultant must demonstrate hands-on fluency with the PUDA citizen portal (puda.gov.in), No Dues Certificate (NDC) generation, Letter of Intent (LOI) verification, and official ownership transfer procedures.",
          "4. Circle Rate (Collector Rate) Transparency: In Punjab, stamp duty must be calculated on the higher of the transaction value or the notified SAS Nagar Collector Rate. An honest consultant calculates statutory government levies upfront so buyers aren't blindsided by liquidity shortages at the Tehsil complex.",
          "5. Clear, Written Brokerage Terms: Trustworthy consultants maintain standard, transparent fee structures (typically 1% on secondary market transactions or flat statutory advisory fees), with zero hidden markups or intermediary price inflation.",
        ],
      },
      {
        heading:
          "Top 10 property dealers and real estate consultants in Mohali by specialization",
        paragraphs: [
          "Rather than relying on an arbitrary ranking, the most practical way to evaluate real estate consultants in Mohali is by their micro-market specialization, corridor focus, and on-ground track record.",
          "Below is a detailed, objective review of Mohali's 10 most established real estate agencies and consultancies for 2026, helping you choose the right partner for your exact property requirement:",
        ],
      },
      {
        heading:
          "1. Vedang Properties – GMADA Aerocity, IT City & Airport Road Plotted Specialist",
        image: "/images/vedang-properties-areas-we-serve-landscape.png",
        imageAlt:
          "Vedang Properties - Verified Google Business Profile & Mohali Advisory",
        imageCaption:
          "Verified Business Profile & Micro-markets: Vedang Properties, #171 MCC-2, GMADA Aerocity, Mohali",
        googleProfileCard: {
          businessName: "Vedang Properties",
          ratingText: "5.0 ★ Rating on Google (Verified Business Profile)",
          address:
            "171, MCC - 2, GMADA Aerocity, Sahibzada Ajit Singh Nagar, Punjab 140306",
          profileUrl:
            "https://share.google/OPXRIxW7Er3fVmykt",
          reviewsUrl:
            "https://share.google/OPXRIxW7Er3fVmykt",
          directionsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=Vedang%20Properties%20171%20MCC%202%20GMADA%20Aerocity%20Mohali",
          badge: "Verified Google Business Profile",
        },
        bullets: [
          "Headquarters: #171 MCC 2, GMADA Aerocity, SAS Nagar, Punjab 140306 | Phone: +91 82646 30736.",
          "Core Specialization: GMADA Plotted Land (Aerocity Blocks A to G, IT City Sectors 82 & 83), Airport Road Commercial SCOs & Showrooms, Premium Independent Builder Floors, and Statutory Legal Due Diligence.",
          "Key Strengths: Stationed directly on-ground in Aerocity MCC-2, Vedang Properties has earned a reputation for zero-pressure advisory and rigorous document scrutiny. They provide mathematically worked-out statutory breakdowns covering Punjab stamp duty (including women's concessions), collector rate cross-verifications, and complete Sub-Registrar execution support at the Sector 76 District Administrative Complex.",
          "Best Suited For: Buyers seeking GMADA-approved residential or commercial plots, investors seeking prime Airport Road commercial frontage, and NRI clients requiring end-to-end legal title verification and digital mutation tracking.",
        ],
        links: [
          {
            label: "Open Verified Google Business Profile",
            href: "https://share.google/OPXRIxW7Er3fVmykt",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Get Office Directions on Google Maps",
            href: "https://www.google.com/maps/dir/?api=1&destination=Vedang%20Properties%20171%20MCC%202%20GMADA%20Aerocity%20Mohali",
            isExternal: true,
            variant: "direction",
          },
          {
            label: "Read Google Reviews",
            href: "https://share.google/OPXRIxW7Er3fVmykt",
            isExternal: true,
            variant: "review",
          },
          {
            label: "Explore GMADA Aerocity Plots & Location Guide",
            href: "/areas/aerocity-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Explore IT City Sector 82–83 Guide",
            href: "/areas/it-city-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Airport Road Commercial Corridor",
            href: "/areas/airport-road-mohali",
            isExternal: false,
            variant: "area",
          },
          {
            label: "Punjab Stamp Duty & Registry Calculation Guide (2026)",
            href: "/blog/stamp-duty-and-property-registration-mohali-2026",
            isExternal: false,
            variant: "guide",
          },
          {
            label: "Checklist Before Shortlisting a Plot in Mohali",
            href: "/blog/buying-plot-mohali-shortlisting-checks",
            isExternal: false,
            variant: "guide",
          },
          {
            label: "Commercial Property & SCO Due Diligence",
            href: "/blog/commercial-property-mohali-visit-checks",
            isExternal: false,
            variant: "guide",
          },
          {
            label: "Schedule In-Person Advisory at Aerocity Office",
            href: "/contact",
            isExternal: false,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "2. Whitestone Realty – Aerocity & Airport Road Luxury High-Rise Living",
        bullets: [
          "Location: Aerocity / Airport Road Corridor, Mohali.",
          "Core Specialization: Luxury High-Rise Gated Communities, Designer Builder Floors, and NRI Residential Portfolios.",
          "Key Strengths: Whitestone Realty maintains a prominent presence on the Airport Road belt, handling primary developer inventory in landmark multi-story projects (such as Uptown Skylla and the Marbella Grand catchment) as well as independent floors.",
          "Best Suited For: High-net-worth families and overseas buyers looking for luxury multi-story apartments with modern clubhouse amenities along the airport movement belt.",
        ],
        links: [
          {
            label: "Whitestone Realty Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Whitestone+Realty+Aerocity+Mohali",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Official Website (Whitestone Realty)",
            href: "https://whitestonerealty.net/",
            isExternal: true,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "3. Royals Property Consultant – Core Mohali Municipal Sectors & Resale Kothis",
        bullets: [
          "Location: SAS Nagar Central Sectors, Mohali.",
          "Core Specialization: Established Urban Estates (Sectors 68, 69, 70, 71, and 76–80), Resale Kothis, and Municipal Commercial Booths.",
          "Key Strengths: Backed by over a decade of local market presence, Royals Property Consultant (led by RERA-certified advisors) has a deep seller network within Mohali's mature municipal sectors where independent kothis and built homes dominate.",
          "Best Suited For: End-users wanting ready-to-move family residences in mature sectors close to established schools, hospitals (Fortis, Max), and Chandigarh borders.",
        ],
        links: [
          {
            label: "Royals Property Consultant Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Royals+Property+Consultant+Mohali",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Official Website (Royals Property)",
            href: "https://royalspropertyconsultant.com/",
            isExternal: true,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "4. Aero Infra Property Dealers – Aerocity Commercial & JLPL Industrial Belt",
        bullets: [
          "Location: JLPL Industrial Area & Aerocity, Mohali.",
          "Core Specialization: Industrial Plots, Warehousing Facilities, JLPL IT Park Spaces, and Commercial Parcels.",
          "Key Strengths: Strong focus on business and light-industrial real estate, helping entrepreneurs, logistics providers, and corporate offices secure clear-title industrial land parcels and commercial spaces.",
          "Best Suited For: Corporate clients, factory owners, warehousing operators, and commercial investors seeking frontage on the PR-7 highway.",
        ],
        links: [
          {
            label: "Aero Infra Property Dealers Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Aero+Infra+Property+Dealers+Aerocity+Mohali",
            isExternal: true,
            variant: "google",
          },
        ],
      },
      {
        heading:
          "5. Trendz Properties – GMADA Urban Estates & Fresh Builder Collaborations",
        bullets: [
          "Location: Mohali & Greater Tricity.",
          "Core Specialization: GMADA Plotted Townships, Builder Floors, and New Project Allotments.",
          "Key Strengths: Wide network across fresh developer launches and joint-venture plotted developments across the Tricity periphery.",
          "Best Suited For: Buyers looking to compare multiple developer-driven townships across Mohali and adjoining Zirakpur corridors.",
        ],
        links: [
          {
            label: "Trendz Properties Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Trendz+Properties+Mohali",
            isExternal: true,
            variant: "google",
          },
        ],
      },
      {
        heading:
          "6. Fortune Real Estate – Central Mohali (Sectors 70–71) & Commercial Booths",
        bullets: [
          "Location: Sector 70, Mohali.",
          "Core Specialization: Commercial SCOs, Bay Shops, Double-Story Booths, and Residential Resales in Central Mohali.",
          "Key Strengths: Deep local penetration in high-density commercial markets like Sector 70 and Mattaur market, with excellent landlord connections for commercial leasing.",
          "Best Suited For: Retailers, clinics, and business owners looking to lease or buy established commercial shops with ready footfall.",
        ],
        links: [
          {
            label: "Fortune Real Estates Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Fortune+Real+Estates+Sector+70+Mohali",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Official Website (Fortune Real Estates)",
            href: "https://fortunerealestates.co.in/",
            isExternal: true,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "7. Taneja Realtors – Suburban Mohali (Kharar, Sunny Enclave & Landran)",
        bullets: [
          "Location: Kharar-Mohali Highway.",
          "Core Specialization: Affordable Residential Apartments, 2/3 BHK Budget Builder Floors, and Plotted Colonies in Suburban Mohali.",
          "Key Strengths: Strong grasp of the fast-growing suburban corridor connecting Mohali to Kharar, Landran, and Kurali, catering to university staff, IT employees, and first-time home buyers.",
          "Best Suited For: Budget-conscious buyers seeking homes under ₹35 to ₹55 Lakhs within commuting distance of Mohali's IT corridor.",
        ],
        links: [
          {
            label: "Taneja Realtors Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Taneja+Realtors+Mohali+Kharar",
            isExternal: true,
            variant: "google",
          },
        ],
      },
      {
        heading:
          "8. Alvis Estates – PR-7 Airport Road & Zirakpur Gated Communities",
        bullets: [
          "Location: Airport Road / Zirakpur-Mohali Border.",
          "Core Specialization: Premium High-Rise Societies, Ready-to-Move Group Housings, and Highway Commercial Hubs.",
          "Key Strengths: Comprehensive portfolio of multi-story apartment options spanning the Mohali-Zirakpur boundary, providing comparative analysis across major private developers.",
          "Best Suited For: Buyers prioritizing expressway connectivity to Delhi, Panchkula, and Chandigarh who prefer gated society security over independent plotted land.",
        ],
        links: [
          {
            label: "Alvis Estates Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Alvis+Estates+Airport+Road+Mohali",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Official Website (Alvis Estates)",
            href: "https://alvisestates.in/",
            isExternal: true,
            variant: "primary",
          },
        ],
      },
      {
        heading:
          "9. Guru Estates – New Chandigarh (EcoCity 1 & 2, Medicity & Mullanpur)",
        bullets: [
          "Location: New Chandigarh (Mullanpur) / North Mohali.",
          "Core Specialization: EcoCity Master Planned Plots, Medicity, Omaxe New Chandigarh, and DLF Hyde Park Properties.",
          "Key Strengths: Specialized knowledge of GMADA's New Chandigarh master plan, mountain-view residential sectors, and mega-township regulations.",
          "Best Suited For: High-budget investors and families looking for luxury township living in New Chandigarh's low-density green corridors.",
        ],
        links: [
          {
            label: "Guru Estates Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=Guru+Estates+New+Chandigarh+Mohali",
            isExternal: true,
            variant: "google",
          },
        ],
      },
      {
        heading:
          "10. AJ Estates & Pioneer Property – Institutional Belts & Rental Portfolios",
        bullets: [
          "Location: Mohali.",
          "Core Specialization: Institutional Land Parcels, Mixed-Use Investor Portfolios, and Residential Rental Management.",
          "Key Strengths: Longstanding presence in the Tricity real estate market with broad contacts among institutional investors and corporate tenants.",
          "Best Suited For: Passive investors seeking hands-off rental management or portfolio diversification across commercial and residential assets.",
        ],
        links: [
          {
            label: "AJ Estates Google Business Profile",
            href: "https://www.google.com/maps/search/?api=1&query=AJ+Estates+Mohali",
            isExternal: true,
            variant: "google",
          },
        ],
      },
      {
        heading:
          "Quick comparison: Which Mohali property consultant matches your requirement?",
        bullets: [
          "Plotted Land in Aerocity (Blocks A–G) or IT City: Choose Vedang Properties (#171 MCC-2 Aerocity) for on-ground plot verification, GMADA NDC checks, and collector rate accuracy.",
          "Luxury High-Rise Flats on Airport Road: Consider Whitestone Realty or Alvis Estates for gated society amenities and multi-story developer options.",
          "Independent Kothis in Mature Sectors (Sec 68–71, 79–80): Consult Royals Property Consultant or Fortune Real Estate for established neighborhood resales.",
          "Budget Housing & Floors in Kharar / Landran: Look at Taneja Realtors for affordable suburban developments.",
          "Township Plots & Villas in New Chandigarh: Work with Guru Estates for EcoCity and Mullanpur developments.",
          "Industrial Warehousing & JLPL Park: Contact Aero Infra for commercial and industrial land parcels.",
        ],
      },
      {
        heading:
          "Red flags: When you should immediately walk away from a property dealer",
        bullets: [
          "Unreasonable Pressure for Immediate Cash Tokens: Never hand over cash or token amounts before reviewing certified parent title deeds, GMADA allotment papers, and encumbrance records.",
          "Reluctance to Disclose Exact Sector or Plot Coordinates: Authentic consultants provide exact Khasra, sector, and block details upfront rather than keeping the location vague.",
          "Evasion Around Circle Rates and Registration Duties: If a broker claims 'registry will be done cheaply' without explaining Section 47-A collector rate rules, they are putting you at risk of state revenue audits and penal interest.",
          "No Physical Office in Mohali: Avoid consultants who only meet in coffee shops or cars and have no verifiable address in SAS Nagar.",
          "Unregistered Power of Attorney (PoA) Sales: In Punjab, property transfers on unregistered or dubious General Power of Attorney documents carry massive litigation risk. Demand clear freehold conveyance deeds.",
        ],
      },
      {
        heading:
          "How Vedang Properties delivers grounded advisory in GMADA Aerocity",
        image: "/images/vedang-properties-introduction.png",
        imageAlt:
          "Vedang Properties In-Person Consultation Hub in Aerocity Mohali",
        imageCaption:
          "Visit Vedang Properties at #171 MCC 2, GMADA Aerocity for verified ground intelligence and document verification.",
        paragraphs: [
          "At Vedang Properties, based permanently at #171 MCC 2 in GMADA Aerocity, we operate on a strict philosophy of zero hype, transparent documentation, and client-first due diligence.",
          "Whether you are purchasing a 200 sq. yard plot in Aerocity Block C, an industrial asset in IT City, or commercial SCO space along Airport Road, we walk you through every step: GMADA allotment letters, non-encumbrance status, statutory stamp duty calculations, and final execution at the Sub-Registrar DAC Sector 76.",
          "We invite you to visit our office in Aerocity to discuss your real estate requirements over coffee—grounded in real numbers, verified facts, and zero sales pressure.",
        ],
        links: [
          {
            label: "Open Google Business Profile",
            href: "https://share.google/OPXRIxW7Er3fVmykt",
            isExternal: true,
            variant: "google",
          },
          {
            label: "Get Turn-by-Turn Directions to Aerocity Office",
            href: "https://www.google.com/maps/dir/?api=1&destination=Vedang%20Properties%20171%20MCC%202%20GMADA%20Aerocity%20Mohali",
            isExternal: true,
            variant: "direction",
          },
          {
            label: "Call Office Directly: +91 82646 30736",
            href: "tel:+918264630736",
            isExternal: true,
            variant: "primary",
          },
          {
            label: "WhatsApp Real Estate Advisory Desk",
            href: "https://wa.me/918264630736?text=Hello%20Vedang%20Properties%2C%20I%20read%20your%20top%20dealers%20guide%20and%20want%20to%20consult%20for%20Mohali.",
            isExternal: true,
            variant: "primary",
          },
        ],
      },
    ],
  },
  {
    slug: "stamp-duty-and-property-registration-mohali-2026",
    category: "Buyer Guide",
    title:
      "Punjab stamp duty and property registration charges in Mohali (2026 statutory guide)",
    excerpt:
      "A complete, mathematically worked-out statutory guide to Punjab stamp duty rates, women's concessions, SAS Nagar collector rates, NGDRS online portal procedures, and GMADA transfer fees.",
    date: "16 Oct 2026",
    readTime: "12 min read",
    image: "/images/blog-verify-documents.jpg",
    imageAlt:
      "Official property registration and document verification in Mohali Punjab",
    tags: [
      "Stamp duty Mohali",
      "Punjab property registry",
      "NGDRS Punjab",
      "Collector rates SAS Nagar",
      "GMADA transfer fee",
      "Legal due diligence",
    ],
    sources: [
      {
        label: "NGDRS Punjab (Official Registration & Appointment Portal)",
        href: "https://punjab.ngdrs.gov.in/",
      },
      {
        label: "IGRS Punjab (District Collector Rates SAS Nagar)",
        href: "https://igrspunjab.gov.in/",
      },
      {
        label: "PLRS Jamabandi & Digital Land Records (Fard & Mutation)",
        href: "https://plrs.org.in/",
      },
      {
        label: "PUDA / GMADA Online Citizen Services (NDC & Ownership Change)",
        href: "https://puda.gov.in/",
      },
      {
        label: "SHCIL Punjab e-Stamping Verification",
        href: "https://www.shcilestamp.com/",
      },
      {
        label: "SAS Nagar District Administration (DAC Sector 76)",
        href: "https://sasnagar.punjab.gov.in/",
      },
    ],
    map: {
      title: "Sub-Registrar Office SAS Nagar Mohali (Tehsil Complex, DAC Sector 76)",
      query:
        "Sub Registrar Office Mohali SAS Nagar District Administrative Complex Sector 76",
      href: "https://www.google.com/maps/search/?api=1&query=Sub+Registrar+Office+Mohali+SAS+Nagar+District+Administrative+Complex+Sector+76",
    },
    sections: [
      {
        heading: "The true acquisition cost equation in SAS Nagar (Mohali)",
        paragraphs: [
          "When purchasing real estate across Mohali, Aerocity, IT City, Kharar, or Zirakpur, many buyers mistakenly budget solely for the agreed base property price. In Punjab, however, mandatory statutory levies—primarily stamp duty, the state registration fee, and rural/social infrastructure cesses—add between 6% and 9% to the total capital outlay.",
          "Failing to account for these government charges in advance leads to unexpected liquidity shortfalls when executing deeds at the Sub-Registrar's office. Understanding Punjab's statutory fee structure allows families to legally optimize their ownership setup through government-notified concessions.",
        ],
      },
      {
        heading: "Punjab stamp duty rate matrix (2026 statutory rates)",
        paragraphs: [
          "Under the Indian Stamp Act, 1899 (as amended by the State of Punjab), stamp duty is a mandatory state tax payable on instruments of conveyance, sale, gift, and exchange. Punjab revenue rules offer progressive, gender-differentiated duty tiers specifically to encourage property ownership among women:",
        ],
        bullets: [
          "Sole Female Buyer: 5% Total Duty — Includes 3% Basic Stamp Duty (with a 2% statutory state concession for women), plus 1% Punjab Social Security Fund (PSSF) Cess, and 1% Punjab Rural Infrastructure Development Board (PRIDB) Cess.",
          "Sole Male Buyer: 7% Total Duty — Includes 5% Basic Stamp Duty, plus 1% PSSF Cess, and 1% PRIDB Cess.",
          "Joint Ownership (Male + Female, e.g., Husband & Wife): 6% Total Duty — Blended 4% Basic Stamp Duty, plus 1% PSSF Cess, and 1% PRIDB Cess (yielding an effective 1% net saving across the transaction).",
          "Joint Ownership (Female + Female): 5% Total Duty — Retains the full 2% statutory concession across the entire consideration.",
          "Joint Ownership (Male + Male): 7% Total Duty — Standard rate applied across the entire valuation.",
          "Registration Fee: Flat 1% of the total transaction or collector value (levied uniformly across all categories by the Punjab Revenue Department).",
          "Pasting / Computer Facilitation Fee: ₹500 to ₹1,000 per deed at the Sub-Registrar counter.",
        ],
      },
      {
        heading: "Circle rate (Collector rate) versus Agreement value: Section 47-A",
        paragraphs: [
          "Under Punjab Stamp Rules, stamp duty and registration fees must be computed on whichever figure is HIGHER: the actual transaction/agreement consideration, or the notified District Collector Rate (Circle Rate) published by the SAS Nagar District Administration.",
          "Collector rates vary substantially across Mohali's micro-markets. For instance, GMADA-planned urban estates (Aerocity Blocks A–G, IT City Sectors 82–83, and EcoCity New Chandigarh) command different per-square-yard benchmark rates than municipal sectors (Sectors 68–71) or suburban growth belts (Kharar, Majri, and Zirakpur). Buyers can cross-reference the official notified rates on the IGRS Punjab portal (igrspunjab.gov.in) before drawing stamp paper.",
          "Important Legal Note (Section 47-A): If an agreement is registered below the prevailing collector rate, the Sub-Registrar will impound the instrument and forward it to the Collector under Section 47-A of the Indian Stamp Act for recovery of deficit stamp duty, along with penal interest (typically 12% to 18% per annum) and statutory fines.",
        ],
      },
      {
        heading:
          "Worked Calculation 1: 3 BHK Apartment in Sector 82 / Airport Road (₹80 Lakhs)",
        paragraphs: [
          "Consider a buyer purchasing a 3-bedroom luxury flat near Airport Road with an agreed market and collector valuation of ₹80,00,000 (₹80 Lakhs). Here is the exact mathematical comparison of government charges based on deed structuring:",
        ],
        bullets: [
          "Option A: Registered solely in Husband's name (Male)\n• Stamp Duty (7%): ₹5,60,000\n• Registration Fee (1%): ₹80,000\n• Total Government Registry Outlay: ₹6,40,000",
          "Option B: Registered solely in Wife's name (Female)\n• Stamp Duty (5%): ₹4,00,000\n• Registration Fee (1%): ₹80,000\n• Total Government Registry Outlay: ₹4,80,000\n• Direct Financial Saving: ₹1,60,000 (A direct 2.0% cash saving on total purchase cost).",
          "Option C: Joint Registration (Husband & Wife)\n• Stamp Duty (6%): ₹4,80,000\n• Registration Fee (1%): ₹80,000\n• Total Government Registry Outlay: ₹5,60,000\n• Direct Financial Saving: ₹80,000 (A balanced compromise combining legal co-ownership and stamp savings).",
        ],
      },
      {
        heading:
          "Worked Calculation 2: GMADA Plotted Land in Aerocity / IT City (₹1.50 Crore)",
        paragraphs: [
          "For plotted developments in GMADA Aerocity (Blocks A–G) or IT City, transaction structures vary depending on whether the property is being transferred prior to conveyance (Direct Allotment Transfer via GMADA) or registered as a Freehold Conveyance Deed at the Sub-Registrar office.",
          "When executing a Freehold Registered Sale Deed on a 200 sq. yard plot with an evaluated value of ₹1,50,00,000 (₹1.50 Crore):",
        ],
        bullets: [
          "Male Sole Buyer: 7% Stamp Duty (₹10,50,000) + 1% Registration (₹1,50,000) = ₹12,00,000 Total Statutory Dues.",
          "Female Sole Buyer: 5% Stamp Duty (₹7,50,000) + 1% Registration (₹1,50,000) = ₹9,00,000 Total Statutory Dues (₹3,00,000 saved).",
          "Joint (Husband + Wife): 6% Stamp Duty (₹9,00,000) + 1% Registration (₹1,50,000) = ₹10,50,000 Total Statutory Dues (₹1,50,000 saved).",
          "GMADA Transfer Permission (Unregistered Plot Rights): If buying an un-conveyed allotment, transfer occurs through GMADA/PUDA citizen e-services. GMADA levies an administrative transfer fee (subject to current PUDA policy notifications) rather than immediate full Sub-Registrar stamp duty. Once the allotment is fully paid up, the final buyer executes the Conveyance Deed paying applicable stamp duty.",
        ],
      },
      {
        heading:
          "The 6-step Mohali property registration workflow on NGDRS Punjab",
        paragraphs: [
          "Property registration in Mohali (SAS Nagar) is executed digitally through the National Generic Document Registration System (NGDRS Punjab portal at punjab.ngdrs.gov.in). The practical workflow consists of six mandatory steps:",
        ],
        bullets: [
          "Step 1: Document Due Diligence & Clearance — Verify chain deeds, title clearance, GMADA No Dues Certificate (NDC), or Municipal Corporation SAS Nagar property tax clearance receipts.",
          "Step 2: Sale Deed Drafting — Have a licensed Punjab document writer or property advocate draft the conveyance deed, specifying exact Khasra/Khatauni numbers, plot coordinates, carpet area, consideration breakdown, and boundary schedules.",
          "Step 3: Procuring e-Stamp Certificate — Purchase the e-Stamp certificate through authorized Stock Holding Corporation of India (SHCIL) branches, approved Punjab banks, or directly via NGDRS online net-banking payment.",
          "Step 4: NGDRS Online Entry & Appointment Scheduling — Upload the deed draft, buyer/seller demographic details, Aadhaar credentials, and property valuations onto punjab.ngdrs.gov.in, and schedule a physical appointment slot at Tehsil SAS Nagar.",
          "Step 5: Physical Execution at Sub-Registrar Office — Buyer, seller, and two independent adult witnesses visit the Sub-Registrar Office (Tehsil Complex at the District Administrative Complex, Sector 76, Mohali). Biometric thumbprints and digital webcam photographs are captured before the Sub-Registrar.",
          "Step 6: Document Endorsement & Collection — The Sub-Registrar reviews the deed and authorizes digital registration. The certified registered deed is signed, assigned a unique registration number/volume/page, and handed over or made downloadable within 24 to 48 hours.",
        ],
      },
      {
        heading: "Mandatory document checklist for Sub-Registrar SAS Nagar",
        bullets: [
          "Original Parent Title Deed / Allotment Letter / Re-allotment Letter establishing an unbroken ownership chain.",
          "GMADA No Due Certificate (NDC) or Municipal Corporation Mohali Property Tax Clearance Receipt.",
          "Non-Encumbrance Certificate (Form 15/16) obtained from the Sub-Registrar office confirming zero mortgages or litigation liens.",
          "Approved building plan and Completion Certificate / Occupancy Certificate (mandatory for built floors, villas, and commercial SCOs).",
          "Original E-Stamp Paper with verifiable Unique Identification Number (UIN) matching the calculated statutory duty.",
          "Bank receipt or online challan verifying full payment of the 1% registration fee and pasting charges.",
          "Aadhaar Card and PAN Card (or Form 60/61) of the buyer, seller, and two credible adult witnesses.",
          "Two passport-sized photographs of both parties with attested signatures.",
        ],
      },
      {
        heading:
          "Post-registration imperatives: Mutation (Inteqal) & Utility transfers",
        paragraphs: [
          "A registered sale deed proves that a legal conveyance occurred between the parties, but it does NOT automatically update government revenue or municipal records. To ensure absolute legal defensibility and prevent unauthorized third-party claims, two subsequent actions are essential:",
        ],
        bullets: [
          "1. Digital Mutation (Inteqal) via PLRS: File for mutation at the local Tehsil Sewa Kendra or online through the Punjab Land Records Society (plrs.org.in). The Patwari and Kanungo verify the deed and update the Jamabandi (record of rights) to reflect the buyer's name. Always collect the certified Roznamcha and Fard copy once sanctioned.",
          "2. GMADA Ownership Endorsement: For GMADA-allotted properties in Aerocity, IT City, or Sector 76–80, submit the registered conveyance deed on puda.gov.in for the issuance of a fresh Re-allotment Letter in your name.",
          "3. Utility Account Transfers: Update the electricity meter with Punjab State Power Corporation Limited (PSPCL), municipal water connection, and property tax records using certified copies of the registered deed and mutation order.",
        ],
      },
      {
        heading: "How Vedang Properties assists in purchase due diligence",
        paragraphs: [
          "At Vedang Properties, based at #171 MCC-2 in GMADA Aerocity, we guide clients through the entire transaction lifecycle before any financial commitment is made.",
          "We review GMADA allotments, cross-verify circle rates, calculate precise statutory liabilities, coordinate with certified deed advocates, and accompany you through the Sub-Registrar execution at Sector 76 DAC. We believe grounded clarity and total legal transparency are the foundation of every sound property investment in Mohali.",
        ],
      },
    ],
  },
  {
    slug: "mohali-property-search-trends-2026",
    category: "Market Notes",
    title: "Mohali property search trends in 2026: what buyers are really comparing",
    excerpt:
      "A practical look at the search phrases, locality questions, and buyer priorities shaping Mohali property decisions in 2026.",
    date: "14 Jul 2026",
    readTime: "9 min read",
    image: "/images/blog-area-comparison.jpg",
    imageAlt:
      "Modern commercial building visual for Mohali property search trends",
    tags: [
      "Property consultants in Mohali",
      "2026 trends",
      "Locality guide",
    ],
    sources: officialSourceLinks,
    map: {
      title: "Mohali and airport-side search context",
      query: "Mohali Aerocity IT City Airport Road",
      href: "https://www.google.com/maps/search/?api=1&query=Mohali%20Aerocity%20IT%20City%20Airport%20Road",
    },
    sections: [
      {
        heading: "Search terms are getting more local",
        paragraphs: [
          "A buyer rarely searches only for property in Mohali anymore. The useful searches are more specific: property consultants in Mohali, best property dealers in Mohali, property dealer in Aerocity Mohali, plots in Mohali, commercial property in Mohali, Kharar property consultant, Zirakpur property consultant, or flats near Airport Road Mohali.",
          "These phrases show intent, not certainty. A person typing best property dealers in Mohali is usually looking for a trustworthy local advisor, quick response, location knowledge, and practical shortlisting. The website should answer that intent with useful guidance, not with exaggerated claims.",
        ],
      },
      {
        heading: "The main buyer questions behind the keywords",
        paragraphs: [
          "Most search phrases are really shorthand for a question. Property consultants in Mohali means the visitor wants someone who can compare areas and filter options. Plot dealer in Mohali means they may need help with location, paperwork comfort, access road, and development status. Commercial property Mohali usually means frontage, parking, permitted use, visibility, and tenant practicality.",
          "Good local SEO should match these questions clearly. That is why a real estate website should include area guides, buyer checklists, document-check notes, seller preparation articles, and direct contact paths through phone and WhatsApp.",
        ],
      },
      {
        heading: "Connectivity is shaping shortlists",
        paragraphs: [
          "Across Indian real estate coverage in 2026, connectivity keeps appearing as a major buyer filter. In Mohali, that translates into practical interest around Aerocity, IT City, Airport Road, Kharar, Zirakpur, New Chandigarh, and other Tricity movement corridors.",
          "Connectivity should still be checked on the ground. A location can look close on a map but feel different because of traffic turns, road width, last-mile access, parking, daily market distance, or construction activity. The right question is not only how far it is, but how usable the route is for the buyer's daily routine.",
        ],
      },
      {
        heading: "Premium demand does not remove budget discipline",
        paragraphs: [
          "Recent housing-market commentary has highlighted buyer interest in premium and better-located homes, but that does not mean every premium-looking property is automatically a better decision. In Mohali, buyers should compare the actual apartment, floor, plot, or commercial unit instead of reacting only to the word premium.",
          "A stronger decision checks layout, usable area, parking, lift quality, maintenance expectations, possession status, approach road, legal comfort, and how much extra money may be needed after purchase.",
        ],
      },
      {
        heading: "Useful keyword groups for Mohali pages",
        bullets: [
          "Advisor intent: property consultants in Mohali, real estate consultant in Mohali, property dealer Mohali, best property dealers in Mohali.",
          "Residential intent: flats in Mohali, independent floors in Mohali, villas in Mohali, premium homes in Mohali, residential property consultant Mohali.",
          "Plot intent: plots in Mohali, plot dealer in Mohali, Aerocity plot consultant, GMADA Aerocity plot guidance.",
          "Commercial intent: commercial property in Mohali, SCO in Mohali, office space Mohali, Airport Road commercial property.",
          "Location intent: Aerocity Mohali, IT City Mohali, Airport Road Mohali, Kharar, Zirakpur, New Chandigarh.",
        ],
      },
      {
        heading: "How buyers should use search results",
        paragraphs: [
          "Search results are only the first filter. After finding a property consultant or dealer, buyers should still check response quality, local clarity, whether the advisor asks useful questions, and whether the options shared match the buyer's budget and purpose.",
          "A good advisor should slow down the process when needed. If documentation, possession, pricing, or location clarity is weak, the next step should be verification, not pressure.",
        ],
      },
      {
        heading: "A practical shortlisting process",
        bullets: [
          "Write the exact purpose: self-use, rental income, office, shop, resale, plot holding, or family home.",
          "Pick two or three location belts instead of searching the whole Tricity at once.",
          "Compare options using the same points: budget, access, paperwork comfort, parking, surroundings, and future usability.",
          "Ask for recent photos, location clarity, and basic payment breakup before travelling.",
          "Use official portals and legal review before token, agreement, or transfer decisions.",
        ],
      },
      {
        heading: "How Vedang Properties can use this search intent",
        paragraphs: [
          "Vedang Properties can serve search visitors best by answering practical questions quickly: which locality fits their use case, what kind of property they want, what budget range is realistic, and what should be verified before a visit.",
          "The goal is not to claim that every option is perfect. The goal is to help buyers and sellers in Mohali compare real choices with cleaner information and fewer wasted visits.",
        ],
      },
    ],
  },
  {
    slug: "premium-homes-mohali-2026-checklist",
    category: "Buyer Guide",
    title: "Premium homes in Mohali: how to judge luxury, location, and livability",
    excerpt:
      "A detailed checklist for buyers comparing premium apartments, villas, independent floors, and higher-budget homes in Mohali.",
    date: "14 Jul 2026",
    readTime: "9 min read",
    image: "/images/blog-premium-homes.jpg",
    imageAlt: "Premium home exterior visual for Mohali luxury home guidance",
    tags: ["Premium homes", "Buyer checklist", "Mohali"],
    map: {
      title: "Premium home search context in Mohali",
      query: "Premium homes Mohali Aerocity IT City Sector 126",
      href: "https://www.google.com/maps/search/?api=1&query=Premium%20homes%20Mohali%20Aerocity%20IT%20City%20Sector%20126",
    },
    sections: [
      {
        heading: "Premium should mean practical quality",
        paragraphs: [
          "Premium homes in Mohali are often searched as luxury flats in Mohali, villas in Mohali, independent floors in Mohali, or premium residential property near Aerocity and IT City. The words sound attractive, but a buyer should translate them into measurable points.",
          "A premium home should offer better daily comfort, stronger location logic, cleaner maintenance, useful parking, better construction feel, sensible layout, and a more reliable ownership or project context. If these are missing, the premium may be more about marketing than livability.",
        ],
      },
      {
        heading: "Start with the buyer profile",
        paragraphs: [
          "A family buying for self-use should judge a premium home differently from an investor or an NRI buyer looking for easier management. Self-use depends on commute, schools, markets, security, maintenance, room sizes, sunlight, and long-term comfort. Investment decisions depend more on tenant profile, holding cost, resale audience, documentation, and exit timing.",
          "Before comparing properties, write down the non-negotiables: location belt, minimum usable space, parking requirement, floor preference, lift requirement, possession timeline, and budget ceiling after registry, interiors, and maintenance deposits.",
        ],
      },
      {
        heading: "Location: premium on map versus premium in real life",
        paragraphs: [
          "A property may be close to Airport Road, Aerocity, IT City, Kharar, or Zirakpur on the map, but the real experience depends on the exact approach road, traffic flow, nearby development, parking behavior, and day-to-day convenience.",
          "Visit the surrounding area, not just the sample flat or house. Check how the entry feels, whether the road is comfortable at busy hours, whether nearby shops and services are practical, and whether ongoing construction may affect daily living for the next few years.",
        ],
      },
      {
        heading: "Layout and usable space",
        bullets: [
          "Check room dimensions, not only super area or headline size.",
          "Look at storage, kitchen utility, balcony use, ventilation, and natural light.",
          "For villas and floors, check stair comfort, parking placement, roof rights, and privacy.",
          "For apartments, check lift count, corridor width, tower density, and floor plan efficiency.",
          "Ask what is included: wardrobes, modular kitchen, air-conditioning, fixtures, parking, clubhouse, or other amenities.",
        ],
      },
      {
        heading: "Amenities should match usage",
        paragraphs: [
          "A long amenity list can look impressive, but it should be checked against real use. Buyers should ask whether the clubhouse, gym, park, pool, security, power backup, visitor parking, and maintenance team are operational, planned, or only promised.",
          "Maintenance cost matters. Premium amenities can increase monthly charges, so buyers should understand what they are paying for and whether the facilities will actually be used by the family or tenant.",
        ],
      },
      {
        heading: "Premium budget should include after-purchase costs",
        paragraphs: [
          "A higher-budget home can still feel financially tight if the buyer only plans for the sale price. Registry, stamp duty, interiors, furniture, electrical work, parking, maintenance deposits, loan processing, shifting, and repairs should be estimated before final decision.",
          "For ready homes, inspect seepage, flooring, bathrooms, woodwork, electrical load, air-conditioning points, lift condition, and society maintenance. For under-construction or new inventory, understand payment schedule, possession timeline, and what happens if completion or handover takes longer than expected.",
        ],
      },
      {
        heading: "Builder, society, and paperwork comfort",
        bullets: [
          "Ask for project, ownership, allotment, registry, or transfer details based on property type.",
          "For covered projects, check RERA applicability and project information where relevant.",
          "For resale units, understand ownership chain, loan status, dues, and possession condition.",
          "For independent floors or villas, clarify land share, access, parking, roof rights, and construction approvals where applicable.",
          "Use a qualified legal professional before token, agreement, or final transfer.",
        ],
      },
      {
        heading: "Investment expectations need caution",
        paragraphs: [
          "Premium housing can attract attention, but no property consultant should promise fixed appreciation or guaranteed returns. The safer discussion is about location quality, rental audience, holding period, maintenance cost, property condition, and the likely future buyer or tenant profile.",
          "If rental income is important, compare the tenant type that would realistically choose the property. A premium home with weak access, high maintenance, or poor daily convenience may be harder to rent than a simpler but better-located option.",
        ],
      },
      {
        heading: "Site visit checklist for premium homes",
        bullets: [
          "Visit during daylight and, if possible, once during a busier traffic window.",
          "Check entry, parking, lift, security, maintenance, common areas, and nearby construction.",
          "Ask for written clarity on inclusions, possession, dues, charges, and handover condition.",
          "Compare at least two location belts before assuming one project is the obvious choice.",
          "Do not let premium branding replace legal, financial, and practical checks.",
        ],
      },
      {
        heading: "How Vedang Properties can help",
        paragraphs: [
          "Vedang Properties can help premium-home buyers compare options across Mohali and nearby corridors by use case: family living, investment, rental, resale, villa, independent floor, or apartment.",
          "The advisory focus is to filter options before visits, organize questions, compare practical strengths and limitations, and help the buyer move toward professional document review with better clarity.",
        ],
      },
    ],
  },
  {
    slug: "buying-plot-mohali-shortlisting-checks",
    category: "Buyer Guide",
    title: "Buying a plot in Mohali: checks before shortlisting",
    excerpt:
      "A practical plot-buying guide for checking location, access, development status, paperwork comfort, and budget before making a site visit.",
    date: "03 Jul 2026",
    readTime: "7 min read",
    image: "/images/blog-plot-checks.jpg",
    imageAlt: "Independent home exterior used for Mohali plot buying guidance",
    tags: ["Plots", "Buyer checklist", "Mohali"],
    map: {
      title: "Aerocity and nearby plot context",
      query: "Aerocity Mohali",
      href: "https://www.google.com/maps/search/?api=1&query=Aerocity%20Mohali",
    },
    sections: [
      {
        heading: "Start with the purpose of the plot",
        paragraphs: [
          "A plot for building a family home should be judged differently from a plot kept for long-term holding. For self-use, road access, surrounding development, daily convenience, school or office movement, and immediate livability matter more. For a longer-horizon decision, paperwork comfort, locality growth, holding cost, and future exit options become more important.",
          "Before visiting, write down the preferred location belt, approximate size, budget range, expected possession or transfer timeline, and whether construction is planned soon. This avoids wasting time on plots that look attractive on price but do not match the buyer's actual plan.",
        ],
      },
      {
        heading: "Check access before checking only rate",
        paragraphs: [
          "The quoted rate is only one part of the decision. A buyer should also understand the approach road, road width, corner or non-corner position, nearby built-up activity, drainage condition, parking comfort, and whether the immediate surroundings support the intended use.",
          "For residential use, it helps to visit during different times if possible. A location may feel open during the day but behave differently during office hours, evenings, or weekends. Nearby construction, traffic movement, market distance, and noise can change the real experience of the location.",
        ],
      },
      {
        heading: "Understand the shape and usability",
        bullets: [
          "Confirm the approximate plot dimensions, frontage, depth, and access side.",
          "Check whether the plot shape supports the kind of home or commercial use being imagined.",
          "Ask if there are setbacks, road widening concerns, or layout conditions that affect construction planning.",
          "Compare corner, park-facing, main-road, and inner-lane plots by usability, not only by premium.",
        ],
      },
      {
        heading: "Ask for paperwork early",
        paragraphs: [
          "Plot decisions need careful document review. Buyers should ask for the ownership or allotment trail, approval or colony context where applicable, dues status, transfer process, and any conditions attached to the plot before moving toward payment.",
          "Do not treat a forwarded photo, location pin, or verbal assurance as enough. A qualified legal professional should review the relevant documents before token, agreement, transfer, or construction-related decisions.",
        ],
      },
      {
        heading: "Budget beyond the plot price",
        paragraphs: [
          "A plot budget should include more than the headline price. Registry or transfer charges, legal review, possible authority dues, boundary work, site clearing, construction planning, and future holding costs can all affect the final comfort level.",
          "If the plan is to construct soon, also consider the cost of approvals, architect or contractor input, utilities, boundary wall, temporary site arrangements, and time needed before actual construction can start.",
        ],
      },
      {
        heading: "Questions before paying token",
        bullets: [
          "Who is the current owner or allottee, and what documents can be shown for review?",
          "Are there any dues, loans, disputes, or transfer conditions that should be disclosed?",
          "What exactly is included in the quoted amount, and what is payable separately?",
          "Is the plot vacant, demarcated, and visitable without confusion?",
          "What is the expected timeline from token to agreement, document review, and final transfer?",
        ],
      },
      {
        heading: "How Vedang can help",
        paragraphs: [
          "Vedang Properties can help buyers filter plot options by location, purpose, budget comfort, and visit-worthiness before they spend time travelling across multiple pockets. The goal is to compare practical options and slow down where paperwork or site conditions need more clarity.",
          "Final legal, financial, and construction-related decisions should still be taken after professional review. The advisory role is to organize the early comparison and make the buyer's next questions sharper.",
        ],
      },
    ],
  },
  {
    slug: "commercial-property-mohali-visit-checks",
    category: "Market Notes",
    title: "Commercial property in Mohali: what to check before a visit",
    excerpt:
      "A clear commercial-property checklist covering frontage, parking, access, usage, visibility, paperwork, and rental practicality.",
    date: "03 Jul 2026",
    readTime: "7 min read",
    image: "/images/blog-commercial-checks.jpg",
    imageAlt: "Commercial building visual for Mohali commercial property guidance",
    tags: ["Commercial", "SCO", "Mohali"],
    map: {
      title: "Airport Road commercial context",
      query: "Airport Road Mohali",
      href: "https://www.google.com/maps/search/?api=1&query=Airport%20Road%20Mohali",
    },
    sections: [
      {
        heading: "Commercial use needs a different checklist",
        paragraphs: [
          "A commercial property should not be compared only by size and price. The practical value depends on access, visibility, permitted use, frontage, parking comfort, surrounding activity, fit-out cost, and whether the location suits the intended business or tenant.",
          "Before a visit, define the use case clearly: self-use, rental income, showroom, office, clinic, food-related use, storage, service business, or long-term investment. Each use case has different site requirements.",
        ],
      },
      {
        heading: "Frontage and visibility",
        paragraphs: [
          "For many commercial spaces, frontage and visibility can matter as much as covered area. A wider frontage may support signage and customer entry better, while a hidden or awkward entry can reduce practical value even if the price looks attractive.",
          "During a visit, stand across the road and look at how the property appears from normal traffic movement. Check whether signboards, trees, poles, parking, turns, or neighboring buildings affect visibility.",
        ],
      },
      {
        heading: "Parking and access",
        bullets: [
          "Check customer parking, staff parking, loading or unloading comfort, and entry or exit flow.",
          "Observe whether vehicles can stop safely without blocking the road.",
          "Look at traffic movement during business hours, not only during a quiet visit window.",
          "For upper-floor offices, check lift access, staircase comfort, signage visibility, and common-area maintenance.",
        ],
      },
      {
        heading: "Permitted use and fit-out planning",
        paragraphs: [
          "Not every commercial-looking space is suitable for every business. Buyers and tenants should ask about permitted usage, society or market rules, authority conditions where applicable, and whether the planned business needs separate approvals or licenses.",
          "Fit-out cost can change the deal. Flooring, electrical load, air-conditioning, washroom condition, frontage work, signage, partitions, and compliance requirements should be considered before comparing only rent or sale price.",
        ],
      },
      {
        heading: "Rental and investment thinking",
        paragraphs: [
          "For rental-focused decisions, ask who the likely tenant would be and why that tenant would choose the location. A property may look good on paper but still take time to lease if the frontage, access, parking, or market catchment is weak.",
          "Avoid fixed return assumptions unless they are backed by actual lease terms and proper documentation. A better approach is to compare realistic tenant demand, holding ability, maintenance cost, fit-out expectations, and exit options.",
        ],
      },
      {
        heading: "Documents and deal clarity",
        bullets: [
          "Ask for ownership, allotment, registry, transfer, or lease-related documents depending on the property type.",
          "Clarify dues, maintenance, tax, society charges, parking rights, and common-area responsibilities.",
          "Confirm possession status and whether the property is vacant, leased, or owner-occupied.",
          "Keep written clarity on price, rent, lock-in, deposit, handover condition, and fit-out permissions.",
        ],
      },
      {
        heading: "What to note after the visit",
        paragraphs: [
          "After visiting, compare each commercial option on the same points: access, visibility, parking, permitted use, paperwork comfort, rent or sale price, fit-out cost, and future tenant or buyer profile.",
          "Vedang Properties can help organize commercial visits and compare the practical details, but legal and financial decisions should be reviewed independently before commitment.",
        ],
      },
    ],
  },
  {
    slug: "mohali-buyer-site-visit-checklist",
    category: "Buyer Guide",
    title: "Mohali buyer checklist before a site visit",
    excerpt:
      "A practical checklist for buyers comparing apartments, builder floors, plots, or commercial property in Mohali and nearby areas.",
    date: "19 Jun 2026",
    readTime: "7 min read",
    image: "/images/blog-site-visit.jpg",
    imageAlt: "Home key visual for a Mohali buyer checklist",
    tags: ["Site visit", "Buyer checklist", "Mohali"],
    sections: [
      {
        heading: "Before choosing options",
        paragraphs: [
          "Start with a clear requirement instead of visiting every available option. Note the preferred location, budget range, property type, possession preference, and whether the purchase is for self-use, rental income, or long-term holding.",
          "Ask for current availability and basic details before travelling: approximate area, floor or plot size, access road, parking, possession status, and whether the quoted amount includes common charges or other payable items.",
        ],
      },
      {
        heading: "Clarify your real budget",
        paragraphs: [
          "Many buyers begin with a headline budget but later discover additional costs that affect the final decision. Before visiting, keep a working estimate for registry, taxes, maintenance deposits, parking, interiors, loan processing, shifting, and immediate repairs.",
          "A practical budget also includes flexibility. If two properties are close in price, compare what each one saves or costs over time: commute, maintenance, fit-out work, parking comfort, and resale or rental practicality.",
        ],
      },
      {
        heading: "Questions to ask before travelling",
        bullets: [
          "Is the property currently available, and who is coordinating the visit?",
          "What is the exact location, sector, society, plot number, or nearby landmark?",
          "What is included in the quoted amount, and what is excluded?",
          "Is the property ready, under construction, rented, vacant, or owner-occupied?",
          "Are photos recent, and can a short video be shared before the visit?",
        ],
      },
      {
        heading: "During the visit",
        bullets: [
          "Check road access, parking, lifts, water supply, power backup, and visible maintenance quality.",
          "Compare the surroundings at different times if possible, especially traffic, market access, and noise.",
          "For plots, confirm boundaries, approach road, nearby construction, and basic development status.",
          "Do not rely only on sample flats, brochures, or verbal promises; ask what is included in writing.",
        ],
      },
      {
        heading: "Check the surrounding area",
        paragraphs: [
          "A property is not only the building or plot. The surrounding lane, access road, nearby construction, open drains, market distance, school or office commute, and evening activity can change the daily experience.",
          "For end-use, walk or drive around the immediate area before finalizing your opinion. For investment, think about who the future tenant or buyer would be and whether the location will make sense to them too.",
        ],
      },
      {
        heading: "After the visit",
        paragraphs: [
          "Shortlist only the options where the documentation, location, budget, and practical usage all make sense. Final legal verification should always be done before payment or agreement.",
        ],
      },
      {
        heading: "Warning signs to slow down",
        bullets: [
          "Pressure to pay immediately without time for document checks.",
          "Large difference between what was promised on call and what is shown on site.",
          "Unclear ownership, unclear possession, or changing price breakups.",
          "No written detail for important commitments.",
          "The site condition, access, or surroundings do not match your actual use case.",
        ],
      },
    ],
  },
  {
    slug: "verify-property-documents-mohali",
    category: "Buyer Guide",
    title: "How to verify property details in Mohali",
    excerpt:
      "A careful, non-technical guide to the checks buyers should request before moving ahead with a property decision.",
    date: "19 Jun 2026",
    readTime: "8 min read",
    image: "/images/blog-verify-documents.jpg",
    imageAlt: "Premium home exterior for property verification guidance",
    tags: ["Documentation", "GMADA", "RERA"],
    sources: officialSourceLinks,
    map: {
      title: "Aerocity map context",
      query: "Aerocity Mohali",
      href: "https://www.google.com/maps/search/?api=1&query=Aerocity%20Mohali",
    },
    sections: [
      {
        heading: "Use official sources where possible",
        paragraphs: [
          "For development authority information, public notices, master plans, layout plans, e-auction updates, and citizen services, buyers should prefer official portals over forwarded screenshots or informal messages.",
          "Official portals can still require interpretation, so use them as source checks and take legal advice before making payments or signing documents.",
        ],
      },
      {
        heading: "Match the property type with the right checks",
        paragraphs: [
          "The checks for a builder flat, resale apartment, independent floor, plot, and commercial unit are not identical. A resale home may need a stronger ownership-chain review, while a project property may need project approvals, possession status, and payment-stage clarity.",
          "For plots and land, location boundaries, access road, zoning context, and development status become especially important. For commercial property, also compare frontage, parking, access, signage visibility, and permitted usage before looking only at price.",
        ],
      },
      {
        heading: "Ask for these details early",
        bullets: [
          "Ownership chain or allotment details, depending on the property type.",
          "Project, colony, or plot approval status where applicable.",
          "RERA details for covered projects where RERA registration applies.",
          "Current demand, dues, maintenance, or transfer-related payment information.",
          "Written breakup of price, taxes, maintenance, and other charges.",
        ],
      },
      {
        heading: "Payment clarity matters",
        paragraphs: [
          "Before any token amount or agreement, ask what the payment is for, whether it is refundable, which document records it, and what happens if the deal does not move forward after verification.",
          "A clean transaction should not depend only on verbal comfort. The buyer should understand the timeline, required documents, expected charges, and the point at which legal review should be completed.",
        ],
      },
      {
        heading: "Do not skip independent advice",
        bullets: [
          "Use a qualified legal professional for title, agreement, and transfer-related review.",
          "Confirm loan eligibility and valuation expectations with the lender if financing is involved.",
          "Check authority or project information from official sources where applicable.",
          "Keep payment receipts, written confirmations, and communication records organized.",
        ],
      },
      {
        heading: "Keep claims separate from proof",
        paragraphs: [
          "Phrases like prime location, best price, assured return, or urgent deal should not replace document checks. Treat them as sales language until the paperwork and site conditions support the decision.",
        ],
      },
      {
        heading: "How Vedang can help in this stage",
        paragraphs: [
          "The role of a local advisor is to make the early comparison easier: collect basic details, point out practical questions, arrange visits, and help the buyer understand what should be checked before moving ahead.",
          "Final legal and financial decisions should still be taken after proper professional review. The website and consultation are meant to improve clarity, not replace formal legal verification.",
        ],
      },
    ],
  },
  {
    slug: "aerocity-it-city-kharar-zirakpur-comparison",
    category: "Market Notes",
    title: "Aerocity, IT City, Kharar, Zirakpur: how to compare locations",
    excerpt:
      "A neutral way to compare nearby property markets by use case, commute, budget comfort, and end-use instead of hype.",
    date: "19 Jun 2026",
    readTime: "7 min read",
    image: "/images/blog-document-checks.jpg",
    imageAlt: "Modern commercial building for locality comparison",
    tags: ["Locality guide", "Aerocity", "IT City"],
    map: {
      title: "IT City map context",
      query: "IT City Mohali",
      href: "https://www.google.com/maps/search/?api=1&query=IT%20City%20Mohali",
    },
    sections: [
      {
        heading: "Start from the use case",
        paragraphs: [
          "A location that suits self-use may not suit rental income, and an investment plot may not suit immediate family living. Compare areas by your actual use case first.",
        ],
      },
      {
        heading: "Aerocity and airport-side areas",
        paragraphs: [
          "Aerocity and nearby airport-side locations are often considered by buyers who care about connectivity, newer development, and access toward the airport corridor. The right option still depends on exact pocket, road access, surroundings, and project or plot details.",
          "Before deciding, compare daily convenience rather than only map distance. Market access, school or office commute, approach road, parking, and construction activity can differ from one pocket to another.",
        ],
      },
      {
        heading: "IT City and nearby sectors",
        paragraphs: [
          "IT City and nearby sectors may interest buyers who want a newer-sector context or are comparing long-term utility around work, institutions, and infrastructure. This does not make every option suitable; it only means the area should be evaluated with the buyer's use case in mind.",
          "For commercial or investment-led decisions, check visibility, access, parking, actual footfall context, and what kind of end user would realistically use the property.",
        ],
      },
      {
        heading: "Kharar and Zirakpur comparisons",
        paragraphs: [
          "Kharar is often compared by budget-focused family buyers, while Zirakpur is often compared for Tricity movement and highway-side access. Both areas have different pockets, so broad labels are not enough.",
          "A buyer should compare exact locality, road width, congestion, maintenance quality, possession status, and long-term comfort. The cheaper option is not always better, and the more expensive option is not automatically safer.",
        ],
      },
      {
        heading: "Compare practical factors",
        bullets: [
          "Commute to work, schools, airport road access, hospitals, and daily markets.",
          "Current livability: occupancy, maintenance, security, and nearby construction.",
          "Exit options: who the future buyer or tenant might be.",
          "Documentation comfort and project or colony approval clarity.",
          "Budget flexibility for taxes, interiors, maintenance, and move-in costs.",
        ],
      },
      {
        heading: "Build a visit plan",
        paragraphs: [
          "When comparing multiple areas, visit them in a planned order instead of randomly. For example, compare two or three options in one belt, note the pros and cons, then compare another belt on the same criteria.",
          "A simple scorecard helps: location comfort, budget fit, paperwork comfort, future use, maintenance, commute, and how confident you feel after seeing the surroundings.",
        ],
      },
      {
        heading: "Avoid fixed predictions",
        paragraphs: [
          "No one can honestly guarantee future prices. A better approach is to compare the location, paperwork, holding period, rental demand, and your ability to wait if market conditions change.",
        ],
      },
      {
        heading: "What Vedang can compare with you",
        bullets: [
          "Area fit based on family use, investment use, or commercial use.",
          "Site visit sequence so you do not waste time travelling across unrelated locations.",
          "Basic pros and cons of each pocket before deeper legal or financial review.",
          "Questions to ask owners, builders, or representatives during the visit.",
        ],
      },
    ],
  },
  {
    slug: "owner-checklist-selling-property-mohali",
    category: "Seller Guide",
    title: "Owner checklist before sharing a property for sale",
    excerpt:
      "A simple preparation list for owners who want serious buyer enquiries instead of repeated calls with unclear details.",
    date: "19 Jun 2026",
    readTime: "6 min read",
    image: "/images/blog-owner-checklist.jpg",
    imageAlt: "Independent home visual for owner property preparation",
    tags: ["Sell property", "Owner leads", "Resale"],
    sections: [
      {
        heading: "Prepare the basic information",
        bullets: [
          "Exact location or sector, property type, size, facing, floor, age, and occupancy status.",
          "Expected price range and whether it is negotiable.",
          "Photos and videos taken in daylight without hiding defects.",
          "Maintenance, society charges, registry or transfer status, and loan status if any.",
        ],
      },
      {
        heading: "Prepare photos and visit timing",
        paragraphs: [
          "Clear photos help filter serious buyers before a visit is scheduled. Take daylight photos of the exterior, main rooms, kitchen, bathrooms, balcony, parking, entrance, and any view or access road that matters.",
          "Avoid hiding defects. If there is seepage, repair work, tenant occupancy, old fittings, or access limitations, it is better to mention these early. Honest information saves time and reduces repeated negotiations later.",
        ],
      },
      {
        heading: "Be clear about expected price",
        paragraphs: [
          "An owner does not need to accept the first offer, but the expected price should be realistic enough to attract the right enquiries. Compare nearby transactions carefully and remember that asking prices are not always final deal prices.",
          "If the property has strengths such as location, corner position, parking, better maintenance, rental income, or clear possession, keep those details ready. If the property has limitations, decide how much flexibility you are comfortable with before calls begin.",
        ],
      },
      {
        heading: "Documents buyers may ask about",
        bullets: [
          "Ownership, allotment, registry, or transfer-related documents depending on the property type.",
          "Loan or mortgage status, if any.",
          "Society, maintenance, or authority dues where applicable.",
          "Occupancy status and expected handover timeline.",
          "Any renovation, extension, or usage detail that should be explained clearly.",
        ],
      },
      {
        heading: "Make visits easier to manage",
        paragraphs: [
          "Set a practical visit window instead of handling calls throughout the day. If the property is occupied, coordinate with family members or tenants in advance so serious buyers can inspect properly.",
          "Keep the property clean, accessible, and well-lit during visits. Small preparation affects the buyer's first impression and makes the discussion more productive.",
        ],
      },
      {
        heading: "Make buyer calls more useful",
        paragraphs: [
          "Clear details reduce casual enquiries and help serious buyers decide whether a site visit is worth their time. If there are limitations, mention them early; it builds trust and saves everyone repeated follow-ups.",
        ],
      },
      {
        heading: "How Vedang can support owners",
        bullets: [
          "Collect the right property details before sharing with buyers.",
          "Screen buyer requirements so visits are more relevant.",
          "Coordinate site visits and basic follow-up communication.",
          "Help present the property clearly without overpromising.",
        ],
      },
    ],
  },
];

export const featuredArticles = articles.slice(0, 3);
