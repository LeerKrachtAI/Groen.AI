# Code Snippets: Groen.AI "Liquid Glass" Redesign (30-07-2025)

Dit document toont een selectie van de belangrijkste code-aanpassingen en componenten van de "Ultra-Premium" redesign.

---

## 1. Global Styles: Liquid Glass & Luxury Shadows (`src/styles/globals.css`)

De basis van het nieuwe design system, met CSS variabelen voor het "Liquid Glass" effect en gelaagde schaduwen.

```css
/* 6. GLASSMORPHISM & SHADOW UTILITIES */

/* Apple-inspired Liquid Glass */
.liquid-glass {
  background: color-mix(
    in srgb,
    var(--glass-bg-primary) var(--glass-opacity),
    rgba(255, 255, 255, 0.05)
  );
  /* Multi-layer border for depth */
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 
    inset 0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
  
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .liquid-glass {
    backdrop-filter: blur(var(--blur-base)) saturate(150%);
    -webkit-backdrop-filter: blur(var(--blur-base)) saturate(150%);
  }
  .liquid-glass:hover {
    backdrop-filter: blur(var(--blur-hover)) saturate(180%);
    transform: translateY(-2px) scale(1.01);
  }
}

/* Luxury depth system */
.luxury-shadow-sm {
  box-shadow: 
    0 1px 1px rgba(0, 0, 0, 0.11),
    0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11),
    0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
}

/* Colored glow for accents */
.accent-glow {
  box-shadow: 
    0 0 20px rgba(13, 79, 60, 0.15),
    0 0 40px rgba(13, 79, 60, 0.1),
    0 0 60px rgba(13, 79, 60, 0.05);
}
```

---

## 2. Process Timeline Component (`src/components/Process.tsx`)

Een geavanceerde, met GSAP geanimeerde, verticale timeline die de `Process` sectie tot leven brengt.

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineCard = ({ step, isLeft }) => {
    // ... component implementation ...
    return (
        <motion.div
            className="timeline-card liquid-glass rounded-3xl p-6 cursor-pointer luxury-shadow-sm"
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* ... card content ... */}
        </motion.div>
    );
};

const ProcessTimeline = () => {
    const timelineRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: timelineRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(progressRef.current, {
                        height: `${self.progress * 100}%`,
                        ease: 'none'
                    });
                },
            });
        }, timelineRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={timelineRef} className="relative py-16">
            <div className="absolute top-0 left-1/2 ...">
                <div ref={progressRef} className="w-full bg-[var(--accent-secondary)]" />
            </div>
            {/* ... mapping over steps ... */}
        </div>
    );
};
```

---

## 3. Footer Component met Newsletter (`src/components/Footer.tsx`)

Een premium, glassmorphic footer met een geïntegreerd nieuwsbrief-aanmeldformulier.

```tsx
import React from 'react';
import { motion } from 'framer-motion';

const NewsletterForm = () => (
  <div className="liquid-glass rounded-2xl p-6 luxury-shadow-sm">
    <h3 className="text-xl font-light mb-4 text-[var(--text-primary)]">Blijf op de hoogte</h3>
    <form>
      <input 
        type="email"
        className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md ..."
        placeholder="Jouw e-mailadres"
      />
      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-primary ...">
        Aanmelden
      </button>
    </form>
  </div>
);

const Footer = () => {
  return (
    <footer className="liquid-glass rounded-t-3xl mt-16 border-t border-[var(--glass-border-color)]">
      <div className="luxury-container py-16">
        {/* ... grid layout ... */}
            <NewsletterForm />
        {/* ... copyright & social icons ... */}
      </div>
    </footer>
  );
};
```

---

## 4. Geanimeerde Stat Card (`src/components/Stats.tsx`)

Een kaart die een nummer-animatie triggert wanneer deze in beeld komt, gebruikmakend van `framer-motion`'s `useInView` en `animate` functies.

---

## 5. Interactive Sections Refactor (30-07-2025)

### 5.1 Horizontale Scroll Panelen (`ChaosToClarity.tsx`)

Een premium, met `framer-motion` aangedreven, horizontale scroll-ervaring. De verticale scroll van de gebruiker wordt omgezet in een horizontale `transform` op een `flex`-container.

```tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ChaosPanel = ({ card }) => {
    // ... panel content ...
};

const ChaosToClarity = () => {
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollContainerRef });

    // Transform vertical scroll progress (0 to 1) into a horizontal
    // translation. The value "-83.33%" corresponds to scrolling
    // 5 out of 6 panels.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

    return (
        <section id="chaos-to-clarity">
            {/* ... Section Title ... */}
            <div ref={scrollContainerRef} className="relative h-[300vh]">
                <div className="sticky top-24 h-[70vh] overflow-hidden">
                    <motion.div style={{ x }} className="flex h-full">
                        {chaosContent.map((card) => (
                            <ChaosPanel key={card.id} card={card} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
```

### 5.2 Vertical Case Study Carousel (`CaseStudies.tsx`)

Een verticale carrousel, gebaseerd op de `TestimonialSlider`, voor het presenteren van case studies.

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudies = () => {
    const [current, setCurrent] = useState(0);
    const caseStudies = [ /* ... data ... */ ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent(c => (c + 1) % caseStudies.length);
        }, 7000);
        return () => clearTimeout(timer);
    }, [current]);

    return (
        <div className="relative h-[400px] md:h-[320px] max-w-4xl mx-auto flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                >
                    <div className="liquid-glass luxury-shadow-lg rounded-3xl p-8 md:p-12 text-center h-full flex flex-col justify-between">
                        {/* ... card content ... */}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
```

```tsx
import React, { useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatCard = ({ target, suffix, label }) => {
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
    <div ref={ref} className="liquid-glass rounded-3xl p-8 text-center h-full flex flex-col">
      <span className="text-6xl md:text-7xl font-bold text-gradient">
        {count}{suffix}
      </span>
      {/* ... labels ... */}
    </div>
  );
};
```
