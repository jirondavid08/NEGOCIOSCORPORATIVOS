export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

const dictionaries = {
  es: {
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      propiedades: "Propiedades",
      nosotros: "Nosotros",
      galeria: "Galería",
      contacto: "Contacto",
      parques: "Parques Industriales",
      ingresar: "Ingresar",
      registrarse: "Registrarse",
    },
    common: {
      verMas: "Ver más",
      contactanos: "Contáctanos",
      agendarReunion: "Agendar reunión",
      whatsapp: "WhatsApp",
      llamar: "Llamar",
      verPropiedad: "Ver ficha",
      propiedadesDestacadas: "Propiedades destacadas",
      verTodas: "Ver todas las propiedades",
      filtrarPor: "Filtrar por",
      categoria: "Categoría",
      estado: "Estado",
      todos: "Todos",
      m2: "m²",
      consultarPrecio: "Precio a consultar",
      volver: "Volver al catálogo",
      caracteristicas: "Características",
      ubicacion: "Ubicación",
      solicitarInfo: "Solicitar información",
      lenguaje: "Idioma",
      moneda: "Moneda",
      proximamente: "Próximamente",
    },
    home: {
      heroEyebrow: "Bienes Raíces Comerciales · Industriales · Logísticos",
      heroTitle: "El lugar para los grandes",
      heroSubtitle:
        "Las mejores empresas de Ecuador crecen y se conectan a nivel local e internacional. Convertimos activos en oportunidades de rentabilidad sostenible.",
      ctaPropiedades: "Ver propiedades",
      ctaContacto: "Hablar con un asesor",
      parquesBanner: "Conoce Parques Industriales & Logísticos Ecuador",
      quienesTitle: "Quiénes somos",
      quienesText:
        "Brindamos un servicio integral y profesional, asegurando que cada cliente encuentre la mejor opción para optimizar sus inversiones y garantizar el crecimiento de su empresa.",
      visionTitle: "Visión",
      visionText:
        "Ser la empresa líder en Ecuador en la provisión de servicios inmobiliarios corporativos, reconocida por nuestra experiencia en el mercado, capacidad para asesorar en inversiones eficientes, y por ser el socio estratégico preferido de empresas que buscan optimizar su infraestructura y activos.",
      misionTitle: "Misión",
      misionText:
        "Ofrecer soluciones integrales y estratégicas en bienes raíces comerciales, combinando un profundo conocimiento del mercado con un enfoque en inversiones eficientes, para maximizar el valor de los activos de nuestros clientes y facilitar su crecimiento sostenible.",
      serviciosTitle: "Nuestros servicios",
      serviciosText:
        "Transformamos tu visión en resultados a través de soluciones inmobiliarias personalizadas y una gestión estratégica de activos, con alianzas de primer nivel que garantizan eficiencia y crecimiento sostenible.",
      testimoniosTitle: "¿Qué opinan nuestros clientes?",
      testimoniosText:
        "Elegir Negocios Corporativos significa optar por especialistas que combinan ubicación estratégica, infraestructura de calidad y un enfoque personalizado.",
      ctaFinalTitle: "¿Quieres vender o poner en renta un bien inmueble?",
      ctaFinalText:
        "Impulsamos inversiones inteligentes, maximizando valor y crecimiento sostenible empresarial.",
    },
    servicios: {
      title: "Servicios Inmobiliarios",
      subtitle:
        "Soluciones integrales para empresas, industrias, promotores e inversionistas en todo Ecuador.",
      items: [
        {
          title: "Empresas",
          text: "Soluciones personalizadas para cumplir con los objetivos de negocio de nuestros clientes corporativos, asegurando comodidad y eficiencia.",
          list: [
            "Búsqueda para compra o arrendamiento de espacios comerciales",
            "Estudios de mercado específicos",
            "Comercialización de inventario de propiedades en venta o renta",
            "Soluciones residenciales para ejecutivos de estadía temporal o permanente",
            "Soporte legal en documentos de venta y/o contratos de arrendamiento",
            "Mantenimiento y adecuación de inmuebles",
          ],
        },
        {
          title: "Industrias",
          text: "Asesoría integral para la selección de zonas industriales y la optimización de operaciones, desde la preselección de propiedades hasta la construcción y fiscalización de proyectos.",
          list: [
            "Asesoría en selección de zonas industriales",
            "Preselección de propiedades adecuadas",
            "Alternativas de financiamiento industrial",
            "Diseño y construcción de bodegas, oficinas y naves industriales",
            "Planos aprobados por el ente regulador",
            "Mantenimiento mecánico y de infraestructura",
          ],
        },
        {
          title: "Logística",
          text: "Planificación y gestión de inmuebles dedicados a actividades logísticas, optimizando ubicación y operaciones para mejorar la cadena de suministro de las empresas.",
          list: [
            "Adquisición y desarrollo de propiedades logísticas",
            "Ubicación estratégica de inmuebles",
            "Diseño y construcción de instalaciones logísticas",
            "Asesoría en reubicación de operaciones",
            "Mantenimiento y adaptación de espacios",
          ],
        },
        {
          title: "Inversión",
          text: "Manejo de portafolios inmobiliarios y acompañamiento estratégico para maximizar el retorno de tus activos.",
          list: [
            "Manejo de portafolios inmobiliarios",
            "Opciones de inversión",
            "Venta de propiedades",
            "Búsqueda de opciones de crédito",
          ],
        },
        {
          title: "Promotores y Constructores",
          text: "Aliado estratégico en la identificación de oportunidades de inversión y el acceso a financiamiento para desarrollos inmobiliarios.",
          list: [
            "Estudios de mercado",
            "Asesoría en financiamiento",
            "Comercialización de proyectos inmobiliarios",
            "Gestión de trámites municipales y regularización urbana",
          ],
        },
        {
          title: "Residencial",
          text: "Gama selecta de servicios residenciales en viviendas por estrenar o de segundo uso, para complementar tu portafolio inmobiliario.",
          list: [
            "Asesoría en compra y venta de propiedades",
            "Búsqueda de inmuebles para alquiler",
            "Gestión legal y contractual",
            "Mantenimiento y adecuación de propiedades",
          ],
        },
      ],
    },
    nosotros: {
      title: "Nosotros",
      subtitle: "Casi una década conectando empresas con los mejores activos industriales y comerciales de Ecuador.",
      liderazgoTitle: "Liderazgo",
      liderazgoText:
        "Paulina Salazar lidera Negocios Corporativos con una trayectoria enfocada en bienes raíces comerciales e industriales, acompañando a empresas nacionales y multinacionales en decisiones de inversión de alto impacto.",
    },
    contacto: {
      title: "Comunícate con nosotros",
      subtitle: "Somos un HUB de soluciones en espacios industriales, comerciales y logísticos.",
      formTitle: "¿Quieres vender o poner en renta un bien inmueble?",
      nombre: "Nombre",
      correo: "Correo electrónico",
      telefono: "Teléfono",
      mensaje: "Mensaje",
      enviar: "Enviar",
      enviando: "Enviando...",
      exito: "¡Gracias! Te contactaremos muy pronto.",
      error: "No pudimos enviar tu mensaje. Escríbenos por WhatsApp mientras lo resolvemos.",
      asesorTitle: "Un asesor te brindará toda la información",
    },
    galeria: {
      title: "Galería",
      subtitle: "Un vistazo a los espacios y proyectos que hemos acompañado.",
    },
    footer: {
      tagline: "Impulsamos inversiones inteligentes, maximizando valor y crecimiento sostenible empresarial.",
      mapaSitio: "Mapa de sitio",
      contactanos: "Contáctanos",
      derechos: "Todos los derechos reservados.",
    },
    login: {
      ingresarTitle: "Ingresar",
      registrarseTitle: "Registrarse",
      usuario: "Usuario o correo electrónico",
      contrasena: "Contraseña",
      recordarme: "Recordarme",
      olvidaste: "¿Olvidaste tu contraseña?",
      ingresar: "Ingresar",
      registrarse: "Crear cuenta",
      nota: "Estamos activando el acceso de usuarios registrados. Mientras tanto, escríbenos y un asesor te atiende directamente.",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      servicios: "Services",
      propiedades: "Properties",
      nosotros: "About",
      galeria: "Gallery",
      contacto: "Contact",
      parques: "Industrial Parks",
      ingresar: "Log in",
      registrarse: "Sign up",
    },
    common: {
      verMas: "Learn more",
      contactanos: "Contact us",
      agendarReunion: "Schedule a meeting",
      whatsapp: "WhatsApp",
      llamar: "Call",
      verPropiedad: "View listing",
      propiedadesDestacadas: "Featured properties",
      verTodas: "View all properties",
      filtrarPor: "Filter by",
      categoria: "Category",
      estado: "Status",
      todos: "All",
      m2: "m²",
      consultarPrecio: "Price on request",
      volver: "Back to catalog",
      caracteristicas: "Highlights",
      ubicacion: "Location",
      solicitarInfo: "Request information",
      lenguaje: "Language",
      moneda: "Currency",
      proximamente: "Coming soon",
    },
    home: {
      heroEyebrow: "Commercial · Industrial · Logistics Real Estate",
      heroTitle: "The place for the great ones",
      heroSubtitle:
        "Ecuador's best companies grow and connect locally and internationally. We turn assets into sustainable, profitable opportunities.",
      ctaPropiedades: "View properties",
      ctaContacto: "Talk to an advisor",
      parquesBanner: "Discover Parques Industriales & Logísticos Ecuador",
      quienesTitle: "Who we are",
      quienesText:
        "We provide a comprehensive, professional service, making sure every client finds the best option to optimize their investments and secure their company's growth.",
      visionTitle: "Vision",
      visionText:
        "To be Ecuador's leading corporate real estate services company, recognized for our market expertise, our ability to advise on efficient investments, and as the preferred strategic partner for companies looking to optimize their infrastructure and assets.",
      misionTitle: "Mission",
      misionText:
        "To offer comprehensive, strategic solutions in commercial real estate, combining deep market knowledge with a focus on efficient investments, to maximize the value of our clients' assets and enable their sustainable growth.",
      serviciosTitle: "Our services",
      serviciosText:
        "We turn your vision into results through tailored real estate solutions and strategic asset management, backed by top-tier alliances that guarantee efficiency and sustainable growth.",
      testimoniosTitle: "What our clients say",
      testimoniosText:
        "Choosing Negocios Corporativos means choosing specialists who combine strategic location, quality infrastructure and a personalized approach.",
      ctaFinalTitle: "Want to sell or lease a property?",
      ctaFinalText: "We drive smart investments, maximizing value and sustainable business growth.",
    },
    servicios: {
      title: "Real Estate Services",
      subtitle: "Comprehensive solutions for companies, industries, developers and investors across Ecuador.",
      items: [
        {
          title: "Companies",
          text: "Tailored solutions to meet the business goals of our corporate clients, ensuring comfort and efficiency.",
          list: [
            "Search for purchase or lease of commercial spaces",
            "Specific market studies",
            "Marketing of property inventory for sale or lease",
            "Residential solutions for executives on temporary or permanent stay",
            "Legal support on sale documents and/or lease agreements",
            "Property maintenance and refurbishment",
          ],
        },
        {
          title: "Industries",
          text: "Comprehensive advisory for selecting industrial zones and optimizing operations, from property preselection to construction and inspection of projects.",
          list: [
            "Advisory on industrial zone selection",
            "Preselection of suitable properties",
            "Industrial financing alternatives",
            "Design and construction of warehouses, offices and industrial buildings",
            "Blueprints approved by the regulatory authority",
            "Mechanical and infrastructure maintenance",
          ],
        },
        {
          title: "Logistics",
          text: "Planning and management of properties dedicated to logistics activities, optimizing location and operations to improve companies' supply chains.",
          list: [
            "Acquisition and development of logistics properties",
            "Strategic property location",
            "Design and construction of logistics facilities",
            "Advisory on operations relocation",
            "Maintenance and adaptation of spaces",
          ],
        },
        {
          title: "Investment",
          text: "Real estate portfolio management and strategic support to maximize the return on your assets.",
          list: [
            "Real estate portfolio management",
            "Investment options",
            "Property sales",
            "Financing options search",
          ],
        },
        {
          title: "Developers & Builders",
          text: "A strategic partner in identifying investment opportunities and accessing financing for real estate developments.",
          list: [
            "Market studies",
            "Financing advisory",
            "Marketing of real estate projects",
            "Municipal permitting and urban regularization management",
          ],
        },
        {
          title: "Residential",
          text: "A select range of residential services for new or resale homes, to complement your real estate portfolio.",
          list: [
            "Advisory on buying and selling properties",
            "Search for rental properties",
            "Legal and contractual management",
            "Property maintenance and refurbishment",
          ],
        },
      ],
    },
    nosotros: {
      title: "About Us",
      subtitle: "Nearly a decade connecting companies with Ecuador's best industrial and commercial assets.",
      liderazgoTitle: "Leadership",
      liderazgoText:
        "Paulina Salazar leads Negocios Corporativos with a career focused on commercial and industrial real estate, guiding national and multinational companies through high-impact investment decisions.",
    },
    contacto: {
      title: "Get in touch",
      subtitle: "We are a hub of solutions for industrial, commercial and logistics spaces.",
      formTitle: "Want to sell or lease a property?",
      nombre: "Name",
      correo: "Email",
      telefono: "Phone",
      mensaje: "Message",
      enviar: "Send",
      enviando: "Sending...",
      exito: "Thank you! We'll be in touch soon.",
      error: "We couldn't send your message. Reach us on WhatsApp in the meantime.",
      asesorTitle: "An advisor will give you all the information",
    },
    galeria: {
      title: "Gallery",
      subtitle: "A look at the spaces and projects we've been part of.",
    },
    footer: {
      tagline: "We drive smart investments, maximizing value and sustainable business growth.",
      mapaSitio: "Site map",
      contactanos: "Contact us",
      derechos: "All rights reserved.",
    },
    login: {
      ingresarTitle: "Log in",
      registrarseTitle: "Sign up",
      usuario: "Username or email",
      contrasena: "Password",
      recordarme: "Remember me",
      olvidaste: "Forgot your password?",
      ingresar: "Log in",
      registrarse: "Create account",
      nota: "We're activating registered-user access. In the meantime, message us and an advisor will help you directly.",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = ReturnType<typeof getDictionary>;
