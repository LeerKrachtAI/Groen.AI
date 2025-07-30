import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Wrench, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const expertiseItems = [
  { icon: Wrench, title: '5+ jaar software voor installateurs', description: 'Van planningstools tot CRM-systemen, we kennen de valkuilen.' },
  { icon: Award, title: 'Ex-energietransitie consultants', description: 'Met een achtergrond bij Soly & Essent begrijpen we de markt en de klant.' },
  { icon: Users, title: '150+ installateurs geholpen', description: 'Van eenmanszaak tot MKB+, we snappen de unieke uitdagingen op elke schaal.' },
];

const specializations = [
  'Zonnepanelen installaties & verkoop',
  'Warmtepomp projecten & planning',
  'Laadpaal-netwerken voor VVEs',
  'HVAC & klimaatbeheersing',
  'Subsidie- en regelgeving-jungle',
  'Klantcommunicatie via WhatsApp'
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.4 } },
};

const Expertise = () => {
  const { ref } = useScrollAnimation();

  return (
    <section id="expertise" ref={ref} className="fade-in-scroll">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
              Energiesector kennis.
              <br />
              <span className="text-gradient">
                Geen algemene praatjes.
              </span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Wij kennen de installatiebranche van binnenuit. Geen generieke software, maar oplossingen die écht aansluiten bij jouw dagelijkse uitdagingen.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {specializations.map((spec, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[var(--accent-secondary)] flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {expertiseItems.map((item, index) => (
              <motion.div
                key={index}
                className="glass-secondary rounded-2xl p-6 flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
