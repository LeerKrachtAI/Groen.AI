// components/SolutionsSection.tsx
import React, { useRef, useEffect } from 'react';
import { useStickySection } from '../hooks/useStickySection';
import { Zap, Sliders, Bot, Check } from 'lucide-react';

const SolutionsSection = () => {
  const { sectionRef, progress } = useStickySection(3);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const solutions = [
    {
      id: 1,
      title: 'Operationele Automatisering',
      description: 'Pak de overlopende inbox en de stapel offertes aan. Wij automatiseren de stroom van aanvragen, planning en communicatie.',
      result: 'Meer rust in de avond, hogere conversie',
      icon: <Zap />
    },
    {
      id: 2,
      title: 'Intelligente Planning',
      description: 'Vervang het handmatige planbord door een slim systeem dat rekening houdt met reistijd, skills en beschikbaarheid.',
      result: 'Minder reistijd, hogere productiviteit',
      icon: <Sliders />
    },
    {
      id: 3,
      title: 'Klant- & Kennis-bots',
      description: 'Een AI-assistent die 24/7 vragen van klanten beantwoordt en intern als vraagbaak dient voor technische documentatie.',
      result: 'Minder telefoontjes, snellere service',
      icon: <Bot />
    },
    {
      id: 4,
      title: 'Geautomatiseerde Rapportage',
      description: 'Genereer automatisch de juiste rapporten voor certificering, projectvoortgang en financiële overzichten.',
      result: 'Geen administratieve rompslomp meer',
      icon: <Check />
    },
  ];
  
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const viewWidth = scrollRef.current.clientWidth;
      const maxScroll = scrollWidth - viewWidth;
      
      scrollRef.current.scrollLeft = progress * maxScroll;
    }
  }, [progress]);
  
  return (
    <section ref={sectionRef} className="solutions-section">
      <div className="sticky-inner">
        <div className="section-header">
          <h2 className="section-title">
            Concreet resultaat: <span className="text-gradient">onze oplossingen</span>
          </h2>
          <p className="section-subtitle">
            Jouw bedrijf is uniek. Daarom is onze aanpak dat ook. Dit zijn de mogelijkheden.
          </p>
        </div>
        
        <div className="horizontal-scroll-container" ref={scrollRef}>
          <div className="solutions-track">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="solution-card liquid-glass"
                style={{
                  transform: `translateX(${index * 5}px)`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="solution-icon glass-secondary">
                  {solution.icon}
                </div>
                
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                
                <div className="solution-result glass-accent">
                  <Check size={16} />
                  <span>{solution.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
