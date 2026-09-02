export type ProductCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
};

export type ProductSubcategory = {
  slug: string;
  categorySlug: string;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  subcategorySlug: string;
  categorySlug: string;
  name: string;
  image?: string;
};

export const productCategories: ProductCategory[] = [
  {
    slug: "amusement-dinosaur-parks",
    title: "Amusement & Dinosaur Parks, Game Zones",
    tagline: "Rides, attractions & edutainment",
    description:
      "Complete park projects — rides, slides, dino animatronics, snow and adventure parks, illumination parks, science parks and edutainment centres — plus arcade games, VR zones, 5D/7D theatres, trampoline parks and soft play. From one acre to full destinations, and turnkey setups for malls and resorts.",
  },
  {
    slug: "lighting-festival-party",
    title: "Lighting, Festival, Party & Seasonal Products",
    tagline: "Décor, lighting & celebration supplies",
    description:
      "Festival, decorative, stage, landscape, street and solar lighting, signage and LED displays — plus Christmas, Diwali and celebration products at factory volume: décor, lights, gifts, party and wedding supplies, toys and inflatables.",
  },
  {
    slug: "sports-tents-outdoor",
    title: "Sports, Tents & Outdoor",
    tagline: "Playgrounds, fitness & event tents",
    description:
      "Playground and fitness equipment, sports goods, camping and glamping gear, event tents — built for active, outdoor experiences.",
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage Setups",
    tagline: "Kiosks, food courts & kitchen equipment",
    description:
      "Food courts, kiosks, food trucks and commercial kitchen equipment for parks, malls and cafés. From layout to daily operations, we deliver ready-to-run setups built for high footfall.",
  },
  {
    slug: "movies-ott-cinema",
    title: "Movies, Content & OTT, Cinema, Events & Media, Cultural Exchange",
    tagline: "Cinema, media & cultural programs",
    description:
      "Cinema seating and projection, stage, sound and LED walls, event equipment and studio & production gear for every celebration and creation — cross-border film distribution, content licensing, dubbing and subtitling, co-productions — plus international cultural events, art and music exchanges, festivals and student programs building bridges between nations through culture.",
  },
];

