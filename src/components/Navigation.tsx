import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider';

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 011.06.044l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 01.044-1.06zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 01.044 1.06l-1.5 1.5a.75.75 0 01-1.06-1.06l1.5-1.5a.75.75 0 011.016-.044zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM6.106 18.894a.75.75 0 011.06-.044l1.5-1.5a.75.75 0 01-1.06-1.06l-1.5 1.5a.75.75 0 01-.044 1.06zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.106 5.106a.75.75 0 01.044-1.06l1.5-1.5a.75.75 0 011.06 1.06l-1.5 1.5a.75.75 0 01-1.06-.044z" />
  </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69a.75.75 0 01.981.981A10.503 10.503 0 0118 18a10.5 10.5 0 01-10.5-10.5c0-1.563.34-3.056.94-4.392a.75.75 0 01.819-.162z" clipRule="evenodd" />
  </svg>
);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="glass-secondary p-2 rounded-full hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)] focus:ring-[var(--accent-primary)]"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-[var(--text-primary)]" />
      ) : (
        <SunIcon className="w-5 h-5 text-[var(--text-primary)]" />
      )}
    </button>
  );
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled ? 'py-2 liquid-glass shadow-lg' : 'py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="luxury-container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[var(--text-primary)] transition-colors">
          Groen.AI
        </a>

        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => scrollToSection('solutions')} className="nav-link">Oplossingen</button>
          <button onClick={() => scrollToSection('expertise')} className="nav-link">Expertise</button>
          <button onClick={() => scrollToSection('process')} className="nav-link">Proces</button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary ml-4">Plan Gesprek</button>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X className="w-6 h-6 text-[var(--text-primary)]" /> : <Menu className="w-6 h-6 text-[var(--text-primary)]" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-4 p-6 liquid-glass rounded-2xl">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('solutions')} className="nav-link-mobile">Oplossingen</button>
            <button onClick={() => scrollToSection('expertise')} className="nav-link-mobile">Expertise</button>
            <button onClick={() => scrollToSection('process')} className="nav-link-mobile">Proces</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full justify-center mt-2">Plan Gesprek</button>
          </div>
        </div>
      )}
      <style>{`
        .nav-link {
          color: var(--text-secondary);
          padding: 8px 16px;
          border-radius: 999px;
          transition: color 0.3s, background-color 0.3s;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background-color: var(--glass-bg-secondary);
        }
        .nav-link-mobile {
          color: var(--text-primary);
          padding: 12px 0;
          text-align: center;
          width: 100%;
          border-radius: 12px;
          transition: color 0.3s, background-color 0.3s;
        }
        .nav-link-mobile:hover {
          background-color: var(--glass-bg-secondary);
        }
        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s var(--ease-premium);
          font-size: 0.9rem;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(13, 79, 60, 0.25);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;