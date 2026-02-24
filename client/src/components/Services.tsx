import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Check } from 'lucide-react';
// Importaciones de iconos de lucide-react originales
import {
  Brain, Palette, BookOpen, ShoppingCart, GitBranch,
  Megaphone, FileText, Zap, Shield, Code,
  Video, Cpu, BarChart3
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Iconos estilo Art-Line
const BriefcaseArtLine = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <line x1="2" y1="7" x2="22" y2="7"></line>
  </svg>
);

const GraduationCapArtLine = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const MonitorArtLine = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const SparklesArtLine = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path>
    <path d="M19 17v4"></path>
    <path d="M3 5h4"></path>
    <path d="M17 19h4"></path>
  </svg>
);

const services = [
  {
    id: 'mapas-mentales',
    title: 'Mapas Mentales',
    description:
      'Organiza tus ideas de forma visual y estructurada. Perfecto para brainstorming, planificación de proyectos y estudios académicos. Nuestro equipo crea mapas mentales profesionales que facilitan la comprensión y memorización de conceptos complejos.',
    features: [
      'Diseño visual profesional y atractivo',
      'Estructura jerárquica clara y organizada',
      'Fácil de entender y memorizar',
    ],
    icon: <Brain className="w-7 h-7" />,
    image: '/mapamental.jpg',
    imageLeft: false,
    category: 'Académico',
  },
  {
    id: 'diseno-grafico',
    title: 'Diseño Gráfico',
    description:
      'Creaciones visuales profesionales y personalizadas para tu marca. Desde logos hasta banners, flyers y material de marketing. Nos especializamos en diseños modernos que captan la atención y comunican tu mensaje de forma efectiva.',
    features: [
      'Diseños únicos y personalizados',
      'Múltiples formatos y resoluciones',
      'Branding profesional y consistente',
    ],
    icon: <Palette className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    imageLeft: true,
    category: 'Profesional',
  },
  {
    id: 'informes-universitarios',
    title: 'Informes Universitarios',
    description:
      'Trabajos académicos de calidad superior con normas APA, IEEE y más. Redactamos, estructuramos y formateamos informes, tesis y proyectos con rigor académico y presentación impecable.',
    features: [
      'Normas APA, IEEE y estilos académicos',
      'Redacción clara y estructurada',
      'Entrega puntual y revisiones incluidas',
    ],
    icon: <BookOpen className="w-7 h-7" />,
    image: '/informe.jpg',
    imageLeft: false,
    category: 'Académico',
  },
  {
    id: 'tiendas-online',
    title: 'Tiendas Online',
    description:
      'Plataformas de comercio electrónico funcionales y atractivas. Desarrollamos tiendas con carrito de compras, pasarela de pagos y gestión de inventario. Tu negocio disponible las 24 horas del día.',
    features: [
      'Integración con pasarelas de pago',
      'Panel de administración intuitivo',
      'Diseño optimizado para conversión',
    ],
    icon: <ShoppingCart className="w-7 h-7" />,
    image: '/tienda.jpg',
    imageLeft: true,
    category: 'Profesional',
  },
  {
    id: 'diagramas-flujo',
    title: 'Diagramas de Flujo',
    description:
      'Visualización clara de procesos y sistemas complejos. Creamos diagramas de flujo profesionales que facilitan la comprensión de procedimientos, algoritmos y flujos de trabajo en tu organización.',
    features: [
      'Símbolos estándar y profesionales',
      'Fácil de seguir y entender',
      'Editable y escalable',
    ],
    icon: <GitBranch className="w-7 h-7" />,
    image: '/diagrama.jpg',
    imageLeft: false,
    category: 'Académico',
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description:
      'Estrategias para potenciar tu presencia online y aumentar tus ventas. Desde redes sociales hasta campañas publicitarias y SEO. Te ayudamos a conectar con tu audiencia de forma efectiva.',
    features: [
      'Gestión de redes sociales',
      'Campañas publicitarias optimizadas',
      'Análisis y reportes de resultados',
    ],
    icon: <Megaphone className="w-7 h-7" />,
    image: '/marketing.png',
    imageLeft: true,
    category: 'Profesional',
  },
  {
    id: 'powerpoint-canva',
    title: 'PowerPoint / Canva',
    description:
      'Presentaciones impactantes y profesionales que capturan la atención de tu audiencia. Diseñamos diapositivas creativas con infografías, animaciones y narrativa visual que comunica con claridad.',
    features: [
      'Diseño personalizado y creativo',
      'Infografías y gráficos incluidos',
      'Formato editable entregado',
    ],
    icon: <FileText className="w-7 h-7" />,
    image: '/powerpoint.png',
    imageLeft: false,
    category: 'Académico',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    description:
      'Dale una segunda vida a tu computadora con un servicio técnico que prioriza la potencia y la estabilidad. En TecniCore no solo aceleramos tu hardware, sino que blindamos tu privacidad ante cualquier riesgo digital.',
    features: [
      'Actualización de software',
      'Optimización del sistema',
      'Limpieza profunda',
    ],
    icon: <Shield className="w-7 h-7" />,
    image: '/mantenimiento.png',
    imageLeft: true,
    category: 'Digital',
  },
  {
    id: 'paginas-web',
    title: 'Páginas Web',
    description:
      'Sitios web modernos, rápidos y optimizados para buscadores. Desarrollamos desde landing pages hasta portales completos, responsive y con diseño atractivo que refleja la identidad de tu marca.',
    features: [
      'Diseño responsive y moderno',
      'Optimización SEO incluida',
      'Carga rápida y segura (HTTPS)',
    ],
    icon: <Code className="w-7 h-7" />,
    image: '/paginasweb.png',
    imageLeft: false,
    category: 'Digital',
  },
  {
    id: 'desarrollo-ia-original',
    title: 'Desarrollo con IA',
    description:
      'Soluciones inteligentes y automatizadas con las últimas tecnologías de inteligencia artificial. Integramos IA en tus procesos para aumentar la productividad, reducir costos y ofrecer experiencias personalizadas.',
    features: [
      'Automatización de procesos',
      'Chatbots y asistentes virtuales',
      'Análisis predictivo de datos',
    ],
    icon: <Zap className="w-7 h-7" />,
    image: '/ia.png',
    imageLeft: true,
    category: 'Desarrollo con IA',
  },
  {
    id: 'contenido-audiovisual-ia',
    title: 'Generación y Edición de Contenido Audiovisual Hiperrealista',
    description:
      'Creación, edición y mejora de contenido multimedia (imágenes, video, audio) utilizando IA generativa para producir material de alta calidad de forma rápida y económica.',
    features: [
      'Clonación de voz con sincronización labial',
      'Edición de video por comandos de texto',
      'Upscaling y restauración de archivos antiguos',
    ],
    icon: <Video className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    imageLeft: false,
    category: 'Desarrollo con IA',
  },
  {
    id: 'automatizacion-procesos-ia',
    title: 'Automatización de Procesos con IA (Hyperautomation)',
    description:
      'Creación de "agentes" o "robots" que realizan tareas repetitivas de back-office empresarial: procesamiento de facturas, organización de datos y redacción de informes.',
    features: [
      'Extracción y clasificación inteligente de datos',
      'Agente de gestión de correo electrónico',
      'Generación automática de reportes',
    ],
    icon: <Cpu className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1518433278981-162f13bc7335?w=800&h=500&fit=crop',
    imageLeft: true,
    category: 'Desarrollo con IA',
  },
  {
    id: 'analisis-predictivo-ia',
    title: 'Análisis Predictivo y Simulación de Negocios',
    description:
      'Consultoría de alto valor que utiliza Machine Learning para analizar datos históricos, predecir tendencias futuras y simular escenarios estratégicos.',
    features: [
      'Predicción de abandono de clientes',
      'Optimización de precios dinámicos',
      'Gemelo digital de cadena de suministro',
    ],
    icon: <BarChart3 className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?w=800&h=500&fit=crop',
    imageLeft: false,
    category: 'Desarrollo con IA',
  },
];

