// components/StickyActions.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageSquare, X } from 'lucide-react';

const StickyActions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="sticky-actions-container">
      {/* Contact Bubble */}
      <div className="chat-bubble-wrapper">
        <AnimatePresence>
        {isChatOpen && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="chat-popup liquid-glass"
            >
                <div className="chat-header">
                    <div className="flex items-center gap-3">
                        <img src="https://avatar.vercel.sh/sam" alt="Support" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold text-white">Sam van Groen.AI</p>
                            <p className="text-xs text-green-400">Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsChatOpen(false)}><X size={20} className="text-gray-400"/></button>
                </div>
                <div className="p-4 text-sm text-gray-200">
                    Hey! Kan ik je helpen met een vraag? Stel hem gerust hier.
                </div>
            </motion.div>
        )}
        </AnimatePresence>
        <motion.button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="contact-bubble"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageSquare size={28} className="text-white"/>
        </motion.button>
      </div>

      {/* Demo Button */}
      <motion.a 
        href="#contact"
        className="demo-button"
        whileHover="hover"
      >
        <motion.span variants={{ hover: { width: 'auto', opacity: 1, marginRight: '0.5rem' } }} className="demo-button-text">Plan een demo</motion.span>
        <Calendar size={24} />
      </motion.a>
    </div>
  );
};

export default StickyActions;