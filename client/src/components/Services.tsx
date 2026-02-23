import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Check } from 'lucide-react';
import {
  Brain, Palette, BookOpen, ShoppingCart, GitBranch,
  Megaphone, FileText, Zap, Shield, Code,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
    image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=800&h=500&fit=crop',
    imageLeft: false,
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
  },
  {
    id: 'desarrollo-ia',
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
      className="relative bg-background min-h-screen flex items-center py-16 overflow-hidden"
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

      {/* One full-screen section per service */}
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </div>
  );
}
