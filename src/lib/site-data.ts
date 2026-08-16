export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "tire-repair-replacement",
    title: "Tire Repair & Replacement",
    icon: "Tire",
    tagline: "Flat tire? We'll have you rolling in minutes.",
    description:
      "Punctures, blowouts or worn tread — our mobile techs arrive with the right tire, tools and torque specs to get you safely back on the road, at home or on the highway.",
    features: [
      "On-site flat tire repair",
      "New & used tire replacement",
      "Spare installation & rotation",
      "Tire pressure & TPMS reset",
      "All sizes: cars, SUVs, trucks",
    ],
    deliverables: ["Roadside repair", "Tire matching & fitment", "TPMS service", "24/7 dispatch"],
    image: "/images/service-tire.jpg",
  },
  {
    slug: "jump-start-battery",
    title: "Jump Start & Battery Service",
    icon: "BatteryCharging",
    tagline: "Dead battery? Quick jump or new battery, on the spot.",
    description:
      "Whether it's a simple jump start or a battery that's past its prime, we test, jump or replace it right where you are — with genuine batteries for every make.",
    features: [
      "24/7 jump start service",
      "Battery testing & diagnostics",
      "On-site battery replacement",
      "Battery recycling included",
      "Charging system check",
    ],
    deliverables: ["Jump start", "Battery test report", "New battery install", "Alternator check"],
    image: "/images/service-jumpstart.jpg",
  },
  {
    slug: "lockout-assistance",
    title: "Lockout Assistance",
    icon: "KeyRound",
    tagline: "Locked out? We open most cars in under 30 minutes.",
    description:
      "Keys locked inside, broken or lost — our trained technicians open your vehicle quickly and without damage, so you're back in the driver's seat fast.",
    features: [
      "Car, truck & SUV lockouts",
      "Key extraction",
      "Damage-free entry",
      "Motorcycle & commercial vehicles",
      "Pet-in-car priority response",
    ],
    deliverables: ["Vehicle entry", "Key extraction", "Lock repair referral", "24/7 availability"],
    image: "/images/service-lockout.jpg",
  },
  {
    slug: "towing-recovery",
    title: "Towing & Recovery",
    icon: "Truck",
    tagline: "Flatbed towing you can trust, day or night.",
    description:
      "Accident, breakdown or just need a lift — our flatbed and wheel-lift tow trucks move your vehicle safely, with careful loading and full insurance coverage.",
    features: [
      "Flatbed & wheel-lift towing",
      "Accident recovery",
      "Long-distance transport",
      "Motorcycle & ATV towing",
      "Winch-out & stuck vehicles",
    ],
    deliverables: ["Safe transport", "Accident scene support", "Long-haul quotes", "Insurance coordination"],
    image: "/images/service-towing.jpg",
  },
  {
    slug: "fuel-delivery",
    title: "Fuel Delivery",
    icon: "Fuel",
    tagline: "Out of gas? We bring the fuel to you.",
    description:
      "Ran dry on the highway or at home? Our mobile fuel service delivers petrol or diesel straight to your vehicle so you can get moving without a tow.",
    features: [
      "Petrol & diesel delivery",
      "Highway & residential service",
      "Emergency fuel cans",
      "Lockout + fuel combo calls",
      "24/7 roadside response",
    ],
    deliverables: ["Fuel delivery", "Emergency start assist", "Receipt for reimbursement", "Quick dispatch"],
    image: "/images/service-fuel.jpg",
  },
  {
    slug: "auto-repair-maintenance",
    title: "Auto Repair & Maintenance",
    icon: "Wrench",
    tagline: "From brakes to oil changes — shop quality, mobile convenience.",
    description:
      "Our shop and mobile units handle brakes, batteries, belts, fluids and more — routine maintenance and repairs that keep your vehicle dependable year-round.",
    features: [
      "Brake pads & rotors",
      "Oil changes & fluid service",
      "Battery & charging systems",
      "Belts, hoses & filters",
      "Pre-trip inspections",
    ],
    deliverables: ["Shop or mobile service", "Maintenance schedules", "Quality parts warranty", "Digital service records"],
    image: "/images/gallery-battery.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Service was great and so was the staff — they got me back on the road fast.",
    name: "Vincent Couch",
    role: "Verified review",
    rating: 5,
  },
  {
    quote: "They handle it all — brakes, fuel pump, rotors, tires... they good people.",
    name: "Scott Colston",
    role: "Verified review",
    rating: 5,
  },
  {
    quote: "Good prices on used tires. Fair, honest and quick.",
    name: "Candace Brock",
    role: "Verified review",
    rating: 5,
  },
  {
    quote: "Came in for 2 tires to be put on — in and out with no hassle, fair price.",
    name: "Verified customer",
    role: "Memphis, TN",
    rating: 4,
  },
  {
    quote: "Real shop, real service. They treat you right and the work holds up.",
    name: "Verified customer",
    role: "Memphis, TN",
    rating: 4,
  },
  {
    quote: "Needed tires on a budget — they found me quality used ones at a great price.",
    name: "Verified customer",
    role: "Memphis, TN",
    rating: 5,
  },
];

