import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * FAQ Component
 * Sección de preguntas frecuentes
 * Diseño: Acordeón con animaciones suaves GSAP
 */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'tiempo-entrega',
    question: '¿Cuál es el tiempo de entrega de los trabajos?',
    answer:
      'El tiempo de entrega depende de la complejidad y urgencia del proyecto. Generalmente, entregamos trabajos en 24-48 horas. Para proyectos urgentes, contáctanos directamente para coordinar plazos especiales.',
  },
  {
    id: 'precios',
    question: '¿Cuál es el costo de vuestros servicios?',
    answer:
      'Los precios varían según el tipo de servicio y la complejidad del proyecto. Ofrecemos cotizaciones personalizadas sin compromiso. Contáctanos con los detalles de tu proyecto para recibir una propuesta ajustada a tu presupuesto.',
  },
  {
    id: 'calidad',
    question: '¿Qué garantía de calidad ofrecen?',
    answer:
      'Garantizamos trabajos de alta calidad, revisados y corregidos según tus especificaciones. Si no estás satisfecho, realizamos ajustes sin costo adicional hasta que cumpla con tus expectativas.',
  },
  {
    id: 'confidencialidad',
    question: '¿Garantizan confidencialidad con mis datos?',
    answer:
      'Sí, la confidencialidad es fundamental para nosotros. Todos tus datos y proyectos se mantienen privados y seguros. No compartimos información con terceros bajo ninguna circunstancia.',
  },
  {
    id: 'revision',
    question: '¿Puedo solicitar revisiones?',
    answer:
      'Claro. Incluimos revisiones ilimitadas hasta que estés completamente satisfecho con el resultado. Tu satisfacción es nuestra prioridad.',
  },
  {
    id: 'contacto',
    question: '¿Cómo puedo contactarlos?',
    answer:
      'Puedes contactarnos a través de WhatsApp, correo electrónico o formulario de contacto en nuestra página. Respondemos en menos de 2 horas durante horario laboral.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  useGSAP(() => {
    // Animación del título
    gsap.fromTo(
      '.faq-title',
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 90%',
        },
      }
    );

    // Animaciones de entrada para los items del FAQ
    gsap.fromTo(
      '.faq-item',
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
        },
      }
    );

    // Animación del CTA
    gsap.fromTo(
      '.faq-cta',
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'bottom 80%',
        },
      }
    );
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section relative py-24 bg-background">
      {/* Decorador de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container max-w-4xl">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="faq-title text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Preguntas </span>
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-lg text-muted">Resolvemos tus dudas sobre nuestros servicios</p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="faq-item group border border-border rounded-lg bg-card overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Encabezado del acordeón */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground text-left group-hover:text-accent transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Contenido expandible */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-card/50 border-t border-border/50">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a acción */}
        <div className="faq-cta mt-12 p-8 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-lg text-center">
          <p className="text-lg text-foreground mb-4">¿No encontraste tu pregunta?</p>
          <p className="text-muted mb-6">Contáctanos directamente y responderemos todas tus dudas</p>
          <button className="px-6 py-2 bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300">
            Contactar Ahora
          </button>
        </div>
      </div>
    </section>
  );
}
