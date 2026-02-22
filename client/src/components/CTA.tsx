import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

/**
 * CTA Component
 * Sección de llamado a la acción final
 * Diseño: Minimalista con opciones de contacto
 * Animaciones: GSAP + ScrollTrigger
 */

export default function CTA() {
  useGSAP(() => {
    // Animación del título
    gsap.fromTo(
      '.cta-title',
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 90%',
        },
      }
    );

    // Animaciones de entrada para las tarjetas de contacto
    gsap.fromTo(
      '.cta-card',
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
        },
      }
    );

    // Animación del botón principal
    gsap.fromTo(
      '.cta-button',
      { scale: 0.8, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'bottom 80%',
        },
      }
    );
  }, []);

  return (
    <section className="cta-section relative py-24 bg-background overflow-hidden">
      {/* Decoradores de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container max-w-5xl">
        {/* Contenido principal */}
        <div className="text-center mb-16">
          <h2 className="cta-title text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">¿Listo para </span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              transformar tus proyectos?
            </span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos con soluciones profesionales y de calidad.
          </p>
        </div>

        {/* Opciones de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="cta-card p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary rounded-lg p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-full h-full text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted mb-4">Respuesta rápida en tiempo real</p>
            <a
              href="https://wa.me/573136431944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              +57 313 643 1944
            </a>
          </div>

          {/* Teléfono */}
          <div className="cta-card p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent rounded-lg p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-full h-full text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Teléfono</h3>
            <p className="text-muted mb-4">Llamadas disponibles 24/7</p>
            <a href="tel:+573005335148" className="text-accent hover:text-accent/80 font-semibold transition-colors">
              +57 300 533 5148
            </a>
          </div>

          {/* Email */}
          <div className="cta-card p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary rounded-lg p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-full h-full text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted mb-4">Respuesta en menos de 2 horas</p>
            <a href="mailto:contacto@tecnicore.com" className="text-accent hover:text-accent/80 font-semibold transition-colors">
              contacto@tecnicore.com
            </a>
          </div>
        </div>

        {/* Botón principal */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="cta-button bg-gradient-to-r from-accent to-secondary hover:opacity-90 text-primary-foreground font-bold px-10 py-7 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Iniciar Conversación
          </Button>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
    </section>
  );
}