export const TEAM = [
  {
    name: "Marcus Rivera",
    title: "Founder & Lead Technician",
    bio: "20 years in tires and roadside recovery — built Riverdale Tires on the promise of fast, honest help.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Tanya Brooks",
    title: "Dispatch Manager",
    bio: "The voice on the phone at 2am. Coordinates every truck, every call, every minute.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Eduardo Salas",
    title: "Senior Tire Technician",
    bio: "Master of the impact wrench — can mount, balance and match any tire in his sleep.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Kim Park",
    title: "Towing & Recovery Lead",
    bio: "Flatbed operator with 10,000+ safe loads and a record of zero damage claims.",
    image: "/images/team-4.jpg",
  },
];

export const TIMELINE = [
  { year: "2008", title: "Founded", text: "Marcus Rivera started Riverdale Tires as a single-shop tire business." },
  { year: "2012", title: "Roadside launched", text: "Added 24/7 mobile tire and jump-start service across the county." },
  { year: "2016", title: "Towing fleet", text: "Brought flatbed towing and accident recovery in-house." },
  { year: "2020", title: "Expanded coverage", text: "Full roadside coverage — tires, battery, lockout, fuel and towing." },
  { year: "2023", title: "25,000 calls", text: "Hit 25,000 successful roadside rescues and a 4.9-star average." },
  { year: "2026", title: "Today", text: "A 12-person team with 8 service vehicles covering Memphis and the tri-state area." },
];

export const STATS = [
  { value: "4.5★", label: "Chamber rating" },
  { value: "239", label: "Verified reviews" },
  { value: "15+", label: "Years in business" },
  { value: "6 days", label: "Open weekly" },
];

export const FAQS = [
  {
    q: "How fast can you get to me?",
    a: "Average response time is 30–45 minutes across Memphis, faster in the city core. We give you a live ETA when you call and track every truck.",
  },
  {
    q: "Do you really work 24/7?",
    a: "Yes — nights, weekends and holidays. If you're stuck, we're awake. Our dispatch line is answered by a person, not a machine.",
  },
  {
    q: "What areas do you cover?",
    a: "All of Memphis, West Tennessee, North Mississippi and East Arkansas — plus interstate corridors across the tri-state area. Long-distance towing available on request.",
  },
  {
    q: "Do you replace tires on the spot?",
    a: "Yes — our trucks carry common sizes, and we can match most others and deliver within the hour. If it's not on board, we'll bring it to you.",
  },
  {
    q: "Do you accept insurance or roadside memberships?",
    a: "We work with most major providers and issue receipts for reimbursement. Pay by card, cash or invoice for fleet accounts.",
  },
  {
    q: "Can you open my car without damage?",
    a: "In nearly all cases, yes. Our techs use professional entry tools — and if your vehicle needs special handling, we'll tell you upfront.",
  },
];

export const COMPANY = {
  name: "Riverdale Tires and Auto",
  tagline: "Roadside Assistance · Tires · Towing",
  description:
    "24/7 roadside assistance, mobile tire service, battery, lockout, fuel and towing — fast, friendly help wherever you're stranded.",
  email: "help@riverdaletireandauto.com",
  phone: "+1 901-751-2744",
  address: "5180 Riverdale Rd, Memphis, TN 38141",
  hours: "Mon–Sat 8:00–6:00 · Sun 10:00–4:00",
};
