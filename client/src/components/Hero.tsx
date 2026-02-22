import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero Component
 * Sección principal con propuesta de valor de TECNICORE
 * Diseño: Minimalismo Corporativo Oscuro
 * - Fondo oscuro con acentos de color
 * - Tipografía audaz y espaciada
 * - Animaciones GSAP + ScrollTrigger
 */
export default function Hero() {
  useGSAP(() => {
    // Animación inicial del hero
    gsap.fromTo(
      '.hero-inner',
      { scale: 0.6, autoAlpha: 0 },
      {
        scale: 0.8,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.inOut',
      }
    );

    // Timeline del hero con scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    // Animación del contenido del hero
    tl.from('.hero-inner', {
      scale: 0.8,
      autoAlpha: 1,
      duration: 0.01,
    });

    tl.fromTo(
      '.hero-inner',
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1 }
    );

    // Desaparece la sección hero
    tl.to('.hero-inner', {
      scale: 2,
      autoAlpha: 0,
      duration: 2,
    });
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-background bottom-15">
      {/* Decorador de fondo - líneas animadas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="hero-inner relative z-10 container max-w-5xl px-4 py-20 text-center">
        {/* Etiqueta de presentación */}
        <div className="inline-block mb-8 px-4 py-2 bg-card border border-border rounded-full">
          <p className="text-xl font-medium text-muted">
            <span className="text-accent">✨</span> Soluciones especializadas para tu éxito
          </p>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">¿No tienes tiempo para</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
            tareas o trabajos?
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Cuente con nosotros. Equipo especializado en trabajos profesionales, académicos y digitales de alta calidad.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold px-8 py-6 text-base"
          >
            Contáctanos Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card px-8 py-6 text-base font-semibold"
          >
            Ver Servicios
          </Button>
        </div>

        {/* Estadísticas o características rápidas */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-accent mb-2">100+</p>
            <p className="text-sm text-muted">Proyectos completados</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-secondary mb-2">10+</p>
            <p className="text-sm text-muted">Áreas de especialidad</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl font-bold text-accent mb-2">24/7</p>
            <p className="text-sm text-muted">Disponibilidad</p>
          </div>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
    </section>
  );
}
