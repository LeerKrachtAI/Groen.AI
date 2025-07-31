// components/Contact.tsx
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Send, CheckCircle, ShieldCheck, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const FormInput = forwardRef(({ id, label, ...props }, ref) => (
  <div className="relative">
    <input id={id} {...props} ref={ref} className="form-input peer" />
    <label htmlFor={id} className="form-label">{label}</label>
  </div>
));

const FormSelect = ({ id, label, children, ...props }) => (
  <div className="relative">
    <select id={id} {...props} className="form-input peer">
      {children}
    </select>
    <label htmlFor={id} className="form-label">{label}</label>
  </div>
);

const TrustBadge = ({ icon, text }) => (
    <div className="flex items-center gap-3">
        <div className="liquid-glass p-2 rounded-full border-none">{icon}</div>
        <span className="text-sm text-gray-300">{text}</span>
    </div>
);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          nameInputRef.current?.focus();
        }
      },
      { threshold: 0.5 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center liquid-glass p-12 rounded-3xl max-w-lg mx-auto"
        >
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 text-white">Bedankt!</h2>
          <p className="text-lg text-gray-300">
            Je aanvraag is verzonden. We nemen binnen 24 uur contact op om de volgende stappen te bespreken.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white"
        >
          <h2 className="text-5xl font-bold leading-tight mb-4">Klaar om de controle <span className="text-gradient">terug te nemen?</span></h2>
          <p className="text-lg text-gray-300 mb-8">
            In 2 weken van chaos naar rust. Van 's avonds doorwerken naar tijd voor wat echt belangrijk is. Vul het formulier in en ontdek wat AI voor jouw bedrijf kan betekenen.
          </p>
          <div className="space-y-4">
              <TrustBadge icon={<ShieldCheck size={20} className="text-green-400"/>} text="100% Nederlandse hosting (ISO 27001)" />
              <TrustBadge icon={<Zap size={20} className="text-yellow-400"/>} text="Binnen 2 weken operationeel" />
              <TrustBadge icon={<Award size={20} className="text-purple-400"/>} text="Geen lange, wurgende contracten" />
          </div>
          <div className="mt-8 liquid-glass p-4 rounded-xl border-none">
              <p className="text-center text-sm font-semibold text-yellow-300">Eerste 10 aanmeldingen deze maand krijgen een gratis AI-training voor het hele team!</p>
          </div>
        </motion.div>

        {/* Right Content - Form */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="liquid-glass p-8 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput ref={nameInputRef} id="name" name="name" type="text" placeholder=" " label="Naam" required />
            <FormInput id="company" name="company" type="text" placeholder=" " label="Bedrijfsnaam" required />
            <FormInput id="email" name="email" type="email" placeholder=" " label="E-mailadres" required />
            <FormInput id="phone" name="phone" type="tel" placeholder=" " label="Telefoon (optioneel)" />
            <FormSelect id="challenge" name="challenge" required>
              <option value="">Kies je grootste uitdaging...</option>
              <option>Offertes & administratie</option>
              <option>Planning & communicatie</option>
              <option>Klantenservice</option>
              <option>Anders</option>
            </FormSelect>
            <FormSelect id="timeline" name="timeline" required>
                <option value="">Wanneer wil je starten?</option>
                <option>Zo snel mogelijk</option>
                <option>Binnen 3 maanden</option>
                <option>Ik oriënteer me nog</option>
            </FormSelect>
            <button type="submit" className="w-full btn-primary text-lg py-4">
              Verstuur & Plan Gesprek
              <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;