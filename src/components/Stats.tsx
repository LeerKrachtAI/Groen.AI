import React, { useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const StatCard = ({ target, suffix, label, description, source }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.round(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="liquid-glass rounded-3xl p-8 text-center h-full flex flex-col luxury-shadow-sm">
      <div className="flex-grow flex items-center justify-center">
        <span className="text-6xl md:text-7xl font-bold text-gradient">
          {count}{suffix}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-lg font-medium text-[var(--text-primary)]">{label}</p>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        {source && <p className="text-xs text-[var(--text-muted)] mt-2">{source}</p>}
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref } = useScrollAnimation();

  return (
    <section id="stats" ref={ref} className="fade-in-scroll relative">
      <div className="luxury-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
            De kans om voorop te lopen is nú.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            De installatiebranche loopt achter op digitalisering. Terwijl je concurrenten nog handmatig WhatsApp beantwoorden, loop jij vooruit met slimme automatisering. Klanten merken het verschil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard target={23} suffix="%" label="van bedrijven gebruikt AI" description="maar slechts 2% van installateurs" source="CBS AI Monitor 2024" />
          <StatCard target={3} suffix=" jaar" label="loopt de branche achter" description="op digitalisering t.o.v. het gemiddelde" />
          <StatCard target={75} suffix="%" label="meer efficiency nodig" description="voor energietransitie doelen" />
        </div>
      </div>
    </section>
  );
};

export default Stats;