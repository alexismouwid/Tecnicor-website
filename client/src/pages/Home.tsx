import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollLevelIndicator from '@/components/ScrollLevelIndicator';

/**
 * Home Page - TECNICORE
 * Landing page profesional con todas las secciones
 * Diseño: Minimalismo Corporativo Oscuro
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollLevelIndicator />
      <Header />
      
      {/* Espaciador para el header fijo */}
      <div className="h-16"></div>
      
      {/* Secciones principales */}
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="servicios">
          <Services />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
        
        <section id="contacto">
          <CTA />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
