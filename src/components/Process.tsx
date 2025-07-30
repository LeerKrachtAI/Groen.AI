import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Settings, Zap, Shield, GraduationCap, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    {
        id: 'kennismaking',
        title: 'Kennismaking & Analyse',
        icon: Users,
        content: 'We duiken diep in jouw huidige workflow, identificeren knelpunten en bepalen de exacte specificaties voor jouw maatwerkoplossing.',
        details: [
            'Uitgebreide intake en procesanalyse',
            'Definitie van technische vereisten',
            'Opstellen van een persoonlijk implementatieplan'
        ]
    },
    {
        id: 'bouwen',
        title: 'Bouwen & Testen',
        icon: Settings,
        content: 'Ons team bouwt de kern van je applicatie. Via een testomgeving kan je direct feedback geven en de voortgang volgen.',
        details: [
            'Agile ontwikkeling in sprints van 2 weken',
            'Continue integratie en geautomatiseerde tests',
            'Regelmatige feedbacksessies en iteraties'
        ]
    },
    {
        id: 'live',
        title: 'Live & Support',
        icon: Zap,
        content: 'Na een vlekkeloze livegang monitoren we de performance en staan we paraat voor al je vragen en eventuele aanpassingen.',
        details: [
            'Naadloze implementatie in je bestaande systemen',
            'Training voor jou en je team',
            '24/7 monitoring en proactieve support'
        ]
    },
    {
        id: 'onderhoud',
        title: 'Onderhoud & Optimalisatie',
        icon: Shield,
        content: 'We zorgen dat je systeem altijd up-to-date en veilig is. We zoeken continu naar mogelijkheden voor verdere optimalisatie.',
        details: [
            'Periodieke software-updates en security patches',
            'Performance-analyse en optimalisatievoorstellen',
            'Kwartaalrapportages met inzichten en aanbevelingen'
        ]
    }
];

const TimelineCard = ({ step, isLeft, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Icon = step.icon;

    return (
        <div className={`timeline-card-wrapper flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12">
                <motion.div
                    className="timeline-card liquid-glass rounded-3xl p-6 cursor-pointer luxury-shadow-sm"
                    onHoverStart={() => setIsExpanded(true)}
                    onHoverEnd={() => setIsExpanded(false)}
                    onClick={() => setIsExpanded(!isExpanded)} // for touch
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[var(--bg-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-[var(--accent-primary)]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">{step.title}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-4">{step.content}</p>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                className="overflow-hidden"
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <ul className="space-y-2 mt-4 pt-4 border-t border-[var(--glass-border-color)]">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-[var(--accent-secondary)] mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-[var(--text-secondary)] text-sm">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
            <div className="w-1/12 flex justify-center">
                <div className="w-4 h-4 rounded-full bg-[var(--accent-secondary)] z-10 timeline-dot" />
            </div>
            <div className="w-5/12" />
        </div>
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
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--glass-border-color)]">
                <div ref={progressRef} className="w-full bg-[var(--accent-secondary)]" style={{ height: '0%' }} />
            </div>
            <div className="relative flex flex-col gap-16">
                {processSteps.map((step, index) => (
                    <TimelineCard
                        key={step.id}
                        step={step}
                        isLeft={index % 2 !== 0}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

const Process = () => {
    return (
        <section id="process">
            <div className="luxury-container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-light text-[var(--text-primary)] text-balance mb-6">
                        <span className="text-gradient">Een helder proces, van A tot Z</span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        Geen verrassingen, alleen voorspelbare resultaten. We werken in vier duidelijke stappen naar jouw perfecte oplossing.
                    </p>
                </div>
                <ProcessTimeline />
            </div>
        </section>
    );
};

export default Process;