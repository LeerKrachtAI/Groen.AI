// components/Navigation.tsx update
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-glass">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text text-gradient">Groen.AI</span>
          </div>
          
          <div className="nav-actions">
            <button 
              onClick={toggleTheme}
              className="theme-toggle glass-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button className="nav-cta glass-accent">
              <span>Plan demo</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
