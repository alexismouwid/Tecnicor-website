import { Mail, Phone, MessageCircle } from 'lucide-react';

/**
 * Footer Component
 * Pie de página con información de contacto
 * Diseño: Minimalista con acentos de color
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Contenido principal */}
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-30 h-30 from-accent to-secondary rounded-lg flex items-center justify-center">

            <img src="/logo.png" alt="logo" className="w-25 h-25 object-containa" />
              </div>
              <span className="relative flex right-10 top-0 text-lg font-bold text-foreground">
 <img src="/nombre.png" alt="nombre" className="w-40 h-40 flex object-contain" />
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Soluciones especializadas en trabajos profesionales, académicos y digitales de alta calidad.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-muted hover:text-accent transition-colors text-sm">Inicio</a></li>
              <li><a href="#servicios" className="text-muted hover:text-accent transition-colors text-sm">Servicios</a></li>
              <li><a href="#faq" className="text-muted hover:text-accent transition-colors text-sm">Preguntas</a></li>
              <li><a href="#contacto" className="text-muted hover:text-accent transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios principales */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted hover:text-accent transition-colors text-sm">Diseño Gráfico</a></li>
              <li><a href="#" className="text-muted hover:text-accent transition-colors text-sm">Tiendas Online</a></li>
              <li><a href="#" className="text-muted hover:text-accent transition-colors text-sm">Páginas Web</a></li>
              <li><a href="#" className="text-muted hover:text-accent transition-colors text-sm">Desarrollo IA</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="https://wa.me/573136431944" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href="tel:+573005335148" className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+57 300 533 5148</span>
              </a>
              <a href="mailto:contacto@tecnicore.com" className="flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

        {/* Pie de página */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted text-sm">
            © {currentYear} TECNICORE. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted hover:text-accent transition-colors text-sm">Política de privacidad</a>
            <a href="#" className="text-muted hover:text-accent transition-colors text-sm">Términos de servicio</a>
          </div>
        </div>
      </div>

      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
    </footer>
  );
}
