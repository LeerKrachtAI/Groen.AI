import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FAQItem = ({ faq, isOpen, onClick }) => {
  const Content = faq.component;
  return (
    <div className="glass-secondary rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left p-6"
      >
        <h3 className="text-lg font-medium text-[var(--text-primary)]">{faq.title}</h3>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-primary)] transition-transform duration-300"
             style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown className="w-5 h-5 text-[var(--text-secondary)]" />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-premium"
        style={{ maxHeight: isOpen ? '500px' : '0px' }}
      >
        <div className="px-6 pb-6 text-[var(--text-secondary)] font-light leading-relaxed prose-styles">
          <Content />
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { ref } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [faqs, setFaqs] = useState<any[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const modules = import.meta.glob<{ default: React.ComponentType, frontmatter: any }>('/src/content/faq/*.mdx');
      const faqPromises = Object.entries(modules).map(async ([, resolver]) => {
        const module = await resolver();
        return { ...module.frontmatter, component: module.default };
      });
      const resolvedFaqs = await Promise.all(faqPromises);
      resolvedFaqs.sort((a, b) => a.order - b.order);
      setFaqs(resolvedFaqs);
    };
    fetchFaqs();
  }, []);

  return (
    <section id="faq" ref={ref} className="fade-in-scroll">
      <div className="luxury-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
            Veelgestelde Vragen
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Alle antwoorden op vragen die we dagelijks krijgen. Staat je vraag er niet tussen? Neem gerust contact op.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
           <p className="text-lg text-[var(--text-secondary)] mb-4">Staat je antwoord er niet tussen?</p>
           <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Neem contact op
            </button>
        </div>
      </div>
      <style>{`
        .prose-styles {
          /* Add styles for the MDX content here */
        }
        .prose-styles p {
          margin-bottom: 1rem;
        }
        .prose-styles a {
          color: var(--accent-primary);
          text-decoration: underline;
        }
        .btn-secondary {
          background-color: var(--glass-bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--glass-border-color);
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.3s var(--ease-premium);
        }
        .btn-secondary:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default FAQ;
