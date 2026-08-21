export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "stranded-on-the-interstate-what-to-do",
    title: "Stranded on the Interstate at Night: What to Do Right Now",
    excerpt:
      "Your car dies on I-40 at 2am. Here's the exact play-by-play — from pulling over safely to getting home without getting ripped off.",
    date: "2026-08-18",
    category: "Roadside Safety",
    readTime: "5 min read",
    body: [
      "It happens fast: one minute you're cruising down I-40, the next your engine sputters, your tire blows, or a warning light you've never seen before turns solid red. The most dangerous moment isn't the breakdown — it's the 10 minutes right after, when you're deciding what to do on the shoulder of an interstate.",
      "Step one: get off the travel lane. Coast to the right shoulder if you have any power at all — don't stop in the lane to 'wait for a gap.' Turn on your hazard lights immediately. At night, keep your headlights on so oncoming traffic sees your car from a distance.",
      "Step two: call for help BEFORE getting out. If you're on a highway with fast-moving traffic, stay buckled in with your hazards on until help arrives. If you must exit the vehicle, do it on the passenger side, away from traffic, and stand behind the guardrail if one exists.",
      "Step three: call a professional roadside service — not a random number from a sign on the shoulder. Those 'call this number' signs and sticker ads on the back of trailers are often call centers that quote one price on the phone and charge triple on arrival. A local company with a physical address and real reviews will quote you upfront and send a truck you can track.",
      "While you wait, stay visible. At night, a reflective vest helps. During the day, raising your hood is the universal signal that you need help. Never accept help from a stranger who 'just happens to have jumper cables' — wait for the professional you called.",
      "And once you're rolling again, take five minutes to prevent the next breakdown: check your tire pressure monthly, replace tires before they hit 2/32\" tread, and keep a roadside emergency kit (jumper cables, flashlight, water, phone charger) in your trunk year-round.",
    ],
  },
  {
    slug: "flat-tire-in-memphis-heat",
    title: "Flat Tire in Memphis Heat? Here's How Long You Can Push It",
    excerpt:
      "Summer in Memphis means 95-degree pavement and blowout season. How hot road surfaces wreck tires, and when to stop driving on a damaged tire.",
    date: "2026-08-12",
    category: "Tire Care",
    readTime: "4 min read",
    body: [
      "Memphis summers are brutal on tires. When the air temperature hits 95°F, asphalt can reach 150°F — and that heat accelerates every weakness in a tire's sidewall and tread. It's why blowout calls spike every July and August, especially on aging tires that looked fine in spring.",
      "The math is simple: heat increases air pressure. A tire that was properly inflated to 32 PSI on a cool morning can climb to 38-40 PSI on a hot afternoon. That's still within safe range for most vehicles — the real danger is a tire that was ALREADY underinflated, because low pressure causes the sidewall to flex excessively, generating even more heat until the rubber fails catastrophically.",
      "If you get a flat or a blowout in Memphis heat, the most important thing is to stop driving on it. A run-flat tire can typically go 50 miles at 50 mph — but only if the damage is in the tread, not the sidewall. A regular tire driven flat for even a few blocks is usually destroyed, turning a $30 repair into a $150+ replacement.",
      "Pull over safely, call for mobile tire service, and let a professional assess it. A quality roadside tech can patch most tread punctures on the spot in 30-45 minutes — no tow required. If the sidewall is damaged or the tire was run flat, they'll replace it with a matching tire right there.",
      "Pro tip: check your tread depth with the penny test. Insert a penny head-first into the tread — if you can see the top of Lincoln's head, your tread is at 2/32\" or less and the tire needs replacing before the next heat wave, not after.",
    ],
  },
  {
    slug: "dead-battery-jump-start-mistakes",
    title: "7 Jump Start Mistakes That Kill Your Car's Electronics",
    excerpt:
      "Jump starting is simple — until it isn't. The exact order of operations (and the common mistakes that fry modern car computers).",
    date: "2026-08-05",
    category: "Battery & Electrical",
    readTime: "5 min read",
    body: [
      "Modern cars have dozens of computers that run everything from the engine to the radio. A sloppy jump start can send voltage spikes through those computers and cause damage that costs thousands. Here's how to do it right — and what NOT to do.",
      "Mistake #1: connecting cables while the dead car is still running. Always turn both cars fully off before attaching cables. Attaching under load creates arcs that can damage the electronics.",
      "Mistake #2: wrong cable order. The correct order is: positive to positive on the dead battery first, then positive to positive on the donor, then negative to the donor's negative terminal, and LAST, the negative cable to an unpainted metal surface on the dead car — NOT its battery terminal. This prevents sparks near the battery's hydrogen gas.",
      "Mistake #3: revving the donor car aggressively. Idle the donor for 2-3 minutes instead. Revving creates voltage spikes.",
      "Mistake #4: cranking the dead car for more than 10 seconds at a time. Give it 30 seconds between attempts to cool the starter.",
      "Mistake #5: removing cables while the engine is running. Turn off the previously dead car, then remove in exact reverse order: negative from the unpainted metal first, then negative from donor, then positives.",
      "Mistake #6: ignoring corrosion. If the battery terminals are crusty white/green, clean them before jumping — poor contact causes arcing.",
      "Mistake #7: jumping a battery that's actually dead-dead. If the battery won't hold a charge after a successful jump, it's not a jump-start problem, it's a battery replacement problem. Most auto parts stores test batteries for free — or our techs can test it on-site and install a new one on the spot.",
    ],
  },
  {
    slug: "locked-out-of-car-memphis",
    title: "Locked Out of Your Car in Memphis? Don't Break the Window",
    excerpt:
      "Locked keys in the car are a $70 fix — unless you 'help' first. Why calling a professional unlock service is cheaper than the alternatives.",
    date: "2026-07-28",
    category: "Lockout",
    readTime: "4 min read",
    body: [
      "It happens to everyone eventually: you close the door, hear the click, and realize the keys are still in the ignition — or the trunk, or the seat. In Memphis, a professional lockout service runs around $70 and takes 15-30 minutes. Breaking a window costs $200+ to replace plus a tow — and it's often covered by nothing.",
      "Before you call anyone, check the obvious: is a door actually unlocked? It happens more than you'd think. Second, do you have a spare key with a family member nearby? If you have roadside assistance through your insurance or a membership plan, check the number on your card — many plans include lockout service.",
      "When you call a professional, the tech will use an air wedge and a long-reach tool to pop the lock or press the unlock button — damage-free in nearly every case. Legitimate companies will ask for proof of ownership (registration or ID matching the vehicle). If a 'tech' doesn't ask, that's a red flag.",
      "The worst mistakes we see: using a coat hanger yourself (it can jam the door latch and turn a $70 unlock into a $300 door panel repair), breaking a window as a 'shortcut,' and calling a number from a sticker on a gas station pole (unregulated, unpredictable pricing).",
      "Pro tip: hide a spare key in a magnetic box UNDER the car — but only if you're sure you won't forget it there. And if you have kids or pets in the car, call 911 first for pets in distress, then a lockout tech — every minute matters in a hot car.",
    ],
  },
  {
    slug: "used-tires-vs-new-tires",
    title: "Used vs New Tires: When Buying Used in Memphis Actually Makes Sense",
    excerpt:
      "Used tires get a bad rap — and sometimes deservedly. How to inspect a used tire in 60 seconds and when to buy new instead.",
    date: "2026-07-21",
    category: "Tire Care",
    readTime: "5 min read",
    body: [
      "Memphis drivers love a deal, and quality used tires can save you 50-70% versus new. But there's a right way and a wrong way to buy used. Here's the 60-second inspection that separates a smart purchase from a dangerous one.",
      "Check the DOT date code. It's stamped on the sidewall (e.g., '3523' = 35th week of 2023). Tires are designed to last about 6 years from manufacture regardless of tread. A used tire with 8/32\" tread but a 2019 date code is worth a fraction of a 2023 tire with the same tread. Rubber ages even when it looks good.",
      "Check the tread evenly. Uneven wear (one edge bald, center bald, or scalloped spots) means the tire came off a car with alignment or suspension problems. It'll wear the same way on your car.",
      "Check for plugs. A tire that's been patched or plugged more than 2-3 times — or patched in the sidewall or shoulder — should be passed on. Tread-area plugs are repairable; sidewall patches are not.",
      "Check the sidewall for bulges, cracks, or repaired damage. Run your hand along it. A bulge means the internal belts are broken — that tire is a blowout waiting to happen.",
      "When does new make more sense? If you drive highway miles daily, carry passengers regularly, or drive in heavy rain — new tires give you full-depth tread and full warranty. When does used make sense? Budget commutes, low-mileage around-town driving, spare tires, and older vehicles where a $350 set of new tires exceeds the car's value.",
      "The smart move: buy used from a shop that inspects, tests, and stands behind each tire — not from a guy with a truck full of tires at the gas station. A reputable shop will mount, balance, and warranty the tire, and can match your existing tires so your set wears evenly.",
    ],
  },
  {
    slug: "towing-costs-explained",
    title: "Towing Costs Explained: What You're Really Paying For",
    excerpt:
      "Why does a tow cost $95 in one place and $350 in another? A breakdown of hook-up fees, mileage rates, and the questions to ask before you agree.",
    date: "2026-07-14",
    category: "Towing",
    readTime: "5 min read",
    body: [
      "Nobody plans a tow, so nobody knows what one should cost — until they're sitting on the shoulder with a dead transmission, reading a rate card upside down through the window. Let's fix that.",
      "Most tows are priced in two parts: a hook-up fee (the fixed cost of the truck arriving and loading your vehicle) and a per-mile rate. In the Memphis area, expect a hook-up of $75-$120 and $3-$6 per mile for a standard local tow. An accident recovery or winch-out adds more because of the equipment and liability involved.",
      "What drives the price up: distance (long-haul tows are quoted separately), vehicle size (a lifted truck or commercial van may need a heavy-duty wrecker), and conditions (mud, ditches, parked-in spots where the tow truck can't get a straight pull).",
      "The questions to ask before you agree: 1) What's the hook-up fee? 2) What's the per-mile rate? 3) Is that door-to-door or depot-to-depot? 4) Is loading included? 5) Does my insurance roadside plan cover this — can you bill them?",
      "Red flags: a price quoted over the phone that changes on arrival, 'cash only' pressure, and tow companies that refuse to give you a written quote. Legitimate companies will text or email a quote and take card payment.",
      "Flatbed vs wheel-lift: flatbeds carry the whole vehicle and are required for AWD/4WD cars (towing those on two wheels can destroy the drivetrain). Always confirm a flatbed for AWD vehicles — it's the difference between a $95 tow and a $2,000 transfer case repair.",
      "And if you're stuck now: a reputable local company will tell you the price on the phone, give you a live ETA, and show up with the right truck the first time. Save the number in your phone before you need it.",
    ],
  },
  {
    slug: "roadside-emergency-kit-checklist",
    title: "The Only Roadside Emergency Kit Checklist You Need",
    excerpt:
      "Skip the $80 pre-made kits. Here's the $40 DIY version that actually covers Memphis conditions — summer heat, winter ice, and everything between.",
    date: "2026-07-07",
    category: "Roadside Safety",
    readTime: "4 min read",
    body: [
      "Most pre-made roadside kits are 60% stuff you'll never use and 40% stuff that's too cheap to work. Build your own for under $40 and know exactly what's in it.",
      "The non-negotiables: 1) Jumper cables (4-gauge, at least 12 feet — short thin ones can't deliver enough current). 2) A flashlight with fresh batteries or a rechargeable one kept charged. 3) A tire pressure gauge. 4) A basic first aid kit (bandages, antiseptic, gloves). 5) Water — a gallon for drinking, another for the radiator if needed.",
      "The Memphis-specific add-ons: 6) A reflective vest and warning triangles or flares — summer nights and fog make you invisible. 7) A phone charger that works without the car (power bank). 8) An ice scraper and gloves — yes, Memphis gets ice storms. 9) A small tool kit: screwdrivers, pliers, adjustable wrench, duct tape. 10) A $20 bill in the glovebox for emergencies where cards won't work.",
      "The winter layer: a blanket, hand warmers, and kitty litter or sand for traction if you slide off in ice. The summer layer: an extra gallon of coolant and a sunshade — a car that overheats in a Memphis August needs coolant, not just water.",
      "Keep the kit in the trunk, not the cabin — and check it twice a year (when clocks change is a good reminder) to replace expired items and refresh batteries.",
      "One more thing: program the right numbers into your phone now. Your insurance roadside line, your membership plan (if you have one), and a local 24/7 roadside company. When you're stranded at midnight, you don't want to be Googling reviews from the shoulder.",
    ],
  },
  {
    slug: "fuel-delivery-when-out-of-gas",
    title: "Out of Gas on I-55? Why Fuel Delivery Beats Walking to a Gas Station",
    excerpt:
      "Ran dry on the highway? Walking to a station with a gas can is dangerous and often illegal on interstates. Mobile fuel delivery is faster, safer, and maybe free with your plan.",
    date: "2026-06-30",
    category: "Roadside Safety",
    readTime: "4 min read",
    body: [
      "Running out of gas is embarrassing, but it's also dangerous — especially on an interstate. Walking along I-55 or I-40 with a gas can is illegal in many states (pedestrians are prohibited on limited-access highways) and extremely risky with traffic moving at 70 mph.",
      "The safe play: pull completely off the road, put on hazards, and call a mobile fuel delivery service. A professional will bring the right fuel — regular, premium, or diesel — in a proper container, pour it safely, and often get you started again if the battery drained while you sat.",
      "What it costs: fuel delivery typically runs $45-$75 plus the cost of the fuel itself. If you have a roadside assistance membership, fuel delivery is often INCLUDED (up to a certain amount of fuel). Check your membership card before you call — that's the difference between a $60 call and a free one.",
      "While you wait: stay in the car with hazards on (unless it's unsafe), keep your doors locked, and if someone stops to 'help,' thank them through the window and let them know help is on the way.",
      "Prevention beats rescue: never let the tank get below a quarter tank. Your fuel gauge is least accurate at the bottom — the 'miles to empty' estimate can drop fast on hot days or with heavy AC use.",
      "And if you're the type who always runs it close to empty, the math is simple: one fuel delivery call costs more than 4-5 full tanks of gas would have cost you in extra stops. Fill up early, drive safe.",
    ],
  },
];
