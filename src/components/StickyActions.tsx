import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling past the hero section (approx 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <>
      {/* WhatsApp button - links onder */}
      <motion.a
        href="https://wa.me/31612345678" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 liquid-glass rounded-full p-3 shadow-xl"
        variants={buttonVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[var(--accent-primary)]" />
      </motion.a>

      {/* Phone button - rechts onder */}
      <motion.a
        href="tel:+31612345678" // Replace with actual number
        className="fixed bottom-6 right-6 z-50 liquid-glass rounded-full p-3 shadow-xl"
        variants={buttonVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
        aria-label="Bel ons"
      >
        <Phone className="w-6 h-6 text-[var(--accent-primary)]" />
      </motion.a>
    </>
  );
};

export default StickyActions;
