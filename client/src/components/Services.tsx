import { useState, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import {
  Brain, Palette, BookOpen, ShoppingCart, GitBranch,
  Megaphone, FileText, Zap, Shield, Code,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Services Component — TECNICORE
 * Diseño: Slider full-screen con layout dos columnas alternadas
 * Mobile/Tablet: imagen arriba, texto abajo (compacto)
 * Desktop: imagen + texto lado a lado, alternando, carousel compacto
 * Animaciones: GSAP + ScrollTrigger
 */

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  imageLeft: boolean;
}

const services: ServiceItem[] = [
  {
    id: 'mapas-mentales',
    title: 'Mapas Mentales',
    description: 'Organiza tus ideas de forma visual y estructurada. Perfecto para brainstorming, planificación de proyectos y estudios académicos. Nuestro equipo crea mapas mentales profesionales que facilitan la comprensión y memorización de conceptos complejos.',
    features: ['Diseño visual profesional y atractivo', 'Estructura jerárquica clara y organizada', 'Fácil de entender y memorizar'],
    icon: <Brain className="w-7 h-7" />,
    image: '/mapamental.jpg',
    imageLeft: false,
  },
  {
    id: 'diseno-grafico',
    title: 'Diseño Gráfico',
    description: 'Creaciones visuales profesionales y personalizadas para tu marca. Desde logos hasta banners, flyers y material de marketing. Nos especializamos en diseños modernos que captan la atención y comunican tu mensaje de forma efectiva.',
    features: ['Diseños únicos y personalizados', 'Múltiples formatos y resoluciones', 'Branding profesional y consistente'],
    icon: <Palette className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
    imageLeft: true,
  },
  {
    id: 'informes-universitarios',
    title: 'Informes Universitarios',
    description: 'Trabajos académicos de calidad superior con normas APA, IEEE y más. Redactamos, estructuramos y formateamos informes, tesis y proyectos con rigor académico y presentación impecable.',
    features: ['Normas APA, IEEE y estilos académicos', 'Redacción clara y estructurada', 'Entrega puntual y revisiones incluidas'],
    icon: <BookOpen className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1507842072343-583f20270319?w=800&h=500&fit=crop',
    imageLeft: false,
  },
  {
    id: 'tiendas-online',
    title: 'Tiendas Online',
    description: 'Plataformas de comercio electrónico funcionales y atractivas. Desarrollamos tiendas con carrito de compras, pasarela de pagos y gestión de inventario. Tu negocio disponible las 24 horas del día.',
    features: ['Integración con pasarelas de pago', 'Panel de administración intuitivo', 'Diseño optimizado para conversión'],
    icon: <ShoppingCart className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=500&fit=crop',
    imageLeft: true,
  },
  {
    id: 'diagramas-flujo',
    title: 'Diagramas de Flujo',
    description: 'Visualización clara de procesos y sistemas complejos. Creamos diagramas de flujo profesionales que facilitan la comprensión de procedimientos, algoritmos y flujos de trabajo en tu organización.',
    features: ['Símbolos estándar y profesionales', 'Fácil de seguir y entender', 'Editable y escalable'],
    icon: <GitBranch className="w-7 h-7" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    imageLeft: false,
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Estrategias para potenciar tu presencia online y aumentar tus ventas. Desde redes sociales hasta campañas publicitarias y SEO. Te ayudamos a conectar con tu audiencia de forma efectiva.',
    features: ['Gestión de redes sociales', 'Campañas publicitarias optimizadas', 'Análisis y reportes de resultados'],
    icon: <Megaphone className="w-7 h-7" />,
    image:"/marketing.png" ,
    imageLeft: true,
  },
  {
    id: 'powerpoint-canvas',
    title: 'PowerPoint / Canva',
    description: 'Presentaciones impactantes y profesionales que capturan la atención de tu audiencia. Diseñamos diapositivas creativas con infografías, animaciones y narrativa visual que comunica con claridad.',
    features: ['Diseño personalizado y creativo', 'Infografías y gráficos incluidos', 'Formato editable entregado'],
    icon: <FileText className="w-7 h-7" />,
    image: '/powerpoint.png',
    imageLeft: false,
  },
  {
    id: 'limpieza-virus',
    title: 'Mantenimiento',
    description: 'Dale una segunda vida a tu computadora con un servicio técnico que prioriza la potencia y la estabilidad. En TecniCore no solo aceleramos tu hardware, sino que blindamos tu privacidad ante cualquier riesgo digital. Es hora de trabajar sin interrupciones, con la tranquilidad de un sistema 100% seguro y optimizado..',
    features: ['Actualizacion de software', 'Optimización del sistema', 'Limpieza profunda'],
    icon: <Shield className="w-7 h-7" />,
    image: '/mantenimiento.png',
    imageLeft: true,
  },
  {
    id: 'paginas-web',
    title: 'Páginas Web',
    description: 'Sitios web modernos, rápidos y optimizados para buscadores. Desarrollamos desde landing pages hasta portales completos, responsive y con diseño atractivo que refleja la identidad de tu marca.',
    features: ['Diseño responsive y moderno', 'Optimización SEO incluida', 'Carga rápida y segura (HTTPS)'],
    icon: <Code className="w-7 h-7" />,
    image: '/paginasweb.png',
    imageLeft: false,
  },
  {
    id: 'desarrollo-ia',
    title: 'Desarrollo con IA',
    description: 'Soluciones inteligentes y automatizadas con las últimas tecnologías de inteligencia artificial. Integramos IA en tus procesos para aumentar la productividad, reducir costos y ofrecer experiencias personalizadas.',
    features: ['Automatización de procesos', 'Chatbots y asistentes virtuales', 'Análisis predictivo de datos'],
    icon: <Zap className="w-7 h-7" />,
    image: '/ia.png',
    imageLeft: true,
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Detect screen size
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setScreenSize(w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop');
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // GSAP entrance animation
  useGSAP(() => {
    gsap.fromTo(
      '.services-slider-section',
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-slider-section',
          start: 'top 85%',
        },
      }
    );
  }, []);

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev' = 'next') => {
      if (animating || index === current) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 360);
    },
    [animating, current]
  );

  const prev = () =>
    goTo(current === 0 ? services.length - 1 : current - 1, 'prev');

  const next = () =>
    goTo(current === services.length - 1 ? 0 : current + 1, 'next');

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, animating]);

  const service = services[current];
  const isMobile = screenSize !== 'desktop'; // mobile + tablet use stacked layout

  // Slide transition styles
  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === 'next' ? '18px' : '-18px'})`
      : 'translateX(0)',
    transition: 'opacity 0.36s ease, transform 0.36s ease',
  };

  const waLink = `https://wa.me/573136431944?text=Hola%20TECNICORE%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.title)}`;

  return (
    <section className="services-slider-section relative py-0 bg-background" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>

      {/* ── Header ── */}
      <div
        className="relative z-10 text-center"
        style={{ padding: isMobile ? '1rem 1rem 0.25rem' : '1.25rem 1rem 0.25rem' }}
      >
        <h2
          className="font-bold text-foreground"
          style={{ fontSize: isMobile ? 'clamp(1.3rem,5vw,1.8rem)' : 'clamp(1.5rem,2.5vw,2.1rem)', margin: 0 }}
        >
          Nuestros{' '}
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Servicios
          </span>
        </h2>
        <p
          className="text-muted"
          style={{ marginTop: '0.25rem', fontSize: isMobile ? '0.78rem' : '0.875rem' }}
        >
          Soluciones especializadas en trabajos profesionales, académicos y digitales
        </p>
      </div>

      {/* ── Slide content ── */}
      <div
        className="relative z-10"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'center',
          padding: isMobile ? '0.75rem 1rem' : '1rem clamp(2rem,4vw,4rem)',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            // Mobile/tablet: column (image always first = renders on top)
            // Desktop: row, alternating image side
            flexDirection: isMobile ? 'column' : service.imageLeft ? 'row-reverse' : 'row',
            gap: isMobile ? '0.9rem' : 'clamp(2rem,3.5vw,3.5rem)',
            alignItems: isMobile ? 'stretch' : 'center',
            width: '100%',
            ...slideStyle,
          }}
        >
          {/* ── Image — first in DOM so it renders above text on mobile ── */}
          <div
            style={{
              flex: isMobile ? 'none' : '1 1 50%',
              borderRadius: isMobile ? 12 : 18,
              overflow: 'hidden',
              aspectRatio: '16/9',
              maxHeight: isMobile ? '200px' : 'none',
              boxShadow: '0 14px 45px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* ── Text ── */}
          <div style={{ flex: isMobile ? 'none' : '1 1 45%', minWidth: 0 }}>
            {/* Icon */}
            <div
              className="bg-gradient-to-br from-accent to-secondary text-primary-foreground"
              style={{
                width: isMobile ? 48 : 56,
                height: isMobile ? 48 : 56,
                borderRadius: isMobile ? 11 : 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isMobile ? '0.5rem' : '0.8rem',
              }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h1
              className="font-bold text-foreground"
              style={{
                fontSize: isMobile ? 'clamp(1.3rem,5vw,1.8rem)' : 'clamp(1.5rem,2.8vw,2.4rem)',
                margin: `0 0 ${isMobile ? '0.4rem' : '0.65rem'} 0`,
                lineHeight: 1.1,
              }}
            >
              {service.title}
            </h1>

            {/* Description */}
            <p
              className="text-muted"
              style={{
                fontSize: isMobile ? '0.82rem' : 'clamp(0.86rem,1.1vw,0.96rem)',
                lineHeight: 1.65,
                margin: `0 0 ${isMobile ? '0.65rem' : '1rem'} 0`,
              }}
            >
              {service.description}
            </p>

            {/* Features */}
            <div style={{ marginBottom: isMobile ? '0.9rem' : '1.25rem' }}>
              <p
                className="font-bold text-foreground"
                style={{ fontSize: isMobile ? '0.8rem' : '0.88rem', margin: `0 0 ${isMobile ? '0.35rem' : '0.5rem'} 0` }}
              >
                Características principales:
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: isMobile ? '0.28rem' : '0.38rem' }}>
                {service.features.map((f, i) => (
                  <li
                    key={i}
                    className="text-muted"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: isMobile ? '0.8rem' : '0.86rem' }}
                  >
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
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary-foreground font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              style={{
                fontSize: isMobile ? '0.85rem' : '0.9rem',
                padding: isMobile ? '0.6rem 1.2rem' : '0.72rem 1.5rem',
                width: isMobile ? '100%' : 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start',
                textDecoration: 'none',
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Navigation: arrows + dots ── */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ gap: '0.9rem', padding: isMobile ? '0.5rem 1rem 1rem' : '0.4rem 1rem 1.25rem' }}
      >
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Servicio anterior"
          className="flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-200"
          style={{ width: 42, height: 42, flexShrink: 0, background: 'rgba(255,255,255,0.05)', cursor: 'pointer' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div
          style={{
            display: 'flex',
            gap: 5,
            alignItems: 'center',
            overflowX: 'auto',
            maxWidth: isMobile ? '180px' : '360px',
            padding: '3px 1px',
            scrollbarWidth: 'none' as const,
          }}
        >
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Ir al servicio ${i + 1}`}
              style={{
                width: i === current ? 22 : 7,
                height: 7,
                borderRadius: 4,
                background:
                  i === current
                    ? 'linear-gradient(90deg, var(--accent, #00e5ff), var(--secondary, #00ff9d))'
                    : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Siguiente servicio"
          className="flex items-center justify-center rounded-full border border-border text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-200"
          style={{ width: 42, height: 42, flexShrink: 0, background: 'rgba(255,255,255,0.05)', cursor: 'pointer' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
