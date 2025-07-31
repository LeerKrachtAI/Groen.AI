// components/sections/Hero.tsx
import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Grid content met business termen
  const gridItems = [
    'Automatiseer', 'Optimaliseer', 'Groei', 'Rust',
    'Planning', 'Offertes', 'Klanten', 'Tijd',
    'Focus', 'Controle', 'AI', 'Toekomst',
    'Efficiënt', 'Smart', 'Innovatie', 'Resultaat'
  ];
  
  const heroContent = {
    special: {
      title: 'Jouw bedrijf',
      subtitle: 'op automatische piloot',
      emphasis: 'Automatische Piloot'
    }
  };

  return (
    <section className="hero-container">
      <div className="spatial-hero-wrapper">
        <div ref={gridRef} className="stuck-grid glass-hero">
          {/* Background grid items */}
          {gridItems.map((item, index) => (
            <div 
              key={index} 
              className={`grid-item text-gradient-subtle`}
              style={{
                // @ts-ignore 
                animationDelay: `${index * 0.1}s`
              }}
            >
              {item}
            </div>
          ))}
          
          {/* Central special element */}
          <div className="grid-item special glass-primary-hero">
            <h1 className="hero-title">
              <span className="title-line-1">{heroContent.special.title}</span>
              <b className="title-emphasis text-gradient">
                {heroContent.special.emphasis}
              </b>
            </h1>
          </div>
        </div>
        
        {/* Floating content overlay */}
        <div className="hero-content-overlay">
          <p className="hero-description glass-secondary">
            Wat als je vandaag nog je grootste tijdvreter zou automatiseren?
            Wij ontwerpen en implementeren de praktische AI-oplossing die jou 
            de controle teruggeeft.
          </p>
          
          <div className="hero-tagline">
            <span className="tag-item">Meer rust</span>
            <span className="tag-separator">·</span>
            <span className="tag-item">Meer focus</span>
            <span className="tag-separator">·</span>
            <span className="tag-item">Meer groei</span>
          </div>
          
          <div className="hero-cta-container">
            <button className="cta-primary glass-accent">
              <span>Plan een demo</span>
              <ChevronRight className="cta-icon" />
            </button>
            <button className="cta-secondary glass-secondary">
              <span>Ontdek meer</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll om te ontdekken</span>
      </div>
    </section>
  );
};

export default Hero;
