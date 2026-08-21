export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  region: string;
  distance: string;
  responseTime: string;
  description: string;
  highways: string[];
  neighborhoods: string[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "southaven-ms",
    city: "Southaven",
    state: "MS",
    region: "North Mississippi",
    distance: "~10 mi from Memphis base",
    responseTime: "20–30 minutes",
    description:
      "24/7 roadside assistance across Southaven — flat tires, dead batteries, lockouts, fuel delivery and towing anywhere in the city, from Goodman Road to Church Road.",
    highways: ["I-55", "SR-302 (Goodman Rd)", "SR-178 (Stateline Rd)"],
    neighborhoods: ["Goodman Road corridor", "Snowden Grove", "Church Road", "Twin Hills", "Southaven Towne Center"],
  },
  {
    slug: "olive-branch-ms",
    city: "Olive Branch",
    state: "MS",
    region: "North Mississippi",
    distance: "~15 mi from Memphis base",
    responseTime: "25–35 minutes",
    description:
      "Mobile tire repair, jump starts, lockouts and towing in Olive Branch — covering Germantown Parkway, Craft Road and everything off Highway 305.",
    highways: ["US-78", "SR-305 (Cockrum Rd)", "SR-175"],
    neighborhoods: ["West Olive Branch", "Briarcrest", "Plum Point", "Countrywood", "Hillwood"],
  },
  {
    slug: "horn-lake-ms",
    city: "Horn Lake",
    state: "MS",
    region: "North Mississippi",
    distance: "~12 mi from Memphis base",
    responseTime: "20–30 minutes",
    description:
      "Fast 24/7 roadside rescue in Horn Lake — tires, battery, lockout, fuel and towing along Goodman Road, Horn Lake Road and the I-55 corridor.",
    highways: ["I-55", "SR-302 (Goodman Rd)", "Horn Lake Rd"],
    neighborhoods: ["Greenbrook", "South Towne", "Windsor Point", "Horn Lake Commons"],
  },
  {
    slug: "west-memphis-ar",
    city: "West Memphis",
    state: "AR",
    region: "East Arkansas",
    distance: "~15 mi from Memphis base",
    responseTime: "25–35 minutes",
    description:
      "Cross-river roadside help in West Memphis, AR — 24/7 towing, tire service, jump starts and lockouts across I-40, I-55 and the Arkansas side of the Hernando de Soto Bridge.",
    highways: ["I-40", "I-55", "US-70 (Broadway Blvd)"],
    neighborhoods: ["Midtown West Memphis", "Holiday City", "Mound City", "Kings Crossing"],
  },
  {
    slug: "germantown-tn",
    city: "Germantown",
    state: "TN",
    region: "East Memphis suburbs",
    distance: "~18 mi from Memphis base",
    responseTime: "25–35 minutes",
    description:
      "Roadside assistance in Germantown — mobile tire repair, battery service, lockouts and towing throughout Poplar Pike, Germantown Parkway and Wolf River Blvd.",
    highways: ["TN-177 (Poplar Ave)", "TN-204 (Poplar Pike)", "Germantown Pkwy"],
    neighborhoods: ["Saddle Creek", "Forest Hill", "Kimbrough", "Riverdale", "West Farmington"],
  },
  {
    slug: "collierville-tn",
    city: "Collierville",
    state: "TN",
    region: "East Memphis suburbs",
    distance: "~25 mi from Memphis base",
    responseTime: "30–40 minutes",
    description:
      "24/7 roadside rescue in Collierville — flat tires, dead batteries, lockouts, fuel delivery and towing across the town square, Houston Levee and Highway 72.",
    highways: ["US-72 (Poplar Ave)", "TN-385 (Bill Morris Pkwy)", "Houston Levee Rd"],
    neighborhoods: ["Historic Town Square", "Schilling Farms", "Stonebridge", "Wittenberg", "Wolf River Woods"],
  },
  {
    slug: "bartlett-tn",
    city: "Bartlett",
    state: "TN",
    region: "East Memphis suburbs",
    distance: "~17 mi from Memphis base",
    responseTime: "25–35 minutes",
    description:
      "Fast roadside help in Bartlett — mobile tires, jump starts, lockouts and towing throughout Stage Road, Summer Avenue and Appling Road, 24/7.",
    highways: ["TN-64 (Stage Rd)", "TN-177 (Summer Ave)", "Appling Rd"],
    neighborhoods: ["Bartlett Station", "Berclair", "Elmore Park", "Shadowlawn", "Staging Farms"],
  },
  {
    slug: "millington-tn",
    city: "Millington",
    state: "TN",
    region: "North Shelby County",
    distance: "~20 mi from Memphis base",
    responseTime: "25–35 minutes",
    description:
      "24/7 roadside assistance in Millington — tire repair, battery service, lockouts, fuel delivery and towing around Navy Road, Highway 51 and the Millington Naval Support Activity.",
    highways: ["US-51 (Hwy 51 N)", "TN-388 (Navy Rd)", "TN-14"],
    neighborhoods: ["Millington Civic Center", "Navy Road corridor", "Millington Central", "Old Millington"],
  },
];
