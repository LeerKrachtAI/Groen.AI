import React from 'react';
import { CheckCircle, XCircle, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { name: "Installatiebranche kennis", groenAI: true, others: false },
  { name: "Implementatietijd", groenAI: true, others: false },
  { name: "Nederlandse support", groenAI: true, others: false },
  { name: "Prijs transparantie", groenAI: true, others: true },
  { name: "Maatwerk mogelijk", groenAI: true, others: false },
  { name: "WhatsApp integratie", groenAI: true, others: false },
  { name: "Lokale regelgeving", groenAI: true, others: false },
  { name: "Proefperiode", groenAI: true, others: false },
];

const ComparisonTable = () => {
  const { ref } = useScrollAnimation();

  return (
    <section id="comparison" ref={ref} className="fade-in-scroll">
      <div className="luxury-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
            Waarom Groen.AI vs. algemene software?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Generieke software werkt niet voor specialistische branches. Zie waarom installateurs kiezen voor sector-specifieke expertise.
          </p>
        </div>

        <div className="liquid-glass rounded-3xl p-4 md:p-8 luxury-shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Functionaliteit</th>
                  <th className="text-center p-4 font-semibold text-gradient">Groen.AI</th>
                  <th className="text-center p-4 font-semibold text-[var(--text-secondary)]">Algemene Software</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-t border-[var(--glass-border-color)]">
                    <td className="p-4 text-[var(--text-primary)] font-medium">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.groenAI ? 
                        <CheckCircle className="w-6 h-6 text-[var(--accent-secondary)] mx-auto" /> : 
                        <XCircle className="w-6 h-6 text-[var(--text-muted)] mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {feature.others ? 
                        <CheckCircle className="w-6 h-6 text-[var(--accent-secondary)] mx-auto" /> : 
                        <XCircle className="w-6 h-6 text-[var(--text-muted)] mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;