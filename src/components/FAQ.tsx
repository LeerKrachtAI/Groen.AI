// components/FAQ.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    { q: "Wat is het verschil tussen dit en zelf ChatGPT gebruiken?", a: "Wij bouwen een schil om de AI die specifiek is voor jouw bedrijf. Het kent jouw processen, klanten en documenten, waardoor het veel gerichter en efficiënter werkt dan een generieke tool." },
    { q: "Hoe veilig zijn mijn bedrijfsgegevens?", a: "Zeer veilig. We gebruiken uitsluitend private, Nederlandse cloud-infrastructuur die ISO 27001 gecertificeerd is. Jouw data wordt nooit gebruikt voor het trainen van publieke modellen." },
    { q: "Hoe lang duurt een implementatie?", a: "Van intake tot een werkend prototype duurt doorgaans niet langer dan twee weken. We geloven in snel resultaat boeken." },
    { q: "Wat als het toch niet voor ons werkt?", a: "Daarom werken we met korte, flexibele contracten. We zijn overtuigd van de waarde, maar je zit nergens aan vast. We stoppen pas als jij 100% tevreden bent." },
];

const FaqItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item liquid-glass p-4 rounded-xl border-none">
            <button onClick={() => setIsOpen(!isOpen)} className="faq-question">
                <span>{item.q}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-300">{item.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
  return (
    <section id="faq">
      <div className="luxury-container">
        <div className="section-header">
          <h2 className="section-title">
            Veelgestelde <span className="text-gradient">vragen</span>
          </h2>
          <p className="section-subtitle">
            Duidelijke antwoorden op je meest prangende vragen.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item, index) => (
                <FaqItem key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
