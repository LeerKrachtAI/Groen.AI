// components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const NewsletterBar = () => (
  <div className="newsletter-bar liquid-glass">
    <div className="newsletter-content">
        <div>
            <h3 className="font-semibold text-white">De AI-Revolutie Update</h3>
            <p className="text-sm text-gray-300">Mis de boot niet. Ontvang maandelijks praktische AI-tips voor installateurs.</p>
        </div>
        <form className="newsletter-form">
        <input 
            type="email"
            className="form-input"
            placeholder="Jouw e-mailadres"
        />
        <button className="btn-primary">
            Inschrijven
        </button>
        </form>
    </div>
  </div>
);

const SocialIcon = ({ href, children }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: 'spring', stiffness: 300 }}
    >
        {children}
    </motion.a>
);

const Footer = () => {
  return (
    <footer className="mt-16">
        <NewsletterBar />
        <div className="bg-black text-white">
            <div className="luxury-container py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Groen.AI. Alle rechten voorbehouden.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <SocialIcon href="#"><Linkedin size={20} /></SocialIcon>
                    <SocialIcon href="#"><Twitter size={20} /></SocialIcon>
                    <SocialIcon href="#"><Github size={20} /></SocialIcon>
                </div>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;