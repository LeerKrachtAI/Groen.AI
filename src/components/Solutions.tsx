import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Filter, RefreshCw, FileText, Calendar, Check, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { id: 'whatsapp-bot', name: 'WhatsApp Assistent', tagline: 'Eerste reactie binnen 2 minuten, 24/7', benefit: '15 uur/week minder afleiding', icon: MessageSquare, features: ['24/7 beschikbaar', 'Nederlandse taal', 'Lead kwalificatie', 'Doorverwijzing naar monteur'] },
  { id: 'lead-scoring', name: 'Lead Scoring Filter', tagline: 'Alleen kwaliteits-leads in je inbox', benefit: 'Focus op 80% kansrijke leads', icon: Filter, features: ['Budget screening', 'Timing check', 'Locatie filter', 'Prioriteit scoring'] },
  { id: 'follow-up', name: 'Automatische Follow-up', tagline: 'Geen lead valt meer door de mazen', benefit: '+35% meer afspraken', icon: RefreshCw, features: ['Email sequences', 'SMS reminders', 'WhatsApp follow-up', 'Timing optimalisatie'] },
  { id: 'quote-generator', name: 'Offerte Generator', tagline: 'Van vraag naar prijs in 5 minuten', benefit: '70% snellere offertes', icon: FileText, features: ['Automatische berekening', 'PDF generatie', 'Subsidie integratie', 'Aangepaste templates'] },
  { id: 'planning', name: 'Planning Optimizer', tagline: 'Route en tijd automatisch berekend', benefit: '25% efficiëntere routes', icon: Calendar, features: ['Route optimalisatie', 'Tijdsinchatting', 'Team planning', 'Klant communicatie'] },
  { id: 'custom', name: 'Maatwerk Oplossing', tagline: 'Jouw unieke uitdaging, onze expertise', benefit: 'Volledig op maat', icon: Check, features: ['Procesanalyse', 'Systeemintegratie', 'Custom dashboard', 'Persoonlijke support'] }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.4 } },
  hover: { y: -8, transition: { ease: 'easeOut', duration: 0.3 } },
};

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <Check className="w-4 h-4 text-[var(--accent-secondary)] mr-3 flex-shrink-0" />
    <span className="text-[var(--text-secondary)] font-light">{children}</span>
  </li>
);

const Solutions = () => {
  const { ref } = useScrollAnimation();

  return (
    <section id="solutions" ref={ref} className="fade-in-scroll">
      <div className="luxury-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
            Wij bouwen, jij activeert.
            <br />
            <span className="text-gradient">Zo simpel is het.</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Praktische AI-tools die direct impact hebben op je efficiency en omzet. Geen maanden wachten, binnen een week operationeel.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="glass-secondary rounded-3xl p-6 group h-full flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-xl flex items-center justify-center mr-4 transition-colors">
                  <service.icon className="w-6 h-6 text-[var(--text-primary)] transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[var(--text-primary)] mb-1">{service.name}</h3>
                  <p className="text-sm text-[var(--text-muted)] font-light">{service.tagline}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-light text-gradient">{service.benefit}</p>
              </div>

              <ul className="space-y-2 flex-grow">
                {service.features.map((feature) => (
                  <FeatureListItem key={feature}>{feature}</FeatureListItem>
                ))}
              </ul>
              
              <div className="flex justify-end mt-4">
                  <ArrowRight className="w-6 h-6 text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <div className="liquid-glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto luxury-shadow-sm">
            <h3 className="text-2xl font-light text-[var(--text-primary)] mb-4">
              Combineer tools voor maximale impact
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
              WhatsApp Assistent + Lead Scoring = 40+ uur per maand tijdsbesparing. Plus 30-50% meer gekwalificeerde afspraken.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Bespreek jouw situatie
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s var(--ease-premium);
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(13, 79, 60, 0.35);
        }
      `}</style>
    </section>
  );
};

export default Solutions;