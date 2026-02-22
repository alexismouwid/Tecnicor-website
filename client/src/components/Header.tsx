import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Header Component
 * Barra de navegación minimalista
 * Diseño: Fondo oscuro con acentos de color
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-7xl flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-20 h-20  from-accent to-secondary rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-20 h-20 object-containa" />
          </div>
          <span className="relative flex right-6 text-xl font-bold text-foreground hidden sm:inline">  <img src="/nombre.png" alt="nombre" className="w-30 h-40 flex object-contain" /></span>
        </div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted hover:text-accent transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Toggle de tema */}
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-card rounded-lg transition-colors duration-300 mr-4"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>

        {/* Botón de contacto desktop */}
        <button className="hidden md:block px-6 py-2 bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300">
          Contactar
        </button>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container max-w-7xl py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted hover:text-accent transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2">
              <button
                onClick={toggleTheme}
                className="flex-1 px-4 py-2 bg-card hover:bg-card/80 text-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {theme === 'dark' ? (
                  <><Sun className="w-4 h-4" /> Claro</>
                ) : (
                  <><Moon className="w-4 h-4" /> Oscuro</>
                )}
              </button>
              <button className="flex-1 px-6 py-2 bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300">
                Contactar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