export const productSubcategories: ProductSubcategory[] = [
  // Amusement & Dinosaur Parks
  {
    slug: "animatronic-dinosaurs",
    categorySlug: "amusement-dinosaur-parks",
    name: "Animatronic Dinosaurs & Creatures",
    description: "Life-size animatronic dinosaur sculptures and creatures with interactive features.",
  },
  {
    slug: "amusement-rides",
    categorySlug: "amusement-dinosaur-parks",
    name: "Amusement Rides",
    description: "Thrilling rides and attractions for theme parks and entertainment zones.",
  },
  {
    slug: "water-park-equipment",
    categorySlug: "amusement-dinosaur-parks",
    name: "Water Park Equipment",
    description: "Water slides, pools, and aquatic play structures.",
  },
  {
    slug: "indoor-playground-soft-play",
    categorySlug: "amusement-dinosaur-parks",
    name: "Indoor Playground & Soft Play",
    description: "Safe play structures and soft play equipment for children.",
  },
  {
    slug: "arcade-vr-game-zones",
    categorySlug: "amusement-dinosaur-parks",
    name: "Arcade, VR & Game Zones",
    description: "Arcade machines, VR experiences, and interactive gaming systems.",
  },
  {
    slug: "themed-parks-attractions",
    categorySlug: "amusement-dinosaur-parks",
    name: "Themed Parks & Attractions",
    description: "Complete themed experience packages and specialty attractions.",
  },

  // Lighting, Festival, Party & Seasonal Products
  {
    slug: "festival-lantern-displays",
    categorySlug: "lighting-festival-party",
    name: "Festival & Lantern Displays",
    description: "Decorative lantern installations and themed light displays.",
  },
  {
    slug: "decorative-landscape-lighting",
    categorySlug: "lighting-festival-party",
    name: "Decorative & Landscape Lighting",
    description: "Outdoor lighting for gardens, landscapes, and public spaces.",
  },
  {
    slug: "stage-architectural-lighting",
    categorySlug: "lighting-festival-party",
    name: "Stage & Architectural Lighting",
    description: "Professional stage lights and LED display systems.",
  },
  {
    slug: "solar-lighting",
    categorySlug: "lighting-festival-party",
    name: "Solar Lighting",
    description: "Energy-efficient solar-powered lighting solutions.",
  },
  {
    slug: "seasonal-celebration-products",
    categorySlug: "lighting-festival-party",
    name: "Seasonal & Celebration Products",
    description: "Holiday décor, festive supplies, and celebration packages.",
  },
  {
    slug: "party-wedding-supplies",
    categorySlug: "lighting-festival-party",
    name: "Party & Wedding Supplies",
    description: "Party decorations, wedding supplies, and event essentials.",
  },

  // Sports, Tents & Outdoor
  {
    slug: "outdoor-playground",
    categorySlug: "sports-tents-outdoor",
    name: "Outdoor Playground Equipment",
    description: "Playground structures and outdoor play equipment.",
  },
  {
    slug: "outdoor-fitness",
    categorySlug: "sports-tents-outdoor",
    name: "Outdoor Fitness & Gym Equipment",
    description: "Exercise equipment designed for outdoor use.",
  },
  {
    slug: "sports-goods",
    categorySlug: "sports-tents-outdoor",
    name: "Sports Goods & Equipment",
    description: "Sports equipment and recreational gear.",
  },
  {
    slug: "camping-glamping",
    categorySlug: "sports-tents-outdoor",
    name: "Camping & Glamping",
    description: "Tents, camping gear, and glamping accommodations.",
  },
  {
    slug: "event-marquee-tents",
    categorySlug: "sports-tents-outdoor",
    name: "Event & Marquee Tents",
    description: "Large-scale tents and marquees for events.",
  },

  // Food & Beverage Setups
  {
    slug: "food-kiosks-carts",
    categorySlug: "food-beverage",
    name: "Food Kiosks & Carts",
    description: "Mobile and stationary food service units.",
  },
  {
    slug: "food-trucks",
    categorySlug: "food-beverage",
    name: "Food Trucks & Container Cafés",
    description: "Mobile food service vehicles and container-based cafés.",
  },
  {
    slug: "food-court-setups",
    categorySlug: "food-beverage",
    name: "Food Court Setups",
    description: "Complete food court layouts and configurations.",
  },
  {
    slug: "commercial-kitchen",
    categorySlug: "food-beverage",
    name: "Commercial Kitchen Equipment",
    description: "Professional kitchen appliances and equipment.",
  },
  {
    slug: "beverage-equipment",
    categorySlug: "food-beverage",
    name: "Café & Beverage Equipment",
    description: "Coffee machines, beverage dispensers, and café equipment.",
  },

  // Movies, Content & OTT, Cinema, Events & Media
  {
    slug: "cinema-equipment",
    categorySlug: "movies-ott-cinema",
    name: "Cinema Equipment",
    description: "Cinema seating, projection systems, and screening technology.",
  },
  {
    slug: "stage-sound-led",
    categorySlug: "movies-ott-cinema",
    name: "Stage, Sound & LED Walls",
    description: "Professional audio systems and LED display technology.",
  },
  {
    slug: "event-production-equipment",
    categorySlug: "movies-ott-cinema",
    name: "Event Equipment",
    description: "Professional event production and audio-visual equipment.",
  },
  {
    slug: "studio-production-gear",
    categorySlug: "movies-ott-cinema",
    name: "Studio & Production Gear",
    description: "Cameras, lighting, and professional production equipment.",
  },
];

