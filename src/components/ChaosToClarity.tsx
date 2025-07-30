import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Clock, TrendingDown, AlertTriangle, Zap, Users } from 'lucide-react';

const chaosContent = [
    { id: 1, icon: MessageCircle, title: "Communicatie-Overload", text: "Je inbox en WhatsApp stromen over met constant dezelfde vragen. Kostbare tijd die je niet kunt besteden aan het echte installatiewerk en die 's avonds je rust verstoort.", proof: "Brancheorganisatie Techniek Nederland bevestigt dat het enorme aantal klantvragen een groot knelpunt is: 'te veel om op te pakken.'" },
    { id: 2, icon: Clock, title: "Plannings-Stress", text: "Elke dag is een complexe puzzel van routes, monteurs en materialen. Een spoedklus of ziekmelding gooit de hele planning direct in de war, wat leidt tot vertraging en frustratie.", proof: "Experts omschrijven de sector treffend als een 'veelheid van complexe processen die allemaal door elkaar lopen,' wat efficiënt plannen bijna onmogelijk maakt." },
    { id: 3, icon: TrendingDown, title: "Commercieel Lek", text: "Je besteedt kostbare avonduren aan het maken van offertes die niks opleveren, terwijl je door de drukte de echt kansrijke leads te laat of helemaal niet opvolgt.", proof: "Onderzoek toont aan dat installateurs 'uren investeren in calculaties zonder opbrengst,' en tegelijkertijd prospects kwijtraken omdat het produceren van offertes een 'knelpunt' is." },
    { id: 4, icon: AlertTriangle, title: "Klantontevredenheid", text: "Door de hectiek vergeten klanten proactief te informeren over de planning of eventuele vertraging, wat leidt tot ontevredenheid, negatieve reviews en onnodige, tijdrovende telefoontjes.", proof: "Lange wachttijden zijn een realiteit in de sector. Juist dan is proactieve communicatie cruciaal om het vertrouwen van de klant te behouden en annuleringen te voorkomen." },
    { id: 5, icon: Zap, title: "Operationele Inefficiëntie", text: "Je vult dezelfde klantgegevens in op drie verschillende plekken: in je mail, in je planning en in je factuur. Dit repetitieve, foutgevoelige werk is een enorme, onzichtbare kostenpost.", proof: "Het CBS stelt vast dat 46% van de MKB-bedrijven zelf vindt dat hun processen 'onvoldoende efficiënt zijn.' Dit is dé kans om een voorsprong te nemen op de concurrentie." },
    { id: 6, icon: Users, title: "Interne Frictie", text: "Omdat jij als eigenaar de spil bent die alles zelf doet - van verkoop en planning tot administratie - ontstaat er een constante werkdruk die het hele team voelt en de groei remt.", proof: "Techniek Nederland schetst een herkenbaar beeld: 'De directeur verricht verkoopgesprek, schouw/opname en stelt offerte op.' Deze overbelasting is de bron van interne frictie." }
];

const ChaosPanel = ({ card }) => {
    const Icon = card.icon;
    return (
        <div className="relative h-full min-w-full md:min-w-[800px] flex-shrink-0 p-4 md:p-8">
            <div className="liquid-glass luxury-shadow-lg rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between text-center">
                <div className="flex-grow flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-[var(--bg-primary)] rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[var(--accent-primary)]" />
                    </div>
                    <h3 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">{card.title}</h3>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">{card.text}</p>
                </div>
                <p className="text-sm text-[var(--text-muted)] italic border-t border-[var(--glass-border-color)] pt-6 mt-6 max-w-md mx-auto">
                    {card.proof}
                </p>
            </div>
        </div>
    );
};

const ChaosToClarity = () => {
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollContainerRef });

    // The total width to scroll is the width of all panels minus one screen width.
    // Assuming 6 panels, we want to scroll 5 panel widths.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]); // (5/6) * 100%

    return (
        <section id="chaos-to-clarity">
            <div className="luxury-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-[var(--text-primary)] text-balance mb-6">
                        <span className="text-gradient">Herkenbare Chaos?</span> Dit is de rem op jouw groei.
                    </h2>
                </div>
            </div>
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

export default ChaosToClarity;
