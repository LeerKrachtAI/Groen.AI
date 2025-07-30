import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const caseStudies = [
    {
        logo: 'IBM',
        title: 'De IBM-Strategie: AI als Investeringsmotor',
        text: 'IBM automatiseerde 8.000 HR-banen. Het resultaat volgens de CEO: geen ontslagen, maar "meer investeringsruimte" voor groei. Waar IBM AI inzet om miljarden vrij te maken, kun jij het gebruiken om jouw tijd vrij te spelen.',
        source: 'Bron: Wall Street Journal, Mei 2025'
    },
    {
        logo: 'Amazon',
        title: 'De Amazon-Formule: Efficiëntie op Megaschaal',
        text: 'Amazon gebruikt AI om hun complete operatie te stroomlijnen. Als AI een bedrijf met 1,5 miljoen werknemers productiever maakt, wat kan het dan betekenen voor jouw team? Het is geen bedreiging, het is een hefboom.',
        source: 'Bron: Fortune, Juli 2025'
    },
    {
        logo: 'Duolingo',
        title: 'De Duolingo-Wekker: Het Gebeurt Nu',
        text: 'De populaire taal-app gebruikt AI voor contentcreatie. De conclusie van de CEO is helder: "AI verandert nu al hoe werk wordt gedaan. Het is geen vraag of en wanneer. Het gebeurt nu." De vraag is niet óf de installatiebranche volgt, maar wie er voorop loopt.',
        source: 'Bron: TechCrunch, Januari 2024'
    }
];

const CaseStudies = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent(c => (c + 1) % caseStudies.length);
        }, 7000); // Longer interval for case studies
        return () => clearTimeout(timer);
    }, [current]);

    const next = () => setCurrent(c => (c + 1) % caseStudies.length);
    const prev = () => setCurrent(c => (c - 1 + caseStudies.length) % caseStudies.length);

    return (
        <section id="case-studies">
            <div className="luxury-container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
                        De Grootste Bedrijven Kiezen voor AI. <br />
                        <span className="text-gradient">Dit is Waarom het voor Jou Belangrijk is.</span>
                    </h2>
                </div>

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
                                <div>
                                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">{caseStudies[current].logo}</h3>
                                    <p className="text-xl text-[var(--text-secondary)] mb-4">{caseStudies[current].title}</p>
                                    <p className="text-md text-[var(--text-primary)] leading-relaxed">{caseStudies[current].text}</p>
                                </div>
                                <p className="text-xs text-[var(--text-muted)] italic mt-6">{caseStudies[current].source}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 mt-8">
                    <button onClick={prev} className="p-2 rounded-full liquid-glass luxury-shadow-sm hover:scale-110 transition-transform"><ChevronUp /></button>
                    <div className="flex flex-col gap-2">
                        {caseStudies.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 rounded-full transition-all duration-300 ${i === current ? 'h-6 bg-[var(--text-primary)]' : 'h-2 bg-[var(--text-muted)] hover:bg-[var(--text-secondary)]'}`}
                            />
                        ))}
                    </div>
                    <button onClick={next} className="p-2 rounded-full liquid-glass luxury-shadow-sm hover:scale-110 transition-transform"><ChevronDown /></button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