export const products: Product[] = [
  // Animatronic Dinosaurs
  { slug: "t-rex", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "T-Rex" },
  { slug: "triceratops", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Triceratops" },
  { slug: "velociraptor", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Velociraptor" },
  { slug: "siamosaurus", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Siamosaurus" },
  { slug: "plesiosaur", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Plesiosaur" },
  { slug: "pachycephalosaurus", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Pachycephalosaurus" },
  { slug: "pterosaur", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Pterosaur" },
  { slug: "gallimimus", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Gallimimus" },
  { slug: "psittacosaurus", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Psittacosaurus" },
  { slug: "maiasaura", subcategorySlug: "animatronic-dinosaurs", categorySlug: "amusement-dinosaur-parks", name: "Maiasaura" },

  // Amusement Rides
  { slug: "ferris-wheel-style", subcategorySlug: "amusement-rides", categorySlug: "amusement-dinosaur-parks", name: "Ferris Wheel Style", image: "/products/amusement-dinosaur-parks/amusement-rides/ferris-wheel-style.jpg" },
  { slug: "royal-carousel", subcategorySlug: "amusement-rides", categorySlug: "amusement-dinosaur-parks", name: "Royal Carousel", image: "/products/amusement-dinosaur-parks/amusement-rides/royal-carousel.jpg" },
  { slug: "swing-chair-carousel", subcategorySlug: "amusement-rides", categorySlug: "amusement-dinosaur-parks", name: "Swing Chair Carousel", image: "/products/amusement-dinosaur-parks/amusement-rides/swing-chair-carousel.jpg" },
  { slug: "train-thrill", subcategorySlug: "amusement-rides", categorySlug: "amusement-dinosaur-parks", name: "Train Thrill", image: "/products/amusement-dinosaur-parks/amusement-rides/train-thrill.jpg" },

  // Water Park Equipment
  { slug: "big-horn-water-slide", subcategorySlug: "water-park-equipment", categorySlug: "amusement-dinosaur-parks", name: "Big Horn Water Slide", image: "/products/amusement-dinosaur-parks/water-park-equipment/big-horn-water-slide.jpg" },
  { slug: "butterfly-water-spray", subcategorySlug: "water-park-equipment", categorySlug: "amusement-dinosaur-parks", name: "Butterfly Water Spray", image: "/products/amusement-dinosaur-parks/water-park-equipment/butterfly-water-spray.jpg" },
  { slug: "giant-bowl-slide", subcategorySlug: "water-park-equipment", categorySlug: "amusement-dinosaur-parks", name: "Giant Bowl Slide", image: "/products/amusement-dinosaur-parks/water-park-equipment/giant-bowl-slide.jpg" },
  { slug: "water-sprayer", subcategorySlug: "water-park-equipment", categorySlug: "amusement-dinosaur-parks", name: "Water Sprayer", image: "/products/amusement-dinosaur-parks/water-park-equipment/water-sprayer.jpg" },

  // Indoor Playground & Soft Play
  { slug: "indoor-climbing-wall", subcategorySlug: "indoor-playground-soft-play", categorySlug: "amusement-dinosaur-parks", name: "Indoor Climbing Wall (FECs)", image: "/products/amusement-dinosaur-parks/indoor-playground-soft-play/indoor-climbing-wall.jpg" },
  { slug: "indoor-rope-adventure-course", subcategorySlug: "indoor-playground-soft-play", categorySlug: "amusement-dinosaur-parks", name: "Indoor Rope Adventure Course", image: "/products/amusement-dinosaur-parks/indoor-playground-soft-play/indoor-rope-adventure-course.jpg" },
  { slug: "jungle-themed-indoor-playground", subcategorySlug: "indoor-playground-soft-play", categorySlug: "amusement-dinosaur-parks", name: "Jungle-Themed Commercial Indoor Playground", image: "/products/amusement-dinosaur-parks/indoor-playground-soft-play/jungle-themed-indoor-playground.jpg" },
  { slug: "soft-play-maze", subcategorySlug: "indoor-playground-soft-play", categorySlug: "amusement-dinosaur-parks", name: "Naughty Fort & Soft Play Maze", image: "/products/amusement-dinosaur-parks/indoor-playground-soft-play/soft-play-maze.jpg" },
  { slug: "kids-play-zone-system", subcategorySlug: "indoor-playground-soft-play", categorySlug: "amusement-dinosaur-parks", name: "Kids Play Zone System", image: "/products/amusement-dinosaur-parks/indoor-playground-soft-play/kids-play-zone-system.jpg" },
  { slug: "modular-soft-play-climbing-structure", subcategorySlug: "indoor-playground-soft-play", categorySlug: "amusement-dinosaur-parks", name: "Modular Soft Play & Climbing Structure", image: "/products/amusement-dinosaur-parks/indoor-playground-soft-play/modular-soft-play-climbing-structure.jpg" },

  // Stage, Sound & LED Walls
  { slug: "interactive-led-pixel-wall", subcategorySlug: "stage-sound-led", categorySlug: "movies-ott-cinema", name: "Interactive LED Pixel Wall", image: "/products/movies-ott-cinema/stage-sound-led/interactive-led-pixel-wall.jpg" },
  { slug: "interactive-pixel-wall", subcategorySlug: "stage-sound-led", categorySlug: "movies-ott-cinema", name: "Interactive Pixel Wall", image: "/products/movies-ott-cinema/stage-sound-led/interactive-pixel-wall.jpg" },
  { slug: "led-pixel-wall", subcategorySlug: "stage-sound-led", categorySlug: "movies-ott-cinema", name: "LED Pixel Wall", image: "/products/movies-ott-cinema/stage-sound-led/led-pixel-wall.jpg" },

  // Decorative & Landscape Lighting
  { slug: "led-aurasphere-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Aurasphere Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-aurasphere-decorative.jpg" },
  { slug: "led-butterfly-decorative-light", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Butterfly Decorative Light", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-butterfly-decorative-light.jpg" },
  { slug: "led-butterfly-decorative-2", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Butterfly Decorative (Design 2)", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-butterfly-decorative-2.jpg" },
  { slug: "led-cactus-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Cactus Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-cactus-decorative.jpg" },
  { slug: "led-dragonfly-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Dragonfly Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-dragonfly-decorative.jpg" },
  { slug: "led-egg-accent-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Egg Accent Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-egg-accent-decorative.jpg" },
  { slug: "led-firefly-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Firefly Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-firefly-decorative.jpg" },
  { slug: "led-frog-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Frog Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-frog-decorative.jpg" },
  { slug: "led-golden-butterfly-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Golden Butterfly Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-golden-butterfly-decorative.jpg" },
  { slug: "led-grasshopper-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Grasshopper Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-grasshopper-decorative.jpg" },
  { slug: "led-honeybee-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Honeybee Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-honeybee-decorative.jpg" },
  { slug: "led-ladybug-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Ladybug Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-ladybug-decorative.jpg" },
  { slug: "led-nightstand-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Nightstand Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-nightstand-decorative.jpg" },
  { slug: "led-parrot-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Parrot Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-parrot-decorative.jpg" },
  { slug: "led-wolf-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Wolf Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-wolf-decorative.jpg" },
  { slug: "led-zenith-gradient-decorative", subcategorySlug: "decorative-landscape-lighting", categorySlug: "lighting-festival-party", name: "LED Zenith Gradient Decorative", image: "/products/lighting-festival-party/decorative-landscape-lighting/led-zenith-gradient-decorative.jpg" },

  // Sports Goods & Equipment
  { slug: "funny-carnival-kids", subcategorySlug: "sports-goods", categorySlug: "sports-tents-outdoor", name: "Funny Carnival Kids", image: "/products/sports-tents-outdoor/sports-goods/funny-carnival-kids.jpg" },
  { slug: "mech-shooter", subcategorySlug: "sports-goods", categorySlug: "sports-tents-outdoor", name: "Mech Shooter", image: "/products/sports-tents-outdoor/sports-goods/mech-shooter.jpg" },
  { slug: "star-origin-hockey", subcategorySlug: "sports-goods", categorySlug: "sports-tents-outdoor", name: "Star Origin Hockey", image: "/products/sports-tents-outdoor/sports-goods/star-origin-hockey.jpg" },
  { slug: "wild-island", subcategorySlug: "sports-goods", categorySlug: "sports-tents-outdoor", name: "Wild Island", image: "/products/sports-tents-outdoor/sports-goods/wild-island.jpg" },

  // Outdoor Fitness & Gym Equipment
  { slug: "outdoor-cross-trainer", subcategorySlug: "outdoor-fitness", categorySlug: "sports-tents-outdoor", name: "Outdoor Cross Trainer", image: "/products/sports-tents-outdoor/outdoor-fitness/outdoor-cross-trainer.jpg" },
];

export function getProductCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getSubcategoriesForCategory(categorySlug: string) {
  return productSubcategories.filter((sub) => sub.categorySlug === categorySlug);
}

export function getSubcategory(categorySlug: string, subcategorySlug: string) {
  return productSubcategories.find(
    (sub) => sub.categorySlug === categorySlug && sub.slug === subcategorySlug,
  );
}

export function getProductsForSubcategory(categorySlug: string, subcategorySlug: string) {
  return products.filter(
    (product) =>
      product.categorySlug === categorySlug &&
      product.subcategorySlug === subcategorySlug,
  );
}

export function getProduct(categorySlug: string, subcategorySlug: string, productSlug: string) {
  return products.find(
    (product) =>
      product.categorySlug === categorySlug &&
      product.subcategorySlug === subcategorySlug &&
      product.slug === productSlug,
  );
}
