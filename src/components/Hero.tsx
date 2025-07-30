import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useParallax } from '../hooks/useParallax';
import { MessageCircle } from 'lucide-react';

// For now, we'll simplify the Hero and remove the complex chat logic.
// The main goal is to implement the new design system.
// The chat component can be added back later as a separate, self-contained component.

const Hero = () => {
  const { ref: scrollRef } = useScrollAnimation({ threshold: 0.2 });
  // Note: The parallax ref is now on the outer container for a better effect range.
  const { ref: parallaxRef, style: parallaxStyle } = useParallax(0.3);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={scrollRef}
      className="relative min-h-screen flex items-center overflow-hidden fade-in-scroll"
    >
      <div className="luxury-container w-full" ref={parallaxRef}>
        <div className="liquid-glass rounded-3xl p-8 md:p-12 lg:p-16 mx-auto max-w-5xl luxury-shadow-sm">
          <motion.div
            style={parallaxStyle}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[var(--text-primary)] text-balance mb-6">
              Minder operationele chaos.
              <br />
              <span className="text-gradient">
                Meer focus op je vak.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-10">
              Wij zijn jouw gespecialiseerde partner in slimme automatisering. We implementeren systemen die écht werken, zodat jij je kunt richten op wat je het beste doet: installeren.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary group"
              >
                <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Start een intakegesprek
              </button>
              <button
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Ontdek de oplossingen
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          padding: 16px 32px;
          border-radius: 999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s var(--ease-premium);
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(13, 79, 60, 0.35);
        }
        .btn-secondary {
          background-color: var(--glass-bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--glass-border-color);
          padding: 16px 32px;
          border-radius: 999px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.3s var(--ease-premium);
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
        }
        .btn-secondary:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Hero;