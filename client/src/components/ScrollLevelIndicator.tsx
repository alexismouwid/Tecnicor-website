import { useEffect, useState } from 'react';

/**
 * ScrollLevelIndicator Component
 * Muestra puntos indicadores del progreso de scroll en la página
 * Diseño: Minimalismo Corporativo Oscuro
 * - Posicionado en la derecha de la pantalla
 * - Puntos que cambian de color según la sección visible
 * - Animación suave y discreta
 */

interface ScrollSection {
  id: string;
  label: string;
  offset: number;
}

export default function ScrollLevelIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollSections, setScrollSections] = useState<ScrollSection[]>([]);

  useEffect(() => {
    // Definir las secciones de la página
    const sections: ScrollSection[] = [
      { id: 'inicio', label: 'Inicio', offset: 0 },
      { id: 'servicios', label: 'Servicios', offset: 0 },
      { id: 'faq', label: 'Preguntas', offset: 0 },
      { id: 'contacto', label: 'Contacto', offset: 0 },
    ];

    // Calcular offsets de las secciones
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        section.offset = element.offsetTop;
      }
    });

    setScrollSections(sections);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Encontrar la sección activa
      let active = 0;
      scrollSections.forEach((section, index) => {
        if (scrollY >= section.offset - windowHeight / 2) {
          active = index;
        }
      });

      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollSections]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {scrollSections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => {
            const element = document.getElementById(section.id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`
            w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
            ${
              activeSection === index
                ? 'bg-accent scale-125 shadow-lg shadow-accent/50'
                : 'bg-muted hover:bg-muted/80'
            }
          `}
          title={section.label}
          aria-label={`Ir a ${section.label}`}
        />
      ))}
    </div>
  );
}
