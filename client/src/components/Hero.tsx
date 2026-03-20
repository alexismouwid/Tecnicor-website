import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  headline?: string;
  subheadline?: string;
  eyebrow?: string;
  ctaPrimary?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  backgroundImage?: string;
  align?: 'left' | 'center';
  stats?: { value: string; label: string; color?: string }[];
}

export default function Hero({
  headline = 'AHORRA TIEMPO, AHORRA DINERO Y ENTREGA CALIDAD',
  subheadline = 'Diseñamos soluciones con AI, automatizamos y presentamos de forma profesional tu trabajo.',
  eyebrow = 'Automatizaciones IA · Páginas Web · Software Personalizado',
  ctaPrimary = { text: 'Contáctanos Ahora', href: '#contacto' },
  ctaSecondary = { text: 'Ver Servicios', href: '#servicios' },
  backgroundImage = '/hero-bg.jpg',
  align = 'left',
  stats = [
    { value: '25+', label: 'Proyectos completados', color: 'var(--color-accent, #e63946)' },
    { value: '10+', label: 'Áreas de especialidad',  color: 'var(--color-secondary, #a8dadc)' },
    { value: '24/7', label: 'Disponibilidad',         color: 'var(--color-accent, #e63946)' },
  ],
}: HeroProps) {
  const isCenter = align === 'center';

  // ── GSAP: misma config del original que funciona ─────────────────
  useGSAP(() => {
    // 1. Animación inicial — igual al original
    gsap.fromTo(
      '.hero-inner',
      { scale: 0.5, autoAlpha: 0 },
      { scale: 0.8, autoAlpha: 1, duration: 1, ease: 'power3.inOut' }
    );

    // 2. Timeline con scroll — igual al original
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

    tl.to('.hero-inner', {
      scale: 1.4,
      autoAlpha: 0,
      duration: 3,
    });
  }, []);

  return (
    <section
      className="hero-section relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Fondo */}
      <img
        src="/diagrama.jpg"
        alt=""
        role="presentation"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradientes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top,  rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.55) 45%, transparent 100%),
            linear-gradient(to right, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.15) 60%, transparent 100%)
          `,
        }}
      />

      {/* Blobs de color ambiente */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div
          className="absolute top-24 left-12 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'var(--color-accent, #e63946)' }}
        />
        <div
          className="absolute bottom-24 right-16 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'var(--color-secondary, #a8dadc)', animationDelay: '2s' }}
        />
      </div>

      {/* Contenido — hero-inner recibe la animación del original */}
      <div className="hero-inner relative z-10 w-full mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20 pb-16 sm:pb-24 lg:pb-20">
        <div
          className={`flex flex-col gap-0 max-w-3xl ${
            isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'
          }`}
        >
          {/* Eyebrow */}
          {eyebrow && (
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]"
                style={{
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--color-accent, #e63946)',
                  backdropFilter: 'blur(8px)',
                  fontFamily: 'var(--font-body, sans-serif)',
                }}
              >
                <span style={{ color: 'var(--color-accent, #e63946)' }}>✦</span>
                {eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <div className="mb-5">
            <h1
              className="text-white font-black uppercase leading-[0.95]"
              style={{
                fontFamily: 'var(--font-display, sans-serif)',
                fontSize: 'clamp(2.8rem, 7.5vw, 5rem)',
                letterSpacing: '-0.025em',
              }}
            >
              {(() => {
                const words = headline.split(' ');
                const mid   = Math.ceil(words.length * 0.6);
                return (
                  <>
                    <span className="text-white">{words.slice(0, mid).join(' ')} </span>
                    <span
                      style={{
                        backgroundImage:
                          'linear-gradient(90deg, var(--color-accent,#e63946), var(--color-secondary,#a8dadc), var(--color-accent,#e63946))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto',
                      }}
                    >
                      {words.slice(mid).join(' ')}
                    </span>
                  </>
                );
              })()}
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className="text-white/60 leading-relaxed mb-10 max-w-xl"
            style={{
              fontFamily: 'var(--font-body, sans-serif)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            }}
          >
            {subheadline}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 mb-14 ${
              isCenter ? 'justify-center' : ''
            }`}
          >
            <a
              href={ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold uppercase tracking-wider text-sm text-white transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: 'var(--color-accent, #e63946)',
                fontFamily: 'var(--font-body, sans-serif)',
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 36px rgba(230,57,70,0.45)')
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.boxShadow = 'none')
              }
            >
              {ctaPrimary.text}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center px-8 py-3.5 font-bold uppercase tracking-wider text-sm text-white transition-all duration-200 hover:bg-white/10"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  fontFamily: 'var(--font-body, sans-serif)',
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.7)')
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)')
                }
              >
                {ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className={`flex gap-10 sm:gap-16 ${isCenter ? 'justify-center' : ''}`}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col"
                  style={{
                    paddingRight: i < stats.length - 1 ? '1rem' : 0,
                    borderRight:  i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}
                >
                  <span
                    className="text-3xl sm:text-4xl font-black leading-none mb-1"
                    style={{
                      color: s.color ?? 'var(--color-accent, #e63946)',
                      fontFamily: 'var(--font-display, sans-serif)',
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-white/45 text-xs sm:text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'var(--font-body, sans-serif)' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span
          className="text-white text-[10px] uppercase"
          style={{
            fontFamily: 'var(--font-body, sans-serif)',
            writingMode: 'vertical-rl',
            letterSpacing: '0.25em',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>

      {/* Línea inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-accent,#e63946) 40%, var(--color-secondary,#a8dadc) 60%, transparent)',
          opacity: 0.6,
        }}
      />
    </section>
  );
}
