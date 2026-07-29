export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: ServiceSection[];
  checks: string[];
  faqs: ServiceFaq[];
  relatedAreas: { label: string; href: string }[];
  relatedServices: { label: string; href: string }[];
};

export const serviceGuides: ServiceGuide[] = [
  {
    slug: "property-consultant-mohali",
    title: "Property consultant in Mohali for clearer property decisions",
    metaTitle: "Property Consultant in Mohali | Vedang Properties",
    metaDescription:
      "Speak with a local property consultant in Mohali about homes, plots, commercial property, seller requirements, and site visits.",
    kicker: "Local property guidance",
    intro:
      "Vedang Properties helps buyers, sellers, and investors understand the requirement first, compare suitable property options, and decide what needs to be checked before a site visit or transaction step.",
    image: "/images/aerocity-apartment-v2.png",
    imageAlt: "Residential apartment visual for a Mohali property consultant service page",
    sections: [
      {
        heading: "What a local property consultant should do",
        paragraphs: [
          "A useful property consultation begins with questions, not a random list of properties. The important starting points are the buyer's purpose, preferred locations, budget, property type, usable space, possession preference, commute, and tolerance for documentation or construction-related uncertainty.",
          "For sellers, the starting point is different. The owner needs to explain the property accurately, assemble basic details, understand the likely buyer profile, and decide how visits and follow-up should be handled. Good advice should make the next step clearer without promising a price, timeline, or result that has not been verified.",
        ],
      },
      {
        heading: "Buyer support across Mohali and nearby areas",
        paragraphs: [
          "A buyer comparing Mohali may be looking at Aerocity, IT City, Airport Road, Kharar, Zirakpur, or New Chandigarh for very different reasons. One person may need a family home near a daily route, another may be evaluating a plot, while another may be comparing an office or shop. The same property cannot be judged using the same checklist for every use case.",
          "The consultation can focus on narrowing the search, comparing exact pockets, arranging a relevant site visit, and writing down the questions that still need owner, promoter, authority, lender, or legal confirmation. The purpose is to reduce unproductive visits and help the buyer ask better questions.",
        ],
        bullets: [
          "Residential homes, apartments, builder floors, villas, and independent houses.",
          "Residential plots and land where location and documents need careful review.",
          "Commercial property such as offices, shops, SCO-style spaces, and showrooms.",
          "Resale, rental, and owner enquiries where the exact property details are available.",
        ],
      },
      {
        heading: "How the consultation process works",
        paragraphs: [
          "The first conversation captures the requirement in plain terms. The next step is to compare options by the same points: exact location, access, usable area, property condition, parking, possession, recurring charges, and the documents that can be shown. Only after that should a visit be arranged for options that appear relevant enough to justify the buyer's time.",
          "After a visit, the buyer should have a record of what was observed, what was stated, what is still unverified, and what the next professional check should be. A consultant can coordinate conversations, but legal, tax, loan, and technical decisions should be taken with the appropriate qualified professional.",
        ],
      },
      {
        heading: "What Vedang Properties does not promise",
        paragraphs: [
          "A property consultant cannot honestly promise that every option is the best, that a location will appreciate by a fixed amount, or that rent and resale are guaranteed. Availability, pricing, possession, approvals, ownership, and charges can change and need to be confirmed for the specific property.",
          "Vedang Properties presents the website as a local advisory and enquiry platform. Visitors can share their requirement, but they should use official records and professional advice before making a token payment, signing an agreement, or transferring funds.",
        ],
      },
    ],
    checks: [
      "State whether the requirement is for self-use, rental, resale, business use, or longer-term holding.",
      "Set a complete budget that includes registry, taxes, interiors, repairs, maintenance, and professional review where applicable.",
      "Ask for the exact location and basic property details before travelling.",
      "Record what is confirmed and what still needs document or authority verification.",
      "Do not treat a photograph, brochure, or verbal return estimate as proof of a transaction outcome.",
    ],
    faqs: [
      {
        question: "What does a property consultant in Mohali help with?",
        answer:
          "A property consultant can help clarify a buyer or seller requirement, compare relevant locations and property types, coordinate suitable visits, and organise practical questions before professional document review.",
      },
      {
        question: "Does Vedang Properties publish live property listings?",
        answer:
          "The website is an advisory and enquiry platform rather than a public live-listing catalogue. Share the requirement directly so current suitability can be discussed before a visit.",
      },
      {
        question: "Can a consultant verify property documents?",
        answer:
          "A consultant can help identify questions and collect basic details, but transaction-specific legal, title, tax, loan, and technical review should be completed by the relevant qualified professional.",
      },
      {
        question: "Which areas does Vedang Properties cover?",
        answer:
          "The website focuses on Mohali and nearby corridors including Aerocity, IT City, Airport Road, Kharar, Zirakpur, and New Chandigarh.",
      },
    ],
    relatedAreas: [
      { label: "Aerocity property guide", href: "/areas/aerocity-mohali" },
      { label: "IT City property guide", href: "/areas/it-city-mohali" },
      { label: "Kharar property guide", href: "/areas/kharar" },
    ],
    relatedServices: [
      { label: "Residential property", href: "/residential-property-mohali" },
      { label: "Plot and land guidance", href: "/plot-dealer-mohali" },
      { label: "Commercial property", href: "/commercial-property-mohali" },
    ],
  },
  {
    slug: "property-dealer-mohali",
    title: "Property dealer in Mohali for buyer and seller requirements",
    metaTitle: "Property Dealer in Mohali | Vedang Properties",
    metaDescription:
      "Compare buyer, seller, resale, rental, and investment property requirements in Mohali with practical guidance from Vedang Properties.",
    kicker: "Buyer and seller coordination",
    intro:
      "People searching for a property dealer in Mohali usually need more than a phone number. They need a relevant shortlist, clear location information, site-visit coordination, and practical questions before they commit time or money.",
    image: "/images/it-city-commercial-v2.png",
    imageAlt: "Commercial property visual for a Mohali property dealer service page",
    sections: [
      {
        heading: "Property dealer and property consultant are not the same conversation",
        paragraphs: [
          "A buyer may use the words property dealer, property consultant, or real estate agent when looking for help. The useful distinction is the work being done: is the person only forwarding options, or are they understanding the requirement, explaining the exact location, arranging access, and keeping track of open questions?",
          "Vedang Properties is positioned around the second type of conversation. That means the buyer or owner should receive clear next steps and should know which details are still to be checked. It does not mean that every property is owned, listed, approved, priced, or available directly through Vedang Properties.",
        ],
      },
      {
        heading: "For buyers comparing Mohali property",
        paragraphs: [
          "A useful shortlist should be filtered by use case. A family home needs a different discussion from a plot held for later construction. A commercial property needs frontage, access, permitted use, and customer practicality checked. A rental-oriented decision needs a realistic tenant profile and complete holding costs rather than a simple gross-rent calculation.",
          "Before a visit, ask for the exact pocket, property type, approximate usable area, parking position, possession or occupancy status, quoted amount, recurring charges, and the documents that can be made available. These basics help distinguish a serious option from a vague lead.",
        ],
        bullets: [
          "Buy, sell, rent, invest, or book a site visit.",
          "Residential, plot or land, commercial, builder floor, or villa requirements.",
          "Preferred location, budget, timeline, and minimum usable space.",
          "Specific questions about documents, access, parking, possession, or charges.",
        ],
      },
      {
        heading: "For owners who want to sell",
        paragraphs: [
          "An owner enquiry becomes easier to handle when the property is described accurately. Useful details include the exact location, property type, area, floor or plot dimensions, age or possession position, parking, photographs, expected price, ownership status, dues, and whether the owner is ready for visits.",
          "A seller should not rely only on a high asking price or a broad claim about the locality. Buyers will compare condition, access, documents, charges, and alternatives. Clear information at the beginning can make the follow-up more focused and reduce repeated questions.",
        ],
      },
      {
        heading: "A careful transaction conversation",
        paragraphs: [
          "The role of a property dealer can include introductions, coordination, and negotiation support, but the parties should still verify the relevant documents, ownership, approvals, project registration where applicable, loan or dues position, taxes, and payment terms. Professional legal and financial review remains important before a binding step.",
          "There is no need to create urgency by hiding basic information. A better process gives the buyer and seller enough clarity to decide whether the next step is a visit, a document review, a revised conversation, or no further action.",
        ],
      },
    ],
    checks: [
      "Ask whether the property is direct owner, resale, project, rental, or another type of enquiry.",
      "Confirm the exact location and whether the person arranging the visit has permission to do so.",
      "Compare the complete cost, not only the advertised price or expected rent.",
      "Clarify brokerage, inclusions, timelines, and separate payable items in writing.",
      "Use Punjab RERA and qualified professional checks where the property or transaction requires them.",
    ],
    faqs: [
      {
        question: "How do I compare property dealers in Mohali?",
        answer:
          "Compare how clearly they explain the property, location, pricing, documents, availability, charges, and next steps. Genuine reviews and a consistent business profile are more useful than an unsupported claim of being the best.",
      },
      {
        question: "Can Vedang Properties help owners sell property?",
        answer:
          "Owners can share their property details, location, expected price, photos, and contact information. The requirement can then be discussed for suitability, buyer matching, and visit coordination.",
      },
      {
        question: "Is every property on the website available?",
        answer:
          "No. Website visuals and guides are not a live inventory promise. Current availability and property details must be confirmed directly for each enquiry.",
      },
      {
        question: "Where should I verify a registered project?",
        answer:
          "Use the official Punjab RERA project search where applicable, and obtain transaction-specific legal, tax, loan, and technical advice before proceeding.",
      },
    ],
    relatedAreas: [
      { label: "Airport Road property guide", href: "/areas/airport-road-mohali" },
      { label: "Zirakpur property guide", href: "/areas/zirakpur" },
      { label: "New Chandigarh property guide", href: "/areas/new-chandigarh" },
    ],
    relatedServices: [
      { label: "Sell property in Mohali", href: "/sell-property-mohali" },
      { label: "Residential property", href: "/residential-property-mohali" },
      { label: "Commercial property", href: "/commercial-property-mohali" },
    ],
  },
  {
    slug: "residential-property-mohali",
    title: "Residential property consultant in Mohali",
    metaTitle: "Residential Property Consultant in Mohali",
    metaDescription:
      "Get practical help comparing apartments, builder floors, villas, and independent homes in Mohali and nearby Tricity areas.",
    kicker: "Homes for practical living",
    intro:
      "Residential property decisions are personal and expensive. Vedang Properties helps families and individual buyers compare homes by use, access, layout, condition, documents, and complete ownership cost before a visit.",
    image: "/images/kharar-family-home-v2.png",
    imageAlt: "Family home visual for a residential property consultant in Mohali page",
    sections: [
      {
        heading: "Residential property is more than bedroom count",
        paragraphs: [
          "A home should be judged by how it supports the buyer's actual routine. Commute, daily services, road comfort, parking, sunlight, ventilation, storage, maintenance, security, water, power backup, and the condition of the surrounding area can matter as much as the number of bedrooms or the headline area.",
          "The right comparison also depends on the buyer's purpose. A family buying for self-use may prioritise immediate convenience and usable layout. A buyer comparing rental or resale may need to understand likely tenant or buyer demand, holding costs, building condition, and exit flexibility without assuming a guaranteed return.",
        ],
      },
      {
        heading: "What can be compared in Mohali",
        paragraphs: [
          "The residential search may include apartments, builder floors, villas, independent houses, and ready or under-construction options across Aerocity, IT City, Airport Road, Kharar, Zirakpur, and New Chandigarh. These locations have different access and development contexts, so a buyer should compare like with like.",
          "For each option, record the exact location, usable or carpet area where available, floor, lift, parking, maintenance, possession or occupancy position, included items, additional charges, and documents available for review. A consistent note makes it easier to see the practical difference between options.",
        ],
        bullets: [
          "Apartment layout, tower density, lifts, common areas, parking, and maintenance.",
          "Builder-floor privacy, stairs, roof or terrace rights, access, and land-share questions.",
          "Villa or independent-home condition, parking, utilities, privacy, and repair needs.",
          "Ready, resale, rental, or under-construction status and the related timeline.",
        ],
      },
      {
        heading: "A useful residential site visit",
        paragraphs: [
          "Visit the property and the surrounding streets. Look at the entry, parking, common areas, lifts, stairs, room dimensions, natural light, ventilation, seepage, bathrooms, kitchen utility, storage, electrical points, and visible maintenance. Ask what is included in the price and which items are payable separately.",
          "If possible, visit at a time that reflects the family's routine and notice traffic, noise, market access, parking behaviour, construction activity, and the route to important daily destinations. A sample flat or edited photograph cannot answer all of these questions.",
        ],
      },
      {
        heading: "Budget and paperwork before a home purchase",
        paragraphs: [
          "The real budget may include registry or transfer charges, loan costs, interiors, furniture, repairs, parking, maintenance deposits, society or building charges, shifting, and legal or technical review. These should be considered before the buyer decides how much the property itself can cost.",
          "For resale homes, ask about ownership, loan status, dues, possession, transfer, and any pending work. For projects, verify the project details and applicable registration information through official sources. Legal, tax, loan, and technical advice should be obtained from the relevant professional.",
        ],
      },
    ],
    checks: [
      "Compare usable space and layout, not only super area or bedroom count.",
      "Inspect parking, lifts, water, power backup, maintenance, seepage, and common areas.",
      "Calculate registry, interiors, repairs, maintenance deposits, and moving costs.",
      "Ask for possession, ownership, dues, loan, and transfer details for resale homes.",
      "Match the location to the family's daily route instead of relying only on a map pin.",
    ],
    faqs: [
      {
        question: "What residential property types can I compare in Mohali?",
        answer:
          "Depending on the current enquiry, buyers may compare apartments, builder floors, villas, independent homes, ready homes, resale options, and selected under-construction or project options.",
      },
      {
        question: "Which Mohali area is best for a family home?",
        answer:
          "There is no universal best area. Compare Aerocity, IT City, Airport Road, Kharar, Zirakpur, and New Chandigarh by the family's budget, commute, services, property type, and present-day convenience.",
      },
      {
        question: "Can you arrange a residential site visit?",
        answer:
          "Share the requirement and preferred location. Suitable visit coordination can be discussed after the basic property details and availability are confirmed.",
      },
      {
        question: "Do you guarantee appreciation or rental income?",
        answer:
          "No. Future appreciation and rental income depend on many changing factors. A responsible decision should compare location, condition, price, costs, likely users, and holding period without a fixed-return promise.",
      },
    ],
    relatedAreas: [
      { label: "Aerocity residential guide", href: "/areas/aerocity-mohali" },
      { label: "Kharar residential guide", href: "/areas/kharar" },
      { label: "Zirakpur residential guide", href: "/areas/zirakpur" },
    ],
    relatedServices: [
      { label: "Property consultant in Mohali", href: "/property-consultant-mohali" },
      { label: "Plot and land guidance", href: "/plot-dealer-mohali" },
      { label: "Sell residential property", href: "/sell-property-mohali" },
    ],
  },
  {
    slug: "plot-dealer-mohali",
    title: "Plot dealer in Mohali for practical shortlisting",
    metaTitle: "Plot Dealer in Mohali | Vedang Properties",
    metaDescription:
      "Compare residential plots and land in Mohali with practical checks for access, dimensions, development, ownership, approvals, and transfer.",
    kicker: "Plot and land guidance",
    intro:
      "Plot decisions need more than a rate and a location pin. Vedang Properties helps buyers compare the intended use, access, dimensions, development context, budget, and document questions before a site visit or token decision.",
    image: "/images/sector-82-plot-v2.png",
    imageAlt: "Residential plot visual for a plot dealer in Mohali service page",
    sections: [
      {
        heading: "Begin with the reason for buying the plot",
        paragraphs: [
          "A plot for building a family home should be evaluated differently from land held for a longer period or considered for commercial use. Self-use brings immediate questions about road access, utilities, nearby services, construction timing, and the shape of the plot. A longer-horizon buyer may focus more on paperwork, holding cost, development context, and future exit options.",
          "Write down the planned use, preferred location, approximate dimensions, budget, construction timeline, and tolerance for waiting before you start comparing options. This prevents a buyer from treating a low quoted rate as the only important feature.",
        ],
      },
      {
        heading: "Plot checks before a site visit",
        paragraphs: [
          "Ask for the exact location, plot dimensions, frontage, access road, corner or park-facing position, development status, demarcation, and the basic ownership or allotment details that can be shown. The buyer should understand whether the property is a sanctioned plot, resale, part of a project, or another type of land enquiry.",
          "A brochure, forwarded map, or verbal statement is not enough to establish ownership, approval, use, or transferability. The relevant records should be reviewed by a qualified legal professional before payment or a binding agreement.",
        ],
        bullets: [
          "Exact plot number, dimensions, frontage, depth, and access side.",
          "Road width, approach route, drainage, utilities, and neighbouring development.",
          "Ownership or allotment trail, demarcation, dues, and transfer conditions.",
          "Layout, approval, land-use, construction, or project-registration questions where applicable.",
        ],
      },
      {
        heading: "Budget beyond the quoted plot price",
        paragraphs: [
          "A plot budget may include registry or transfer charges, legal review, authority dues, boundary work, site clearing, architectural planning, utilities, approvals, construction finance, and holding costs. If the buyer expects to build soon, the cost and time needed after purchase should be estimated before the plot price is finalised.",
          "For investment use, the buyer should consider how long the money may remain tied up, what the future user or buyer could be, and what evidence supports the development assumptions. A plot does not come with a guaranteed appreciation outcome.",
        ],
      },
      {
        heading: "A disciplined plot site visit",
        paragraphs: [
          "Visit the exact plot and its immediate surroundings, not only a nearby landmark. Check the road, plot shape, boundary or demarcation, level, drainage, adjacent construction, utilities, and whether the physical position matches the documents and map shared before the visit.",
          "Keep the next step separate from the decision to pay. A site visit can identify questions, but it does not replace title, approval, tax, loan, or technical review. Do not pay a token merely because a site visit has taken place.",
        ],
      },
    ],
    checks: [
      "Define self-use, construction, commercial, or long-term holding before shortlisting.",
      "Confirm dimensions, frontage, access, demarcation, and exact plot identity.",
      "Ask for ownership, allotment, dues, approval, land-use, and transfer details.",
      "Include legal review, registry, boundary work, construction planning, and utilities in the budget.",
      "Use official records and qualified legal advice before token, agreement, or transfer.",
    ],
    faqs: [
      {
        question: "What does a plot dealer in Mohali help with?",
        answer:
          "A plot consultant or dealer can help discuss the intended use, compare locations and plot formats, coordinate site visits, and organise questions about access, dimensions, development, and documents.",
      },
      {
        question: "What is the most important plot document?",
        answer:
          "There is no single document that answers every transaction question. Ownership or allotment, approved layout or land-use context, dues, demarcation, transfer terms, and other relevant records should be reviewed together by a qualified professional.",
      },
      {
        question: "Can I buy a plot only from the map location?",
        answer:
          "No. A map helps with orientation, but the exact plot, physical position, access, documents, ownership, and transfer conditions must be confirmed before acting.",
      },
      {
        question: "Do you guarantee plot appreciation?",
        answer:
          "No. Plot value can change for many reasons and no fixed appreciation or return should be assumed.",
      },
    ],
    relatedAreas: [
      { label: "Aerocity plot guide", href: "/areas/aerocity-mohali" },
      { label: "IT City property guide", href: "/areas/it-city-mohali" },
      { label: "New Chandigarh property guide", href: "/areas/new-chandigarh" },
    ],
    relatedServices: [
      { label: "Property consultant in Mohali", href: "/property-consultant-mohali" },
      { label: "Residential property", href: "/residential-property-mohali" },
      { label: "Sell property in Mohali", href: "/sell-property-mohali" },
    ],
  },
  {
    slug: "commercial-property-mohali",
    title: "Commercial property consultant in Mohali",
    metaTitle: "Commercial Property Consultant in Mohali",
    metaDescription:
      "Compare offices, shops, showrooms, SCO-style spaces, and commercial property in Mohali using practical access, use, cost, and document checks.",
    kicker: "Commercial property decisions",
    intro:
      "Commercial property should be evaluated by how the business will actually use it. Vedang Properties helps buyers and owners compare access, visibility, frontage, permitted use, parking, operating costs, property condition, and likely customer or tenant needs.",
    image: "/images/zirakpur-office-v2.png",
    imageAlt: "Office building visual for a commercial property consultant in Mohali page",
    sections: [
      {
        heading: "Start with the business model",
        paragraphs: [
          "The right commercial space depends on the business, not only on the size or locality name. A showroom may need visibility and stopping space. An office may need reliable access, lifts, power backup, parking, and a comfortable work environment. A clinic, studio, warehouse, or service business may have different use, access, loading, signage, and approval questions.",
          "Before comparing properties, define the customer or employee movement, operating hours, required frontage, storage, parking, utilities, budget, and expected start date. This helps filter out spaces that look attractive but cannot support the planned operation.",
        ],
      },
      {
        heading: "Commercial property checks in Mohali",
        paragraphs: [
          "Commercial options may include offices, shops, showrooms, SCO-style spaces, mixed-use units, and rental or resale opportunities across Mohali, Aerocity, IT City, Airport Road, Kharar, and Zirakpur. Exact access, permitted activity, frontage, parking, visibility, surrounding activity, and building condition need to be checked for each property.",
          "A main-road address can be useful, but it is not automatically the right business location. Customer entry, turning movement, parking behaviour, signage visibility, nearby competition, rent or maintenance, and the cost of making the space operational may matter more than the label attached to the corridor.",
        ],
        bullets: [
          "Frontage, visibility, entrance, parking, loading, and customer movement.",
          "Permitted use, layout, building rules, signage, and operating restrictions.",
          "Power load, water, lifts, common-area maintenance, security, and access hours.",
          "Purchase price, rent, deposit, fit-out, maintenance, taxes, and likely vacancy.",
        ],
      },
      {
        heading: "Buy, lease, or invest: different questions",
        paragraphs: [
          "An owner-occupier may value control and fit-out flexibility, while a tenant may prioritise a workable lease, access, deposit, and start date. An investor needs to understand the likely tenant profile, vacancy risk, maintenance, operating costs, and exit audience. A commercial decision should not be based only on a projected rent or appreciation statement.",
          "Ask for clarity on title or allotment, dues, use conditions, occupancy, lease terms, lock-in, escalation, parking rights, common charges, fit-out responsibility, and handover. A lawyer, tax adviser, architect, or other professional may be needed depending on the transaction.",
        ],
      },
      {
        heading: "A useful commercial site visit",
        paragraphs: [
          "Visit during the hours that matter to the business. Observe customers, traffic, parking, neighbouring activity, visibility from the route, lift or staircase access, security, noise, and the final walk from parking to the entrance. Ask what can be changed and who pays for each change.",
          "For a commercial property, the site visit should produce a basic operating picture: how people arrive, where they stop, how goods or staff enter, what the premises needs before opening, and which permissions or documents still require confirmation.",
        ],
      },
    ],
    checks: [
      "Define the business use, customer profile, operating hours, and access requirements.",
      "Check frontage, visibility, parking, loading, signage, permitted activity, and common charges.",
      "Calculate fit-out, deposit, rent or EMI, maintenance, utilities, taxes, and vacancy risk.",
      "Clarify lease, ownership, dues, possession, handover, and alteration responsibilities.",
      "Use professional legal, tax, technical, or planning advice where the transaction requires it.",
    ],
    faqs: [
      {
        question: "What commercial properties can I compare in Mohali?",
        answer:
          "Depending on the enquiry, buyers and owners may discuss offices, shops, showrooms, SCO-style spaces, mixed-use units, rental opportunities, and selected commercial properties across Mohali and nearby corridors.",
      },
      {
        question: "Is Airport Road always the best commercial location?",
        answer:
          "Not automatically. The right location depends on customer movement, visibility, parking, permitted use, access, rent or purchase cost, competition, and the specific business model.",
      },
      {
        question: "Can commercial property provide guaranteed rental income?",
        answer:
          "No. Rent, vacancy, tenant quality, maintenance, and operating costs can change. A commercial investment should be evaluated using realistic assumptions and complete costs.",
      },
      {
        question: "What should I ask before leasing a commercial space?",
        answer:
          "Ask about lease term, deposit, lock-in, escalation, permitted activity, fit-out, repairs, utilities, maintenance, parking, signage, handover, and who is responsible for each obligation.",
      },
    ],
    relatedAreas: [
      { label: "Airport Road property guide", href: "/areas/airport-road-mohali" },
      { label: "IT City property guide", href: "/areas/it-city-mohali" },
      { label: "Zirakpur property guide", href: "/areas/zirakpur" },
    ],
    relatedServices: [
      { label: "Property dealer in Mohali", href: "/property-dealer-mohali" },
      { label: "Plot and land guidance", href: "/plot-dealer-mohali" },
      { label: "Sell commercial property", href: "/sell-property-mohali" },
    ],
  },
  {
    slug: "sell-property-mohali",
    title: "Sell your property in Mohali with a clearer owner process",
    metaTitle: "Sell Property in Mohali | Vedang Properties",
    metaDescription:
      "Share your Mohali property details with Vedang Properties for a practical owner enquiry, buyer matching discussion, and site-visit coordination.",
    kicker: "Owner enquiries",
    intro:
      "Selling a property begins with accurate information. Vedang Properties helps owners organise the property details, understand the likely buyer or tenant conversation, and discuss the next step without making an unsupported promise about price or time.",
    image: "/images/new-chandigarh-villa-v2.png",
    imageAlt: "Villa exterior visual for an owner selling property in Mohali page",
    sections: [
      {
        heading: "Prepare the property information first",
        paragraphs: [
          "A buyer can make a better decision when the owner has basic facts ready: exact location, property type, area, floor or plot dimensions, age, possession, parking, condition, photographs, expected price, ownership position, dues, loan status, and availability for visits. Missing information creates repeated calls and can make the property harder to compare.",
          "The description should be honest about what is included, what needs repair, what is nearby, and which details still need professional confirmation. A clear owner enquiry is more valuable than a very high price attached to vague or exaggerated wording.",
        ],
      },
      {
        heading: "How buyer matching should work",
        paragraphs: [
          "A serious buyer is not defined only by budget. The property must fit the buyer's purpose, location needs, timeline, property type, and comfort with condition or documentation. A family buyer may ask about layout and daily access, an investor may ask about holding and exit, and a commercial buyer may ask about use, visibility, and parking.",
          "The owner should be ready to answer practical questions and decide how much access can be provided. The aim is to arrange relevant conversations and visits, not to send every enquiry to the property without understanding fit.",
        ],
        bullets: [
          "Residential resale, independent home, villa, apartment, or builder-floor details.",
          "Plot or land dimensions, access, demarcation, ownership, and transfer information.",
          "Commercial property use, frontage, parking, rent or lease terms, and fit-out position.",
          "Expected price, flexible points, viewing availability, and the preferred closing timeline.",
        ],
      },
      {
        heading: "Documents and pricing before marketing",
        paragraphs: [
          "An owner should gather the documents relevant to the property type and understand any loan, dues, tax, society, maintenance, allotment, project, or transfer issue before making a firm commitment to a buyer. A lawyer can identify title and transfer concerns; a tax professional can advise on tax-specific questions.",
          "Pricing should be discussed with reference to the exact property, condition, location, comparable options, urgency, and complete transaction cost. No website or consultant should claim a fixed market value without inspecting the specific facts.",
        ],
      },
      {
        heading: "A smoother owner-to-buyer process",
        paragraphs: [
          "The process can begin with an owner enquiry, basic property details, photographs, and a conversation about the preferred buyer or tenant. After that, the practical next step may be a document discussion, property visit, pricing conversation, or a request for missing information.",
          "Before accepting a token or signing an agreement, the owner and buyer should agree on the property description, payment schedule, conditions, documents, possession, and responsibilities in writing. Professional legal and financial review should be completed before a binding transaction step.",
        ],
      },
    ],
    checks: [
      "Prepare exact location, area, property type, condition, parking, photographs, and possession details.",
      "Disclose ownership, loan, dues, tax, society, project, or transfer questions early.",
      "Set an asking-price discussion around the exact property and complete transaction costs.",
      "Decide who can approve visits and how quickly genuine enquiries can receive information.",
      "Do not accept a token until the agreement terms and relevant documents are professionally reviewed.",
    ],
    faqs: [
      {
        question: "How do I sell my property in Mohali through Vedang Properties?",
        answer:
          "Share your name, phone number, property type, exact location, approximate area, expected price, photos, and availability for a visit. The owner requirement can then be discussed for suitability and next steps.",
      },
      {
        question: "Do you guarantee that my property will sell?",
        answer:
          "No. Sale timing and outcome depend on price, condition, documents, market conditions, buyer fit, and many other factors. The service focuses on a clearer owner enquiry and relevant buyer conversations.",
      },
      {
        question: "What documents should a seller prepare?",
        answer:
          "The documents depend on the property type and transaction. Prepare the relevant ownership or allotment, transfer, dues, loan, tax, project, and possession information, then obtain legal advice for the specific property.",
      },
      {
        question: "Can you help sell plots and commercial property too?",
        answer:
          "Owners can enquire about residential property, plots or land, and commercial property. The exact information and verification requirements will depend on the property and intended transaction.",
      },
    ],
    relatedAreas: [
      { label: "Aerocity property guide", href: "/areas/aerocity-mohali" },
      { label: "Kharar property guide", href: "/areas/kharar" },
      { label: "New Chandigarh property guide", href: "/areas/new-chandigarh" },
    ],
    relatedServices: [
      { label: "Property consultant in Mohali", href: "/property-consultant-mohali" },
      { label: "Property dealer in Mohali", href: "/property-dealer-mohali" },
      { label: "Commercial property", href: "/commercial-property-mohali" },
    ],
  },
];

