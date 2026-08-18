export type AreaFaq = {
  question: string;
  answer: string;
};

export type AreaGuide = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  mapImage: string;
  copy: string;
  intro: string;
  localContext: string;
  mapQuery: string;
  mapUrl: string;
  buyerChecks: string[];
  comparePoints: { heading: string; copy: string }[];
  detailSections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  sourceLinks: { label: string; href: string }[];
  faqs: AreaFaq[];
};

export const areaGuides: AreaGuide[] = [
  {
    slug: "aerocity-mohali",
    title: "Property consultant in Aerocity Mohali",
    shortTitle: "Aerocity",
    metaTitle: "Property Consultant in Aerocity Mohali",
    metaDescription:
      "Compare homes, plots, and commercial property in Aerocity Mohali with practical local guidance from Vedang Properties.",
    image: "/images/area-aerocity.jpg",
    imageAlt: "Modern residential house exterior for an Aerocity Mohali area guide",
    mapImage: "/images/map-aerocity.png",
    copy:
      "Airport-side residential and commercial options with access to MCC 2 and nearby sectors.",
    intro:
      "Aerocity Mohali is a useful starting point for buyers comparing airport-side living, plots, independent homes, and commercial options. The right choice depends on the exact pocket, approach road, property type, and whether the requirement is for self-use, rental, or longer-term holding.",
    localContext:
      "Use the map and a real site visit together. The experience can change between internal roads, main corridors, and developing pockets, so a location pin alone should not be treated as a complete property assessment.",
    mapQuery: "Aerocity Mohali",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Aerocity%20Mohali",
    buyerChecks: [
      "Confirm the exact sector, pocket, approach road, and distance from the intended daily route.",
      "For plots or land, ask for ownership, approval, dues, demarcation, and transfer details before token payment.",
      "For homes, check parking, maintenance, construction quality, water, power backup, and nearby development.",
      "For commercial property, compare frontage, visibility, access, permitted use, parking, and surrounding activity.",
    ],
    comparePoints: [
      {
        heading: "Homes and independent floors",
        copy: "Compare usable layout, privacy, parking, daily convenience, and maintenance rather than relying only on the headline area or premium wording.",
      },
      {
        heading: "Plots and land",
        copy: "The exact paperwork and development context matter as much as the rate. Get document review and local verification before moving ahead.",
      },
      {
        heading: "Commercial options",
        copy: "Airport-side visibility can be relevant, but the right option still depends on frontage, access, permitted activity, and the likely customer or tenant profile.",
      },
    ],
    detailSections: [
      {
        heading: "Who may find Aerocity useful",
        paragraphs: [
          "Aerocity can be worth comparing for buyers who want an airport-side address, access toward Mohali and nearby Tricity routes, or a location that can serve both residential and commercial needs. It may also be relevant to owners who want to understand how their property should be presented to a specific buyer or tenant profile.",
          "The area should still be matched to the person's routine. A buyer working from another part of the Tricity may value route comfort more than a buyer who works nearby. A family may prioritise internal roads, schools, markets, and everyday services, while a commercial buyer may focus on visibility and access.",
        ],
      },
      {
        heading: "Compare the exact pocket, not only the locality name",
        paragraphs: [
          "Two properties described as Aerocity can have different approach roads, surroundings, construction stages, parking conditions, and daily convenience. Ask for the exact address or clearly identified location before comparing rates, and check whether the map pin matches the property being discussed.",
          "For a serious shortlist, record the usable area, plot dimensions or floor details, possession position, included items, charges, access road, and document status. Keeping the same notes for every option makes the conversation more useful and reduces decisions based only on photographs or broad promises.",
        ],
      },
      {
        heading: "A practical Aerocity visit plan",
        paragraphs: [
          "Start by viewing the property and the surrounding roads in the same visit. Check the time needed to enter and leave, whether parking is workable, and how the immediate area feels when you are actually standing there. For a plot, also check demarcation and neighbouring development instead of relying only on a pin.",
        ],
        bullets: [
          "Carry the exact requirement, budget ceiling, and preferred possession timeline.",
          "Ask which details are confirmed and which still need owner, builder, authority, or legal verification.",
          "Photograph only the details you are allowed to record and note open questions immediately.",
          "Do not pay a token until the relevant documents and payment terms are reviewed.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "GMADA zoning and layout plans",
        href: "https://gmada.gov.in/en/information/zoning-layout-plans",
      },
      {
        label: "GMADA Aerocity development updates",
        href: "https://www.gmada.gov.in/en/ongoing-projects",
      },
      {
        label: "Punjab RERA project search",
        href: "https://rera.punjab.gov.in/reraindex/PublicView/ProjectInfo",
      },
    ],
    faqs: [
      {
        question: "Can Vedang Properties help me find property in Aerocity Mohali?",
        answer:
          "Vedang Properties can discuss your budget, purpose, property type, and preferred pocket, then help compare relevant options and arrange a site visit where suitable.",
      },
      {
        question: "What should I verify before buying a plot in Aerocity?",
        answer:
          "Ask for the ownership or allotment trail, approval and layout context where applicable, dues, demarcation, transfer process, access, and any conditions. Have the relevant documents reviewed by a qualified legal professional before payment.",
      },
    ],
  },
  {
    slug: "it-city-mohali",
    title: "Property consultant in IT City Mohali",
    shortTitle: "IT City",
    metaTitle: "Property Consultant in IT City Mohali",
    metaDescription:
      "Explore residential, plot, and commercial property questions in IT City Mohali with a practical area guide from Vedang Properties.",
    image: "/images/area-it-city.jpg",
    imageAlt: "Modern commercial building exterior for an IT City Mohali area guide",
    mapImage: "/images/map-it-city.png",
    copy:
      "A newer-sector context for buyers comparing work access, residential use, and longer-horizon decisions.",
    intro:
      "IT City Mohali is commonly considered by people comparing newer-sector surroundings, work access, residential options, and future usability. Buyers should judge the exact property and the current on-ground context separately from broad locality descriptions.",
    localContext:
      "Check the route at the time you expect to travel, along with nearby services, construction activity, road access, and how comfortable the location feels for the intended daily routine.",
    mapQuery: "IT City Mohali",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=IT%20City%20Mohali",
    buyerChecks: [
      "Compare the exact approach route, nearby occupied areas, daily services, and commute pattern.",
      "Ask whether a quoted property is ready, under construction, resale, or only at an early development stage.",
      "Check layout efficiency, parking, maintenance, power backup, water, and handover or possession clarity.",
      "For investment decisions, define the likely future buyer or tenant instead of assuming appreciation.",
    ],
    comparePoints: [
      {
        heading: "Residential use",
        copy: "Prioritise daily convenience, route comfort, nearby services, usable space, and the actual condition of the building or floor.",
      },
      {
        heading: "Commercial use",
        copy: "Look at access, visibility, parking, permitted use, office or retail suitability, and whether the surrounding activity supports the plan.",
      },
      {
        heading: "Longer-horizon choices",
        copy: "Separate what exists today from what is proposed. Confirm timelines and documents through appropriate official or professional sources.",
      },
    ],
    detailSections: [
      {
        heading: "Who may compare IT City",
        paragraphs: [
          "IT City may be considered by buyers comparing newer-sector surroundings, work-related access, residential use, commercial space, or a longer holding period. The useful question is not whether the area sounds modern, but whether the exact property supports the buyer's routine, budget, and expected timeline.",
          "People planning immediate self-use should focus on what is available now: routes, services, occupancy, utilities, building condition, and maintenance. Buyers considering a longer horizon should separately record what is proposed and what has been verified through appropriate official or professional sources.",
        ],
      },
      {
        heading: "Residential and commercial comparison points",
        paragraphs: [
          "For residential options, compare usable space, light, ventilation, parking, water, power backup, lifts, common areas, and the ease of reaching daily services. For offices or commercial spaces, compare visibility, access, permitted use, signage, parking, frontage, and whether the surrounding activity matches the intended business.",
          "The same locality can feel very different depending on whether the property sits near an active route or inside a quieter developing pocket. Ask for a clear location, visit the approach road, and avoid treating a future plan as an existing facility.",
        ],
      },
      {
        heading: "How to make an IT City shortlist",
        paragraphs: [
          "Prepare a simple comparison sheet before visiting. Note the property type, exact location, usable area, access, current status, possession or handover position, quoted amount, recurring costs, and the documents available for review. This turns several conversations into a decision that can be checked later.",
        ],
        bullets: [
          "Separate ready, resale, under-construction, and proposed options in your notes.",
          "Check the route during the hours you expect to travel most often.",
          "Ask about maintenance, utilities, parking, and any extra charges before visiting.",
          "Use professional legal and financial review before a binding step.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "GMADA zoning and layout plans",
        href: "https://gmada.gov.in/en/information/zoning-layout-plans",
      },
      {
        label: "GMADA IT City notification archive",
        href: "https://gmada.gov.in/en/notifications-archive",
      },
      {
        label: "Punjab RERA project search",
        href: "https://rera.punjab.gov.in/reraindex/PublicView/ProjectInfo",
      },
    ],
    faqs: [
      {
        question: "Is IT City Mohali suitable for every buyer?",
        answer:
          "No single area suits every requirement. IT City should be compared by purpose, budget, commute, current services, property type, and expected holding period.",
      },
      {
        question: "Does Vedang Properties provide IT City property listings?",
        answer:
          "The website is an advisory and enquiry platform, not a public live-listing catalogue. Share your requirement directly so current suitability can be discussed before a visit.",
      },
    ],
  },
  {
    slug: "airport-road-mohali",
    title: "Property consultant for Airport Road Mohali",
    shortTitle: "Airport Road",
    metaTitle: "Property Consultant for Airport Road Mohali",
    metaDescription:
      "Compare property options along Airport Road Mohali with practical guidance for homes, plots, and commercial property from Vedang Properties.",
    image: "/images/area-airport-road.jpg",
    imageAlt: "Urban road and modern building visual for an Airport Road Mohali area guide",
    mapImage: "/images/map-airport-road.png",
    copy:
      "A connectivity-led corridor linking Mohali, Aerocity, and nearby Tricity routes.",
    intro:
      "Airport Road is a corridor rather than one uniform property market. Buyers should compare the exact side road, access, traffic pattern, surrounding development, and property use before deciding whether a location works for them.",
    localContext:
      "A map makes it easier to understand the corridor, but a site visit remains important for checking turns, service roads, parking, noise, frontage, and the final approach to the property.",
    mapQuery: "Airport Road Mohali",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Airport%20Road%20Mohali",
    buyerChecks: [
      "Check the actual entry and exit route during a realistic commute window.",
      "For a roadside commercial option, inspect frontage, turning movement, parking, signage, and permitted activity.",
      "For residential use, check noise, internal-road comfort, nearby services, and the building's orientation.",
      "Compare the corridor with Aerocity, IT City, or Zirakpur based on the buyer's actual purpose.",
    ],
    comparePoints: [
      {
        heading: "Connectivity",
        copy: "Route convenience can be valuable, but the last few turns and the property's internal access often decide the daily experience.",
      },
      {
        heading: "Commercial frontage",
        copy: "A visible address is not enough. Ask whether access, parking, use permissions, and local customer movement support the business plan.",
      },
      {
        heading: "Residential comfort",
        copy: "Check the distance from the main corridor, noise levels, nearby services, parking, and the quality of the immediate surroundings.",
      },
    ],
    detailSections: [
      {
        heading: "Airport Road is a corridor, not one uniform option",
        paragraphs: [
          "A property along Airport Road can serve very different purposes: a home away from the busiest movement, a visible commercial address, an office with convenient access, or a plot being considered for a later decision. The right comparison depends on the exact side road, route, frontage, building condition, and permitted use.",
          "Use the road as a starting point for orientation, then zoom in on the last part of the journey. The final turns, service roads, parking, noise, pedestrian movement, and nearby construction often decide whether the property is practical for the intended user.",
        ],
      },
      {
        heading: "Residential versus commercial use",
        paragraphs: [
          "Residential buyers should check how far the property sits from the main traffic flow, whether entry and parking are comfortable, and whether nearby services support daily life. A roadside commercial buyer should pay closer attention to frontage, visibility, access for customers, loading or parking needs, signage, and use permissions.",
          "A visible location is not automatically a profitable one. Commercial decisions should include the likely customer profile, operating costs, local competition, and the practical ability to enter, stop, and leave the premises.",
        ],
      },
      {
        heading: "A better Airport Road site visit",
        paragraphs: [
          "Plan the visit around the actual use case. Drive the route from the likely starting point, approach the property from both practical directions where possible, and inspect the surroundings at a time that reflects the intended routine. Take notes on what is visible today rather than what is only described in a conversation.",
        ],
        bullets: [
          "Confirm the exact property address and map pin before leaving.",
          "Check entry, exit, turning movement, parking, frontage, and road condition.",
          "Ask which approvals, use conditions, dues, or ownership documents apply.",
          "Compare the option with Aerocity, IT City, and Zirakpur using the same criteria.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "GMADA ongoing projects",
        href: "https://www.gmada.gov.in/en/ongoing-projects",
      },
      {
        label: "GMADA zoning and layout plans",
        href: "https://gmada.gov.in/en/information/zoning-layout-plans",
      },
      {
        label: "Punjab RERA project search",
        href: "https://rera.punjab.gov.in/reraindex/PublicView/ProjectInfo",
      },
    ],
    faqs: [
      {
        question: "Does Airport Road property always have better value?",
        answer:
          "Not automatically. Value depends on exact access, use, condition, paperwork, surrounding development, budget, and the buyer's intended holding period.",
      },
      {
        question: "Can I open Google Maps for Airport Road properties?",
        answer:
          "Yes. The map button on this page opens Google Maps for the Airport Road Mohali search area. A separate property address should still be confirmed before visiting.",
      },
    ],
  },
  {
    slug: "kharar",
    title: "Property consultant in Kharar",
    shortTitle: "Kharar",
    metaTitle: "Property Consultant in Kharar | Vedang Properties",
    metaDescription:
      "Get practical guidance for comparing homes, floors, plots, and property options in Kharar with Vedang Properties.",
    image: "/images/area-kharar.jpg",
    imageAlt: "Residential home exterior for a Kharar property area guide",
    mapImage: "/images/map-kharar.png",
    copy:
      "A varied residential market where buyers compare budget, access, family use, and exact pocket carefully.",
    intro:
      "Kharar has different pockets and property formats, so broad labels are rarely enough for a serious decision. Buyers often need to compare family homes, builder floors, apartments, plots, and access to work or education routes.",
    localContext:
      "Before shortlisting, check the exact neighbourhood, road width, traffic, drainage, parking, market distance, water and power arrangements, and whether the surroundings match the intended use.",
    mapQuery: "Kharar Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kharar%20Punjab",
    buyerChecks: [
      "Compare internal roads and daily convenience, not only distance to a main highway or sector.",
      "Ask for clear details on floor area, parking, possession, maintenance, and common charges.",
      "For resale homes, understand the ownership chain, dues, loan status, and transfer requirements.",
      "Keep registry, legal review, interiors, repairs, and moving costs inside the real budget plan.",
    ],
    comparePoints: [
      {
        heading: "Family living",
        copy: "Prioritise route comfort, schools or daily services relevant to the family, parking, usable layout, light, ventilation, and maintenance.",
      },
      {
        heading: "Apartment or floor",
        copy: "Compare carpet or usable space, lift and stair comfort, water, power backup, common areas, and society or building management.",
      },
      {
        heading: "Budget discipline",
        copy: "A lower headline price can change after repairs, registry, parking, maintenance deposits, or travel costs. Estimate the complete purchase budget.",
      },
    ],
    detailSections: [
      {
        heading: "Kharar needs pocket-level comparison",
        paragraphs: [
          "Kharar is best approached as a collection of different neighbourhood and property contexts rather than one single experience. Buyers may compare apartments, builder floors, independent homes, plots, and commercial options, but the usefulness of each depends on the exact road, surroundings, access, services, and property condition.",
          "Budget matters, but it should be viewed alongside daily travel, parking, maintenance, water, power, drainage, and future repair costs. A lower quoted amount may not remain lower after the buyer adds the costs needed to make the property comfortable and transferable.",
        ],
      },
      {
        heading: "Questions for families and resale buyers",
        paragraphs: [
          "Families should assess the route to work, school, healthcare, shopping, and other daily destinations that matter to them. During a visit, check room dimensions, ventilation, storage, parking, common areas, lift or stair access, and how the surrounding street actually feels.",
          "For resale homes, ask for a clear ownership trail, dues status, loan or charge position, possession condition, and transfer requirements. Photographs and verbal assurances can help start a conversation, but they do not replace document review.",
        ],
      },
      {
        heading: "Kharar shortlisting process",
        paragraphs: [
          "A simple shortlist can begin with three filters: purpose, pocket, and complete budget. Once those are clear, compare two or three options on the same points and visit only the ones with enough basic information to justify the time.",
        ],
        bullets: [
          "Decide whether the requirement is self-use, rental, resale, investment, or commercial.",
          "Set a maximum budget that includes registry, legal review, repairs, interiors, and moving costs.",
          "Ask for usable area, parking, possession, maintenance, and document details before travelling.",
          "Visit the road and surrounding area, not only the unit or sample home.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "GMADA Kharar 2031 master plan",
        href: "https://gmada.gov.in/en/master-plansapproved-master-plansgmada/kharar-2031",
      },
      {
        label: "GMADA approved colonies",
        href: "https://gmada.gov.in/en/approved-colonies",
      },
      {
        label: "Punjab RERA project search",
        href: "https://rera.punjab.gov.in/reraindex/PublicView/ProjectInfo",
      },
    ],
    faqs: [
      {
        question: "What property types can I compare in Kharar?",
        answer:
          "Depending on current availability, buyers may compare apartments, builder floors, independent homes, plots, and commercial options. Suitability should be checked against the exact requirement and property details.",
      },
      {
        question: "How should I shortlist a Kharar property?",
        answer:
          "Start with budget, purpose, preferred pocket, minimum usable area, access needs, and possession preference. Then compare documents, surroundings, condition, and complete costs before scheduling a visit.",
      },
    ],
  },
  {
    slug: "zirakpur",
    title: "Property consultant in Zirakpur",
    shortTitle: "Zirakpur",
    metaTitle: "Property Consultant in Zirakpur | Vedang Properties",
    metaDescription:
      "Compare homes, commercial property, and rental-oriented options in Zirakpur with practical Tricity property guidance from Vedang Properties.",
    image: "/images/area-zirakpur.jpg",
    imageAlt: "Modern villa exterior for a Zirakpur property area guide",
    mapImage: "/images/map-zirakpur.png",
    copy:
      "A Tricity movement corridor where buyers compare highway access, apartment living, commercial use, and rental practicality.",
    intro:
      "Zirakpur is often compared by people who value Tricity movement and highway-side connectivity, but the exact pocket matters greatly. Traffic behaviour, access roads, building condition, parking, drainage, and daily services can vary within a short distance.",
    localContext:
      "Compare the route at the times you will use it. For rental or investment discussions, identify the likely tenant or buyer profile and test whether the property works for that audience after maintenance and travel costs.",
    mapQuery: "Zirakpur Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Zirakpur%20Punjab",
    buyerChecks: [
      "Inspect traffic entry, service roads, parking, and the final approach to the building or property.",
      "For apartments, ask about maintenance, water, power backup, lifts, parking rights, and occupancy context.",
      "For commercial property, compare visibility, access, permitted use, frontage, and customer movement.",
      "For rental decisions, estimate vacancy risk, tenant profile, maintenance, and realistic net income rather than gross rent alone.",
    ],
    comparePoints: [
      {
        heading: "Highway-side access",
        copy: "Connectivity is useful only when the daily route, entry, parking, and last-mile movement are comfortable enough for the intended user.",
      },
      {
        heading: "Apartment practicality",
        copy: "Check the building's actual maintenance, lift, water, power backup, parking, common spaces, and surrounding noise.",
      },
      {
        heading: "Rental logic",
        copy: "A rental plan should be based on a plausible tenant profile and complete holding costs, without assuming guaranteed rent or appreciation.",
      },
    ],
    detailSections: [
      {
        heading: "Who may consider Zirakpur",
        paragraphs: [
          "Zirakpur is commonly compared by people who need movement across the Tricity, want an apartment or commercial address near major routes, or are evaluating rental practicality. That broad appeal still needs to be tested against the exact property, because traffic, access, building maintenance, parking, and surrounding activity vary between pockets.",
          "A buyer should identify the actual user first. A family may need quieter access and daily services, an office user may need reliable travel and parking, and a rental investor needs a realistic tenant profile plus a complete view of maintenance and vacancy risk.",
        ],
      },
      {
        heading: "Check the building as carefully as the location",
        paragraphs: [
          "For apartments, inspect lifts, water supply, power backup, seepage, ventilation, common areas, security, parking rights, maintenance quality, and the condition of nearby buildings. Ask what is included in the quoted amount and which charges continue after purchase.",
          "For commercial space, check frontage, entry and exit, signage, permitted activity, customer stopping space, loading needs, and the relationship between visibility and operating cost. For rental decisions, compare expected rent with maintenance, vacancy, repairs, furnishing, taxes, and travel or management costs.",
        ],
      },
      {
        heading: "A useful Zirakpur visit plan",
        paragraphs: [
          "Try the route at the time the intended occupant will use it. Walk the final approach, check parking without relying on a sales explanation, and ask for written clarity on ownership, dues, possession, and charges. A short visit that answers these questions is more useful than several visits based only on attractive photographs.",
        ],
        bullets: [
          "Record the exact tower, floor, unit, parking, and entrance details.",
          "Ask whether the property is ready, resale, rented, under construction, or proposed.",
          "Compare net rental logic rather than assuming guaranteed rent or appreciation.",
          "Have relevant documents reviewed before token, agreement, or transfer.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "GMADA Zirakpur master plan",
        href: "https://gmada.gov.in/sites/default/files/documents/Zirakpur_rpt_2011.pdf",
      },
      {
        label: "GMADA approved master plans",
        href: "https://gmada.gov.in/en/master-plansapproved-master-plansgmada",
      },
      {
        label: "Punjab RERA project search",
        href: "https://rera.punjab.gov.in/reraindex/PublicView/ProjectInfo",
      },
    ],
    faqs: [
      {
        question: "Is Zirakpur good for rental property?",
        answer:
          "It depends on the exact location, property format, access, tenant profile, maintenance cost, and purchase price. Compare likely net income and vacancy considerations before deciding.",
      },
      {
        question: "What should I check during a Zirakpur apartment visit?",
        answer:
          "Check access and parking, lifts, water, power backup, maintenance, seepage, common areas, noise, nearby construction, ownership or transfer documents, and all charges.",
      },
    ],
  },
  {
    slug: "new-chandigarh",
    title: "Property consultant in New Chandigarh",
    shortTitle: "New Chandigarh",
    metaTitle: "Property Consultant in New Chandigarh | Vedang Properties",
    metaDescription:
      "Compare longer-horizon residential, plot, and investment property questions in New Chandigarh with Vedang Properties.",
    image: "/images/area-new-chandigarh.jpg",
    imageAlt: "Independent home exterior for a New Chandigarh property area guide",
    mapImage: "/images/map-new-chandigarh.png",
    copy: "A developing belt for buyers comparing longer-horizon residential and land decisions.",
    intro:
      "New Chandigarh may suit buyers who are comfortable comparing a developing locality over a longer horizon. The decision needs a clear distinction between current on-ground convenience, planned development, property paperwork, and the buyer's timeline.",
    localContext:
      "Do not rely on a future promise alone. Visit the exact property, check present access and services, ask for written project or ownership details, and use appropriate official or professional verification before acting.",
    mapQuery: "New Chandigarh Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=New%20Chandigarh",
    buyerChecks: [
      "Separate available services and current access from proposed or future infrastructure.",
      "Clarify possession, development, maintenance, construction, and transfer timelines in writing.",
      "For plots, verify demarcation, access, ownership or allotment, dues, approval context, and transfer process.",
      "Make sure the holding period and budget can tolerate a slower or changing development timeline.",
    ],
    comparePoints: [
      {
        heading: "Current livability",
        copy: "Check daily shopping, healthcare, school or work routes, road comfort, utilities, and the immediate surroundings at the time you expect to use them.",
      },
      {
        heading: "Plot or land decisions",
        copy: "Document clarity, demarcation, access, dues, and transfer conditions need professional review before a longer-horizon decision.",
      },
      {
        heading: "Future plans",
        copy: "Treat proposed infrastructure as a factor to verify, not a guaranteed outcome. Keep the purchase sensible even if timelines change.",
      },
    ],
    detailSections: [
      {
        heading: "A longer-horizon decision needs present-day clarity",
        paragraphs: [
          "New Chandigarh may interest buyers looking at a developing belt, larger homes, plots, or longer-term residential decisions. The right approach is balanced: understand the future vision, but also check what is available today in terms of access, services, occupancy, utilities, construction, and daily convenience.",
          "This is especially important for buyers planning self-use. A future possibility may be relevant to the decision, but the property still needs to work with the buyer's commute, family routine, budget, and tolerance for a changing development timeline.",
        ],
      },
      {
        heading: "Plot and home checks",
        paragraphs: [
          "For plots, clarify demarcation, access, ownership or allotment, dues, development and approval context where applicable, transfer conditions, and the cost of future construction. For homes, inspect the actual building, approach road, utilities, parking, maintenance, surrounding activity, and possession or handover position.",
          "Keep proposed infrastructure in a separate note from confirmed facilities. Ask what source supports each important statement and use appropriate official or professional verification before treating it as part of the purchase decision.",
        ],
      },
      {
        heading: "How to compare a New Chandigarh option",
        paragraphs: [
          "Write down the holding period, purpose, budget after all charges, and the minimum level of present-day convenience required. Then compare the exact property with another option on access, paperwork, condition, complete cost, and exit flexibility. The goal is a decision that remains sensible even if a future timeline changes.",
        ],
        bullets: [
          "Visit the property and surrounding roads instead of relying only on a brochure or pin.",
          "Ask for written clarity on possession, development, maintenance, and transfer timelines.",
          "Check whether the property can support the intended use within the planned budget.",
          "Use a qualified legal professional before payment or a binding agreement.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "GMADA New Chandigarh overview",
        href: "https://gmada.gov.in/en/about-chandigarh",
      },
      {
        label: "GMADA New Chandigarh development plans",
        href: "https://www.gmada.gov.in/en/development-plans",
      },
      {
        label: "Punjab RERA project search",
        href: "https://rera.punjab.gov.in/reraindex/PublicView/ProjectInfo",
      },
    ],
    faqs: [
      {
        question: "Is New Chandigarh suitable for immediate self-use?",
        answer:
          "That depends on the exact pocket and the buyer's routine. Check current access, daily services, property readiness, and commute before deciding whether the location works today.",
      },
      {
        question: "What is important in a New Chandigarh plot purchase?",
        answer:
          "Review ownership or allotment, demarcation, access, dues, development and approval context where applicable, transfer terms, and complete costs with a qualified professional before payment.",
      },
    ],
  },
];

export const featuredAreas = areaGuides.slice(0, 5);
