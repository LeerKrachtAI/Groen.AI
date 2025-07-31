// components/DubbeledrukSection.tsx
import { useStickySection } from '../hooks/useStickySection';
import { Users, Globe, Book } from 'lucide-react';
import React from 'react';

interface Card {
  id: number;
  type: 'intern' | 'extern';
  title: string;
  content: string;
  source?: string;
}

const DubbeledrukSection = () => {
  const { sectionRef, progress } = useStickySection(3); // 300vh height
  
  const cards: Card[] = [
    {
      id: 1,
      type: 'intern',
      title: 'Communicatie-overload',
      content: 'Je inbox en WhatsApp stromen over met constant dezelfde vragen van collega\'s over planning, materialen en projectstatus.',
      source: 'Interne analyse'
    },
    {
      id: 2,
      type: 'extern',
      title: 'Veranderende wetgeving',
      content: 'Nieuwe duurzaamheidsnormen en verplichte certificeringen vereisen constante aanpassingen in je processen en rapportages.',
      source: 'Techniek Nederland'
    },
    {
      id: 3,
      type: 'intern',
      title: 'Inefficiënte planning',
      content: 'Uren gaan verloren aan het handmatig inplannen van monteurs, het bijhouden van beschikbaarheid en het verwerken van last-minute wijzigingen.',
      source: 'Interne analyse'
    },
    {
      id: 4,
      type: 'extern',
      title: 'Klantverwachtingen',
      content: 'Klanten verwachten direct inzicht, snelle offertes en proactieve communicatie, wat handmatig bijna niet bij te benen is.',
      source: 'Consumentenbond'
    },
    {
      id: 5,
      type: 'intern',
      title: 'Foutgevoelige administratie',
      content: 'Het handmatig overnemen van werkbonnen, urenstaten en materiaallijsten leidt tot fouten, vertraging en frustratie.',
      source: 'Interne analyse'
    },
    {
      id: 6,
      type: 'extern',
      title: 'Technologische adoptie',
      content: 'De branche digitaliseert in een rap tempo. Wie niet meegaat, verliest op termijn zijn concurrentiepositie en relevantie.',
      source: 'KvK Innovatie-rapport'
    },
  ];
  
  const getCardTransform = (index: number) => {
    const totalCards = cards.length;
    const cardProgress = progress * totalCards - index;
    const clampedProgress = Math.max(0, Math.min(1, cardProgress));
    
    const y = (1 - clampedProgress) * 100;
    const scale = 1 - ((totalCards - 1 - index) * 0.03) + (clampedProgress * 0.03);
    const rotate = (1 - clampedProgress) * (5 - (index * 1));
    const opacity = Math.min(1, Math.max(0, cardProgress + 0.5));
    
    return {
      transform: `
        translateY(${y}%)
        scale(${scale})
        rotateX(${rotate}deg)
      `,
      opacity,
      zIndex: index
    };
  };
  
  return (
    <section ref={sectionRef} className="dubbele-druk-section">
      <div className="sticky-inner">
        <div className="section-header">
          <h2 className="section-title text-gradient">
            De dubbele druk
          </h2>
          <p className="section-subtitle">
            Van interne chaos tot externe verandering: de uitdagingen die elke installateur herkent.
          </p>
        </div>
        
        <div className="cards-container">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`pressure-card liquid-glass ${card.type}`}
              style={getCardTransform(index)}
            >
              <div className="card-type-indicator">
                {card.type === 'intern' ? 
                  <Users size={20} /> : <Globe size={20} />
                }
              </div>
              
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
              
              {card.source && (
                <div className="card-source glass-secondary">
                  <Book size={14} />
                  <span>{card.source}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubbeledrukSection;
