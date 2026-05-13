import type { NavItem, Project, Service } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Work",     href: "#work"     },
  { label: "About",   href: "#about"    },
  { label: "Services",href: "#services" },
  { label: "Contact", href: "#contact"  },
];

export const PROJECTS: Project[] = [
  {
    id:          1,
    title:       "Lumière Residence",
    category:    "Residential",
    year:        "2024",
    location:    "Paris, France",
    description: "A light-filled private home that dissolves the boundary between interior warmth and the surrounding garden. Raw concrete meets aged oak and hand-thrown ceramics in a sequence of layered spaces.",
    tags:        ["Residential", "Interior", "Landscape"],
    color:       "#F5EDE3",
    accent:      "#C4916A",
  },
  {
    id:          2,
    title:       "Atelier Soie",
    category:    "Commercial",
    year:        "2023",
    location:    "Milan, Italy",
    description: "A fashion design studio conceived as a living room for creativity — woven screens, south-facing skylights, and a roof terrace that frames the city like a canvas.",
    tags:        ["Commercial", "Studio", "Mixed-use"],
    color:       "#EAE4DC",
    accent:      "#8B7355",
  },
  {
    id:          3,
    title:       "The Calm Pavilion",
    category:    "Cultural",
    year:        "2023",
    location:    "Kyoto, Japan",
    description: "A meditation pavilion built around an existing cedar tree. The structure breathes with the seasons — translucent panels shift from gold to pale green as the light moves through the day.",
    tags:        ["Cultural", "Public", "Pavilion"],
    color:       "#E8EDE5",
    accent:      "#6B8C6B",
  },
  {
    id:          4,
    title:       "Casa Branco",
    category:    "Residential",
    year:        "2022",
    location:    "Lisbon, Portugal",
    description: "A layered family home on a hillside — each level steps down to embrace the view of the Tagus. Whitewashed walls, terracotta floors, and a courtyard that captures the afternoon sun.",
    tags:        ["Residential", "Renovation", "Heritage"],
    color:       "#EDE8E1",
    accent:      "#B07D5A",
  },
  {
    id:          5,
    title:       "Velvet Spa",
    category:    "Hospitality",
    year:        "2022",
    location:    "Marrakech, Morocco",
    description: "A boutique wellness retreat carved from rammed earth. Arched corridors, mineral pools, and hand-painted zellige tiles create a sanctuary that feels both ancient and entirely present.",
    tags:        ["Hospitality", "Wellness", "Interior"],
    color:       "#F0E8E0",
    accent:      "#C27D5C",
  },
  {
    id:          6,
    title:       "Birch Library",
    category:    "Cultural",
    year:        "2021",
    location:    "Stockholm, Sweden",
    description: "A community library wrapped in birch cladding that echoes the surrounding forest. Reading alcoves are embedded into the building's skin — private pockets of stillness within a civic space.",
    tags:        ["Cultural", "Public", "Community"],
    color:       "#E5EAE8",
    accent:      "#7A9B8A",
  },
];

export const SERVICES: Service[] = [
  {
    title:       "Architectural Design",
    description: "From concept to completion — spatial planning, structural coordination, and design development for residential, commercial, and cultural projects.",
    icon:        "✦",
  },
  {
    title:       "Interior Architecture",
    description: "Material palettes, lighting design, custom furniture, and the invisible choreography that makes a space feel intentional and alive.",
    icon:        "◈",
  },
  {
    title:       "Renovation & Heritage",
    description: "Careful dialogue with existing structures — preserving the soul of a building while adapting it to contemporary life.",
    icon:        "◇",
  },
  {
    title:       "Landscape Integration",
    description: "Architecture that converses with its ground — gardens, terraces, and planted roofscapes that extend the building into the land.",
    icon:        "○",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Cultural",
  "Hospitality",
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];
