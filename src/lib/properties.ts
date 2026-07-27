export type PropertyStatus = "venta" | "renta";

export type PropertyCategory =
  | "bodega-galpon"
  | "terreno-lote"
  | "oficina"
  | "local-comercial"
  | "edificio";

export interface Property {
  slug: string;
  title: string;
  status: PropertyStatus;
  category: PropertyCategory;
  categoryLabel: { es: string; en: string };
  city: string;
  area: number;
  price: number;
  priceUnit: { es: string; en: string } | null;
  featured: boolean;
  summary: { es: string; en: string };
  description: { es: string[]; en: string[] };
  highlights: { es: string[]; en: string[] };
}

export const properties: Property[] = [
  {
    slug: "parque-industrial-pifo-i3-alto-impacto-3769-m2",
    title: "Parque Industrial Pifo I3 Alto Impacto",
    status: "venta",
    category: "terreno-lote",
    categoryLabel: { es: "Terreno / Lote", en: "Land / Lot" },
    city: "Pifo, Quito",
    area: 3769,
    price: 640000,
    priceUnit: null,
    featured: true,
    summary: {
      es: "El parque industrial más moderno de la ciudad, zonificado para uso industrial de alto impacto.",
      en: "The most modern industrial park in the city, zoned for high-impact industrial use.",
    },
    description: {
      es: [
        "Lote de 3.769 m2 dentro de un parque industrial de alto impacto en Pifo, con acceso directo a vías principales y cercanía al Aeropuerto Internacional Mariscal Sucre.",
        "Zonificación apta para bodegas, plantas de producción y centros de distribución de gran escala.",
      ],
      en: [
        "3,769 m2 lot inside a high-impact industrial park in Pifo, with direct access to main roads and proximity to Mariscal Sucre International Airport.",
        "Zoning suitable for warehouses, production plants and large-scale distribution centers.",
      ],
    },
    highlights: {
      es: ["Uso industrial alto impacto", "Cercano al aeropuerto", "Vías de acceso pavimentadas", "Servicios básicos completos"],
      en: ["High-impact industrial use", "Close to the airport", "Paved access roads", "Full basic utilities"],
    },
  },
  {
    slug: "zona-industrial-calacali-lote-952-m2",
    title: "Zona Industrial Calacalí — Lote 952 m2 Alto Impacto",
    status: "venta",
    category: "terreno-lote",
    categoryLabel: { es: "Terreno / Lote", en: "Land / Lot" },
    city: "Calacalí, Quito",
    area: 952,
    price: 139000,
    priceUnit: null,
    featured: true,
    summary: {
      es: "En la salida sur de Calacalí, lote de alto impacto ideal para operación industrial mediana.",
      en: "At the south exit of Calacalí, a high-impact lot ideal for mid-size industrial operations.",
    },
    description: {
      es: [
        "Lote de 952 m2 en zona industrial consolidada, con topografía regular y fácil acceso vehicular pesado.",
      ],
      en: [
        "952 m2 lot in a consolidated industrial zone, with regular topography and easy heavy-vehicle access.",
      ],
    },
    highlights: {
      es: ["Topografía regular", "Acceso vehicular pesado", "Zona industrial consolidada"],
      en: ["Regular topography", "Heavy vehicle access", "Consolidated industrial zone"],
    },
  },
  {
    slug: "zona-industrial-calacali-lote-1090-m2",
    title: "Zona Industrial Calacalí — Lote 1090 m2 Alto Impacto",
    status: "venta",
    category: "terreno-lote",
    categoryLabel: { es: "Terreno / Lote", en: "Land / Lot" },
    city: "Calacalí, Quito",
    area: 1090,
    price: 158450,
    priceUnit: null,
    featured: true,
    summary: {
      es: "Lote contiguo en la misma zona industrial, con las mismas ventajas de conectividad y zonificación.",
      en: "Adjacent lot in the same industrial zone, with the same connectivity and zoning advantages.",
    },
    description: {
      es: ["Lote de 1.090 m2 en la salida sur de Calacalí, zonificación de alto impacto industrial."],
      en: ["1,090 m2 lot at the south exit of Calacalí, high-impact industrial zoning."],
    },
    highlights: {
      es: ["Zonificación alto impacto", "Ideal para bodega o planta", "Vías pavimentadas"],
      en: ["High-impact zoning", "Ideal for warehouse or plant", "Paved roads"],
    },
  },
  {
    slug: "zona-logistica-tababela-renta-130-m2",
    title: "Zona Logística Tababela — Renta Oficinas/Bodegas 130 m2",
    status: "renta",
    category: "bodega-galpon",
    categoryLabel: { es: "Bodega - Galpón", en: "Warehouse" },
    city: "Tababela, Quito",
    area: 130,
    price: 1560,
    priceUnit: { es: "/ mensual", en: "/ month" },
    featured: true,
    summary: {
      es: "Complejo industrial, comercial y logístico junto al Aeropuerto Internacional Mariscal Sucre.",
      en: "Industrial, commercial and logistics complex next to Mariscal Sucre International Airport.",
    },
    description: {
      es: [
        "Módulo de 130 m2 con oficinas y bodega en complejo logístico de mediano impacto, ideal para operaciones de última milla y almacenamiento cercano al aeropuerto.",
      ],
      en: [
        "130 m2 module with offices and warehouse in a mid-impact logistics complex, ideal for last-mile operations and storage near the airport.",
      ],
    },
    highlights: {
      es: ["A minutos del aeropuerto", "Oficina + bodega", "Seguridad 24/7"],
      en: ["Minutes from the airport", "Office + warehouse", "24/7 security"],
    },
  },
  {
    slug: "zona-logistica-tababela-venta-538-m2",
    title: "Zona Logística Tababela — Venta Bodegas 538 m2",
    status: "venta",
    category: "bodega-galpon",
    categoryLabel: { es: "Bodega - Galpón", en: "Warehouse" },
    city: "Tababela, Quito",
    area: 538,
    price: 591000,
    priceUnit: null,
    featured: true,
    summary: {
      es: "Complejo industrial, comercial y logístico de mediano impacto junto al aeropuerto.",
      en: "Mid-impact industrial, commercial and logistics complex next to the airport.",
    },
    description: {
      es: ["Bodega de 538 m2 en complejo logístico consolidado, con oficinas integradas y patio de maniobras."],
      en: ["538 m2 warehouse in a consolidated logistics complex, with integrated offices and maneuvering yard."],
    },
    highlights: {
      es: ["Patio de maniobras", "Oficinas integradas", "Cercanía al aeropuerto"],
      en: ["Maneuvering yard", "Integrated offices", "Close to the airport"],
    },
  },
  {
    slug: "zona-logistica-tababela-venta-130-m2",
    title: "Zona Logística Tababela — Venta Oficinas/Bodegas 130 m2",
    status: "venta",
    category: "bodega-galpon",
    categoryLabel: { es: "Bodega - Galpón", en: "Warehouse" },
    city: "Tababela, Quito",
    area: 130,
    price: 208000,
    priceUnit: null,
    featured: false,
    summary: {
      es: "Módulo de mediano impacto en complejo logístico junto al Aeropuerto Internacional Mariscal Sucre.",
      en: "Mid-impact module in a logistics complex next to Mariscal Sucre International Airport.",
    },
    description: {
      es: ["Módulo de 130 m2 con oficina y bodega, en propiedad, dentro de complejo logístico consolidado."],
      en: ["130 m2 module with office and warehouse, freehold, inside a consolidated logistics complex."],
    },
    highlights: {
      es: ["En propiedad", "Oficina + bodega", "Complejo consolidado"],
      en: ["Freehold", "Office + warehouse", "Consolidated complex"],
    },
  },
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export const categoryFilters: { value: PropertyCategory | "todos"; es: string; en: string }[] = [
  { value: "todos", es: "Todos", en: "All" },
  { value: "bodega-galpon", es: "Bodega - Galpón", en: "Warehouse" },
  { value: "terreno-lote", es: "Terreno / Lote", en: "Land / Lot" },
  { value: "oficina", es: "Oficina", en: "Office" },
  { value: "local-comercial", es: "Local Comercial", en: "Commercial Unit" },
  { value: "edificio", es: "Edificio", en: "Building" },
];

export const statusFilters: { value: PropertyStatus | "todos"; es: string; en: string }[] = [
  { value: "todos", es: "Todos", en: "All" },
  { value: "venta", es: "Venta", en: "For Sale" },
  { value: "renta", es: "Renta", en: "For Rent" },
];
