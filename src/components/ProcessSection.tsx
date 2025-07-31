// components/ProcessSection.tsx
import React from 'react';
import { useStickySection } from '../hooks/useStickySection';
import { Check } from 'lucide-react';

const ProcessSection = () => {
  const { sectionRef, progress } = useStickySection(3);
  
  const steps = [
    {
      number: 1,
      title: 'De Werkplaats-Sessie',
      subtitle: 'Intake',
      description: 'We starten niet met een verkoopgesprek, maar met een diepgaande analyse van jouw grootste tijdvreters op de werkvloer.'
    },
    {
      number: 2,
      title: 'Blueprint & Bouw',
      subtitle: 'Ontwerp',
      description: 'We ontwerpen een praktische, schaalbare oplossing op maat en bouwen een eerste prototype dat je direct kunt testen.'
    },
    {
      number: 3,
      title: 'Implementatie & Training',
      subtitle: 'Integratie',
      description: 'We integreren de oplossing naadloos in je bestaande systemen en trainen je team om er het maximale uit te halen.'
    },
    {
      number: 4,
      title: 'Optimalisatie & Groei',
      subtitle: 'Support',
      description: 'We blijven monitoren, optimaliseren en doorontwikkelen, zodat de oplossing meegroeit met jouw bedrijf en ambities.'
    },
  ];
  
  const getStepState = (index: number) => {
    const stepProgress = progress * (steps.length) - index;
    const clampedProgress = Math.max(0, Math.min(1, stepProgress));
    return {
      isActive: clampedProgress > 0.5 && clampedProgress < 1,
      isComplete: clampedProgress >= 1,
      opacity: clampedProgress,
      scale: 0.95 + (clampedProgress * 0.05)
    };
  };
  
  return (
    <section ref={sectionRef} className="process-section">
      <div className="sticky-inner">
        <div className="section-header">
            <h2 className="section-title">
            Onze werkwijze: <span className="text-gradient">van intake tot impact</span>
            </h2>
            <p className="section-subtitle">Een helder, transparant en bewezen proces voor gegarandeerd resultaat.</p>
        </div>
        
        <div className="timeline-container">
          {/* Progress bar */}
          <div className="progress-line">
            <div 
              className="progress-fill"
              style={{ transform: `scaleY(${progress})` , transformOrigin: 'top'}}
            />
          </div>
          
          {/* Steps */}
          <div className="timeline-steps">
            {steps.map((step, index) => {
              const state = getStepState(index);
              return (
                <div
                  key={index}
                  className={`timeline-step ${state.isActive ? 'active' : ''} ${state.isComplete ? 'complete' : ''}`}
                  style={{
                    opacity: state.opacity,
                  }}
                >
                  <div className="step-connector">
                    <div 
                        className="step-dot"
                        style={{
                             transform: `scale(${state.scale})`
                        }}
                    >
                      <span className="step-number">{state.isComplete ? <Check size={16}/> : step.number}</span>
                    </div>
                  </div>
                  
                  <div className="step-content liquid-glass">
                    <h3 className="step-title">
                      {step.title}
                      <span className="step-subtitle">{step.subtitle}</span>
                    </h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
