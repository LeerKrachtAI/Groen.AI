import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const NewsletterForm = () => (
  <div className="liquid-glass rounded-2xl p-6 luxury-shadow-sm">
    <h3 className="text-xl font-light mb-4 text-[var(--text-primary)]">Blijf op de hoogte</h3>
    <p className="text-sm text-[var(--text-secondary)] mb-4">Ontvang updates over nieuwe features en duurzame technologie.</p>
    <form className="space-y-4">
      <input 
        type="email"
        className="w-full px-4 py-3 rounded-xl bg-white/5 
                  backdrop-blur-md border border-white/10
                  focus:border-accent-primary focus:bg-white/10
                  transition-all duration-300 text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
        placeholder="Jouw e-mailadres"
      />
      <button className="w-full py-3 rounded-xl 
                       bg-gradient-to-r from-accent-primary to-accent-secondary
                       hover:shadow-lg hover:shadow-accent-primary/20 transform hover:scale-105
                       transition-all duration-300 text-white font-semibold">
        Aanmelden
      </button>
    </form>
  </div>
);

const SocialIcon = ({ href, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        {children}
    </motion.a>
);

const Footer = () => {
  return (
    <footer className="liquid-glass rounded-t-3xl mt-16 border-t border-[var(--glass-border-color)]">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Groen.AI</h3>
            <p className="text-[var(--text-secondary)] text-sm">Minder operationele chaos. Meer focus op je vak.</p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-light text-[var(--text-primary)] mb-4">Navigatie</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#solutions" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Oplossingen</a></li>
              <li><a href="#process" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Proces</a></li>
              <li><a href="#testimonials" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Ervaringen</a></li>
              <li><a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--glass-border-color)] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[var(--text-muted)]">&copy; {new Date().getFullYear()} Groen.AI. Alle rechten voorbehouden.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialIcon href="#"><Linkedin size={20} /></SocialIcon>
            <SocialIcon href="#"><Twitter size={20} /></SocialIcon>
            <SocialIcon href="#"><Github size={20} /></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
