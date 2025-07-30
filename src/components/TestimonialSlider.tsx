import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TestimonialSlider = () => {
  const { ref } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const modules = import.meta.glob<{ default: React.ComponentType, frontmatter: any }>('/src/content/testimonials/*.mdx');
        const promises = Object.entries(modules).map(async ([, resolver]) => {
          const module = await resolver();
          return { ...module.frontmatter, component: module.default };
        });
        const resolved = await Promise.all(promises);
        resolved.sort((a, b) => a.order - b.order);
        setTestimonials(resolved);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
        setTestimonials([]); // Zorg ervoor dat de state leeg is bij een fout
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setTimeout(() => next(), 5000);
      return () => clearTimeout(timer);
    }
  }, [current, testimonials]);

  const next = () => setCurrent(c => (c + 1) % testimonials.length);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  // Fix: Assign the component to a variable with a capitalized name before returning.
  const ActiveTestimonial = testimonials[current].component;

  return (
    <section id="testimonials" ref={ref} className="fade-in-scroll">
      <div className="luxury-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
            Ervaringen van andere installateurs.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Echte verhalen van Nederlandse MKB-installateurs die hun workflow hebben getransformeerd.
          </p>
        </div>

        <div className="relative h-[450px] md:h-[350px] max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <div className="liquid-glass rounded-3xl p-8 md:p-12 text-center h-full flex flex-col luxury-shadow-sm">
                <Quote className="w-10 h-10 text-[var(--accent-primary)] mx-auto mb-4 opacity-50" />
                <div className="text-xl md:text-2xl font-light text-[var(--text-primary)] mb-6 leading-relaxed prose-styles">
                  <ActiveTestimonial />
                </div>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[current].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-lg text-[var(--text-primary)]">{testimonials[current].author}</p>
                  <p className="text-[var(--text-secondary)]">{testimonials[current].company}, {testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <>
              <button onClick={prev} className="nav-btn left-0"><ChevronLeft /></button>
              <button onClick={next} className="nav-btn right-0"><ChevronRight /></button>
            </>
          )}
        </div>
        
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[var(--text-primary)]' : 'w-2 bg-[var(--text-muted)] hover:bg-[var(--text-secondary)]'}`}
              />
            ))}
          </div>
        )}
      </div>
      <style>{`
        .prose-styles p {
          margin: 0;
        }
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--glass-bg-secondary);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border-color);
          transition: all 0.3s;
        }
        .nav-btn:hover {
          transform: translateY(-50%) scale(1.1);
        }
        .nav-btn.left-0 { left: -20px; }
        .nav-btn.right-0 { right: -20px; }
        @media (max-width: 768px) {
          .nav-btn.left-0 { left: 0; }
          .nav-btn.right-0 { right: 0; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;
