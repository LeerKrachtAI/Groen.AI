// components/StatsSection.tsx
import React, { useEffect, useState, useRef } from 'react';
import { useStickySection } from '../hooks/useStickySection';
import { animate } from 'framer-motion';

const CountUp = ({ end, suffix }: { end: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const controls = animate(0, end, {
            duration: 2,
            ease: "easeOut",
            onUpdate(value) {
                setCount(Math.round(value));
            }
        });
        return () => controls.stop();
    }, [end]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => {
  const { sectionRef, progress } = useStickySection(2);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const stats = [
    { value: 23, suffix: '%', label: 'van de installatiebedrijven gebruikt al een vorm van AI.' },
    { value: 3, suffix: ' jaar', label: 'loopt de branche gemiddeld achter op technologische adoptie.' },
    { value: 75, suffix: '%', label: 'van de tijd kan worden bespaard op repetitieve administratieve taken.' }
  ];
  
  useEffect(() => {
    if (progress > 0.3 && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [progress, hasAnimated]);
  
  return (
    <section ref={sectionRef} className="stats-section">
      <div className="sticky-inner stats-inner">
        <div className="section-header">
            <h2 className="section-title">
            De cijfers <span className="text-gradient">liegen niet</span>
            </h2>
            <p className="section-subtitle">De urgentie en de kansen voor de installatiebranche in data.</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card liquid-glass"
              style={{
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${index * 0.1}s`,
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="stat-value text-gradient">
                {hasAnimated && (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="stat-label">{stat.label}</p>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