const categories = [
  {
    name: 'Profesional',
    icon: <BriefcaseArtLine className="w-10 h-10" />,
  },
  {
    name: 'Académico',
    icon: <GraduationCapArtLine className="w-10 h-10" />,
  },
  {
    name: 'Digital',
    icon: <MonitorArtLine className="w-10 h-10" />,
  },
  {
    name: 'Desarrollo con IA',
    icon: <SparklesArtLine className="w-10 h-10" />,
  },
];

function ServiceSection({ service }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const el = sectionRef.current;
    if (!el) return;

    const image = el.querySelector('.service-image');
    const content = el.querySelector('.service-text');

    gsap.fromTo(
      [image, content],
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
      }
    );
  }, { scope: sectionRef });

  const waLink = `https://wa.me/573136431944?text=Hola%20TECNICORE%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`;

  return (
    <section
      ref={sectionRef}
      className="relative bg-background flex items-center py-16 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 flex flex-col ${
          service.imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-10 lg:gap-20`}
      >
        {/* Image */}
        <div className="service-image w-full lg:flex-1 rounded-2xl overflow-hidden shadow-2xl aspect-video">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Text */}
        <div className="service-text w-full lg:flex-1 min-w-0">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary text-primary-foreground flex items-center justify-center mb-5">
            {service.icon}
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-muted text-sm lg:text-base leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <p className="text-foreground font-bold text-sm mb-3">
              Características principales:
            </p>
            <ul className="flex flex-col gap-2">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-muted text-sm">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary-foreground font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 text-sm px-6 py-3"
          >
            <MessageCircle className="w-4 h-4" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const filteredServices = selectedCategory
    ? services.filter((service) => service.category === selectedCategory)
    : [];

  return (
    <div className="bg-background">
      {/* Header — animado con GSAP, NO sticky */}
      <div ref={headerRef} className="text-center pt-20 pb-8 px-4">
        <h2 className="font-bold text-foreground text-3xl lg:text-4xl">
          Nuestros{' '}
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Servicios
          </span>
        </h2>
        <p className="text-muted mt-2 text-sm lg:text-base">
          Soluciones especializadas en trabajos profesionales, académicos y digitales
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 py-8 px-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 min-w-[120px]
              ${selectedCategory === category.name
                ? 'bg-accent text-primary-foreground shadow-lg'
                : 'bg-card text-muted-foreground hover:bg-card-hover'}
            `}
          >
            <div className="mb-2">
              {category.icon}
            </div>
            <span className="text-xs lg:text-sm font-medium text-center">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Filtered Services */}
      <div className="services-container">
        {filteredServices.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
