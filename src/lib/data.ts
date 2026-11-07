export const site = {
  name: "Sahar",
  fullName: "Sahar Sultan",
  role: "Web Developer",
  email: "saharsultan.cs@gmail.com",
  whatsapp: "923278197299",
  linkedin: "https://www.linkedin.com/in/sahar-sultan-5171ab422",
  github: "",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** Client type, used to build the "sites for …" list in the bios. */
  industry: string;
  /** "dashboard" projects get their own home-page section instead of Selected Projects. */
  kind?: "website" | "dashboard";
  tagline: string;
  snapshot: string;
  image: string;
  url: string;
  services: string[];
  tools: string[];
  capabilities: string[];
  overview: string[];
  features: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "spicery",
    name: "Spicery",
    category: "Restaurant Dashboard",
    industry: "restaurants",
    kind: "dashboard",
    tagline: "An admin dashboard for running a multi-branch restaurant: orders, sales, POS and team in one view.",
    snapshot:
      "A clean, data-rich admin dashboard for a restaurant group with three London branches, showing order stats, revenue vs operational cost charts, a live POS overview, payment breakdowns, team shifts, popular menu items and recent order activity.",
    image: "/projects/spicery.jpg",
    url: "https://spicery-dashboard.vercel.app/",
    services: ["Dashboard UI Design", "Frontend Development", "Data Visualisation"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    capabilities: ["KPI Cards", "Revenue & Cost Charts", "POS Overview", "Team Tracking", "Order Activity"],
    overview: [
      "Spicery is the back office for a restaurant group with outlets in Shoreditch, Soho and Camden. The owner lands on a personal greeting and four KPI cards (total, completed and cancelled orders and total revenue), each with its change since last month, plus quick Reserve and New Order actions.",
      "Below that, a weekly or monthly revenue vs operational cost chart shows profit and margin per day. Beside it sit team-on-duty tracking, popular categories, a dine-in, delivery and pick-up sales split, a filterable order feed, a POS panel with peak time and payment methods, and a best-seller carousel.",
    ],
    features: [
      { title: "KPI overview", text: "Orders, completions, cancellations and revenue at a glance, with month-on-month change." },
      { title: "Cost vs revenue chart", text: "Weekly and monthly views with daily revenue, cost, profit and margin." },
      { title: "POS overview", text: "Total sales, bills, average order value, peak hour and a cash, card and online donut chart." },
      { title: "Team overview", text: "Staff on duty, on break and off duty, with a live coverage gauge." },
      { title: "Sales channels", text: "Dine-in, delivery and pick-up split; click a channel to see its orders." },
      { title: "Order activity", text: "Searchable recent orders with outlet, status and amount, plus a popular-menu carousel." },
    ],
  },
  {
    slug: "ora-dental",
    name: "Ora Dental",
    category: "Business Website",
    industry: "dental clinics",
    tagline: "A calm, modern dental clinic website with treatments, pricing and online booking.",
    snapshot:
      "A premium website for a family, cosmetic and implant dental clinic, with live opening hours, treatment cards with prices, an interactive tooth-layer explainer and appointment booking.",
    image: "/projects/ora-dental.jpg",
    url: "https://ora-dental-gray.vercel.app/",
    services: ["Website Design", "Frontend Development", "UI Animation"],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    capabilities: ["Appointment Booking", "Live Clinic Hours", "Treatment Catalogue", "Animated Counters", "Chat Widget"],
    overview: [
      "Ora Dental needed a site that feels like a calm studio, not a hospital. The homepage opens with a cinematic intro loader and a full-bleed hero with the headline \"Gentle Care, Brilliant Smiles\", a clinic tour card, live open/closed status and quick treatment chips.",
      "Below the hero, visitors move through a four-step care journey, trust stats, an interactive \"Know your teeth, layer by layer\" section and treatment cards with prices and durations, so patients understand the treatment before they ever pick up the phone.",
    ],
    features: [
      { title: "Cinematic intro", text: "A branded loading screen with a percentage counter that sets a premium tone." },
      { title: "Live clinic status", text: "Opening hours are checked in real time and shown right in the hero." },
      { title: "Treatment cards", text: "Each treatment shows benefits, starting price and visit duration." },
      { title: "Tooth layer explainer", text: "Enamel, dentin, pulp and roots explained in a scroll-driven section." },
      { title: "Animated trust stats", text: "Satisfaction rate, smiles transformed and ratings count up on scroll." },
      { title: "Booking & chat", text: "Book-a-visit CTAs everywhere plus a floating chat assistant." },
    ],
  },
  {
    slug: "fuoco-farina",
    name: "Fuoco & Farina",
    category: "Restaurant Website",
    industry: "restaurants",
    tagline: "A playful, scroll-driven website for a wood-fired Neapolitan pizzeria.",
    snapshot:
      "A bold restaurant website for a Neapolitan pizzeria, with a scroll-pinned pizza that slices itself into eight, a signature menu with an order cart, flip-card reviews, table booking and a swipe-to-chop toppings mini game.",
    image: "/projects/fuoco-farina.jpg",
    url: "https://fuoco-farina.vercel.app/",
    services: ["Website Design", "Frontend Development", "Scroll Animation"],
    tools: ["React", "Vite", "GSAP", "Canvas", "Tailwind CSS"],
    capabilities: ["Scroll Storytelling", "Online Ordering Cart", "Table Booking", "Flip-card Reviews", "Mini Game"],
    overview: [
      "Fuoco & Farina needed a site that feels as warm and loud as the oven itself. It opens with a branded pizza loader, then a giant \"Fire Kissed pies.\" headline with a hand-drawn arrow, the 48-hour dough and 485° oven stats, and a rotating \"Wood fired · since 1998\" badge.",
      "As visitors scroll, the hero pizza stays pinned and splits into eight slices, leading into the signature menu (Diavola, Regina Burrata, Funghi & Tartufo) with add-to-order buttons, a look inside the kitchen, guest reviews on flip cards, and a final booking section with opening hours.",
    ],
    features: [
      { title: "Pizza loader", text: "A branded slice icon and percentage counter that set the tone before the page appears." },
      { title: "Slicing scroll scene", text: "The hero pizza stays pinned and breaks into eight slices as you scroll." },
      { title: "Menu with cart", text: "Signature pizzas with prices and a + button that updates the order counter." },
      { title: "Flip-card reviews", text: "Guest quotes flip over on tap to show the full review and source." },
      { title: "Booking section", text: "Opening hours, book-a-table and order-online calls to action, plus tonight's special." },
      { title: "Swipe-to-chop game", text: "A small canvas game in the menu where visitors swipe to chop toppings." },
    ],
  },
  {
    slug: "azure-dunes",
    name: "Azure Dunes Estates",
    category: "Real Estate Website",
    industry: "real estate firms",
    tagline: "A cinematic real-estate website for a Dubai property investment advisory.",
    snapshot:
      "A premium website for a Dubai investment real-estate advisory, with a sunset skyline hero, animated market stats, featured properties with ROI, a four-step buying process, top communities and a free-consultation booking flow.",
    image: "/projects/azure-dunes.jpg",
    url: "https://azure-dunes-estates.vercel.app/",
    services: ["Website Design", "Frontend Development", "Scroll Animation"],
    tools: ["HTML", "CSS", "JavaScript", "Lenis"],
    capabilities: ["Property Listings", "ROI Cards", "Animated Stats", "Smooth Scrolling", "Consultation Booking"],
    overview: [
      "Azure Dunes Estates needed a site that sells the feeling of Dubai before it sells a single unit. The homepage opens on a sunset skyline with a giant \"Invest in DUBAI\" headline, a pill-shaped glass navigation, a Book a Call button and a rotating set of property cards with price, beds and size.",
      "Below the hero, investors move through a community marquee, a \"Why Dubai\" section with counting stats on yield, tax and the Golden Visa, handpicked apartments, villas and off-plan units with AED prices and ROI, a four-step buying process, top communities, investor reviews and a final consultation call to action.",
    ],
    features: [
      { title: "Skyline hero", text: "A full-screen sunset view of Dubai with an oversized \"Invest in DUBAI\" headline." },
      { title: "Animated market stats", text: "Rental yield, tax, investors served and visa years count up as you scroll." },
      { title: "Property cards with ROI", text: "Each listing shows community, beds, size, AED price and expected return." },
      { title: "Four-step process", text: "Strategy call, shortlist, secure purchase and rental management explained simply." },
      { title: "Smooth scrolling", text: "Lenis smooth scroll and reveal-on-scroll motion for a premium feel." },
      { title: "Consultation booking", text: "Book-a-call buttons throughout lead to a free 30-minute investment consultation." },
    ],
  },
  {
    slug: "glowpure",
    name: "GlowPure",
    category: "E-commerce",
    industry: "skincare brands",
    tagline: "A soft, premium skincare store with animated product showcases.",
    snapshot:
      "A modern e-commerce website for a clean skincare brand, with a lavender hero, filterable product cards by skin concern, a scroll-animated Vitamin C serum showcase, ingredient marquees, reviews and a rewards and newsletter flow.",
    image: "/projects/glowpure.jpg",
    url: "https://glowpure-self.vercel.app/",
    services: ["Website Design", "Frontend Development", "Scroll Animation"],
    tools: ["Next.js", "GSAP", "ScrollTrigger", "Lenis"],
    capabilities: ["Product Catalogue", "Skin-concern Filters", "Shopping Cart", "Scroll Storytelling", "Newsletter Signup"],
    overview: [
      "GlowPure needed a store that feels as gentle as its products. The homepage opens with a soft lavender hero, the headline \"Healthy Skin, Confident Radiance\", a Shop Now button with a 4.9-star rating, trust badges for tested, clean, vegan and all-skin-type formulas, and a floating dermatologist-approved seal.",
      "Below the hero, shoppers filter products by skin need (anti-aging, hydration, brightening, acne and sunscreen), follow a scroll-animated serum bottle through a product showcase, scan ingredient and benefit marquees, read verified reviews and join Glow Rewards or the 15%-off newsletter.",
    ],
    features: [
      { title: "Lavender hero", text: "A soft, premium first screen with a model, product bottle and floating glass bubbles." },
      { title: "Skin-concern filters", text: "Product cards filter by anti-aging, hydration, brightening, acne care and sunscreen." },
      { title: "Animated serum showcase", text: "The Vitamin C serum bottle moves through the page with GSAP ScrollTrigger." },
      { title: "Ingredient marquees", text: "Scrolling rows of key actives and brand promises like cruelty-free and vegan." },
      { title: "Verified reviews", text: "Customer quotes tied to the exact product each buyer used." },
      { title: "Rewards & newsletter", text: "Glow Rewards sign-up and a 15%-off first-order newsletter to drive repeat sales." },
    ],
  },
  {
    slug: "avenoir",
    name: "Avenoir",
    category: "E-commerce",
    industry: "fashion labels",
    tagline: "A fashion e-commerce store with a 3D lookbook, style quiz and quick-add shopping.",
    snapshot:
      "An editorial online store for a fashion label, with category browsing, new arrivals, a drag-to-spin lookbook, a 60-second style quiz, wishlist and cart.",
    image: "/projects/avenoir.jpg",
    url: "https://avenoir-eight.vercel.app/",
    services: ["Website Design", "Frontend Development", "E-commerce"],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Zustand", "Framer Motion"],
    capabilities: ["Product Catalogue", "Quick Add", "Cart & Wishlist", "Style Quiz", "3D Lookbook"],
    overview: [
      "Avenoir needed to feel like a luxury fashion magazine while still working as a fast shop. The hero layers the model inside an arch in front of an oversized STYLE headline, with a trust strip for shipping, payment, weekly drops and concierge support.",
      "Shoppers can browse by Women, Men, Accessories and Footwear, quick-add pieces from the New Arrivals and Best Sellers rails, spin through ten looks in a circular lookbook, and take a three-question style quiz that recommends pieces.",
    ],
    features: [
      { title: "Editorial hero", text: "Oversized serif headline with the model framed in an arch." },
      { title: "Shop by category", text: "Women, Men, Accessories and Footwear one click from the homepage." },
      { title: "Quick add", text: "Products go straight to the bag from any product rail." },
      { title: "Drag-to-spin lookbook", text: "Ten seasonal looks arranged in a 3D carousel." },
      { title: "Style quiz", text: "A 60-second quiz that curates pieces for the shopper." },
      { title: "AI stylist chat", text: "A floating assistant that helps with size and outfit advice." },
    ],
  },
  {
    slug: "meison-velora",
    name: "Meison Velora",
    category: "Animated 3D Site",
    industry: "cafés",
    tagline: "A specialty coffee house in Paris with a 3D coffee hero and seasonal menu.",
    snapshot:
      "An immersive website for a Parisian specialty coffee brand, with a 3D coffee cup scene, seasonal menu, salon locations, a journal and a membership programme.",
    image: "/projects/meison-velora.jpg",
    url: "https://meison-velora.vercel.app/",
    services: ["Website Design", "3D Web Experience", "Frontend Development"],
    tools: ["Next.js", "TypeScript", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    capabilities: ["3D Hero Scene", "Seasonal Menu", "Locations", "Membership", "Ambience Audio"],
    overview: [
      "Meison Velora is a coffee brand that sells a ritual, not just a drink. The hero is a real-time 3D scene: a branded cup on a pedestal with floating coffee beans and sculpted cones, behind an elegant serif headline \"Coffee, Reimagined in Paris\".",
      "The rest of the site tells the story: a philosophy section, animated stats, a seasonal menu with signature drinks and pastries, three Paris salons with live open status, journal stories and a Velora Circle rewards programme, plus a café-ambience sound toggle.",
    ],
    features: [
      { title: "Real-time 3D hero", text: "A React Three Fiber scene with a cup, beans and sculptural forms." },
      { title: "Seasonal menu", text: "Signature drinks and pastries with descriptions and prices." },
      { title: "Paris spaces", text: "Three salon locations with address and open-now status." },
      { title: "Membership rewards", text: "A Velora Circle section explaining points, invites and perks." },
      { title: "Café ambience", text: "An optional ambient sound toggle that makes the site feel alive." },
      { title: "Smooth scroll motion", text: "Text reveals, marquees and scroll-linked animation throughout." },
    ],
  },
  {
    slug: "aurelia",
    name: "Aurelia",
    category: "E-commerce",
    industry: "furniture stores",
    tagline: "A furniture and interiors store with a material lab, room shopping and style quiz.",
    snapshot:
      "A warm, premium furniture e-commerce site with shop-by-room browsing, a scroll story, a material sample lab, a live sale countdown, shop-the-look hotspots and day/evening mode.",
    image: "/projects/aurelia.jpg",
    url: "https://aurelia-three-hazel.vercel.app/",
    services: ["Website Design", "Frontend Development", "E-commerce"],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Zustand"],
    capabilities: ["Shop by Room", "Material Lab", "Sale Countdown", "Shop the Look", "Day / Evening Mode"],
    overview: [
      "Aurelia sells furniture made to last decades, so the site had to feel like walking into a well-designed home. The hero reveals a living room through an arch with a glass card headline \"Design that feels like home\".",
      "A scroll-driven story builds a room piece by piece, from texture to sofa to lighting. Shoppers can browse by room, spin a ring of real material samples, shop best sellers, catch a live sale countdown, tap hotspots to shop a room and switch the whole site to an evening theme.",
    ],
    features: [
      { title: "Arch reveal hero", text: "The living room opens out of an arch into a full glass-card hero." },
      { title: "Scroll room story", text: "Six steps that build a room from texture to finished home." },
      { title: "Material lab", text: "A spinning ring of samples linked to the products made from them." },
      { title: "Sale countdown", text: "A live days / hours / minutes timer on the seasonal offer." },
      { title: "Shop the look", text: "Tap hotspots on a styled room to add those pieces to the cart." },
      { title: "Day / evening mode", text: "The whole store re-themes for a cosy after-sunset look." },
    ],
  },
];

// Derived from projects so the bios and counters update when a project is added.
const uniqueIndustries = [...new Set(projects.map((p) => p.industry))];
export const industries =
  uniqueIndustries.length > 1 ? `${uniqueIndustries.slice(0, -1).join(", ")} and ${uniqueIndustries.at(-1)}` : uniqueIndustries[0] ?? "";
export const websites = projects.filter((p) => p.kind !== "dashboard");
export const dashboards = projects.filter((p) => p.kind === "dashboard");
export const projectCount = `${projects.length}+`;

export const services = [
  {
    id: "web",
    title: "Web Design & Development",
    short: "Responsive websites that look sharp and turn visitors into enquiries.",
    text: "From the first wireframe to launch, I design and build custom websites with Next.js and Tailwind CSS — clean code, smooth animation and a layout that works on every screen.",
    points: ["Custom UI design", "Next.js & React development", "Responsive, mobile-first layouts", "SEO-ready structure", "Deployment on Vercel"],
  },
  {
    id: "redesign",
    title: "Website Redesign",
    short: "A fresh look, clearer navigation and a better phone experience for an existing site.",
    text: "If your site looks outdated, I rebuild it with a modern design system, better typography, faster performance and clear calls to action — keeping your brand and content.",
    points: ["UI/UX audit of your current site", "Modern visual refresh", "Performance & Lighthouse fixes", "Better structure & CTAs", "Smooth migration with no downtime"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Websites",
    short: "Online stores with easy browsing, a simple cart and a smooth checkout.",
    text: "Storefronts like Avenoir, Aurelia and GlowPure: category browsing, quick-add to cart, wishlist, product rails, sale countdowns and quizzes that help customers find the right product.",
    points: ["Product catalogue & categories", "Cart & wishlist (Zustand)", "Quick add & product rails", "Offers, countdowns & trust strips", "Style / product quizzes"],
  },
  {
    id: "animation",
    title: "Animated & 3D Experiences",
    short: "Motion and 3D where it helps the story, light enough to run on any phone.",
    text: "GSAP scroll animation, text reveals, intro loaders and real-time 3D scenes with Three.js / React Three Fiber — like the coffee cup hero on Meison Velora.",
    points: ["GSAP & Framer Motion", "Scroll-driven storytelling", "Three.js / React Three Fiber", "Intro loaders & page transitions", "Micro-interactions"],
  },
  {
    id: "business",
    title: "Business & Service Websites",
    short: "Websites for clinics, restaurants, cafés, real estate and local brands.",
    text: "Sites like Ora Dental, Fuoco & Farina, Azure Dunes Estates and Meison Velora: services or menus with pricing, locations, live opening hours, booking CTAs and chat widgets that turn visitors into customers.",
    points: ["Service / menu pages with pricing", "Booking & contact flows", "Live hours & locations", "Reviews & trust sections", "WhatsApp / chat integration"],
  },
  {
    id: "landing",
    title: "Landing Pages",
    short: "Fast, focused pages for launches and campaigns.",
    text: "A single high-impact page for a product, offer or event — designed to load instantly and push visitors to one clear action.",
    points: ["Conversion-focused layout", "Strong hero & CTA", "Lead / contact forms", "Analytics ready", "Quick turnaround"],
  },
];

export const stack = ["NEXT.JS", "REACT", "TYPESCRIPT", "JAVASCRIPT", "TAILWIND CSS", "HTML", "CSS"];
export const stackCreative = ["GSAP", "FRAMER MOTION", "THREE.JS", "REACT THREE FIBER", "ZUSTAND", "FIGMA", "VERCEL"];

