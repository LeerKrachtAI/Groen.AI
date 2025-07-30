import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FormInput = ({ id, label, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{label}</label>
    <input id={id} {...props} className="form-input" />
  </div>
);

const FormSelect = ({ id, label, children, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{label}</label>
    <select id={id} {...props} className="form-input">
      {children}
    </select>
  </div>
);

const Contact = () => {
  const { ref } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 1000)); // Simulate API call
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="flex items-center justify-center">
        <div className="luxury-container">
          <div className="liquid-glass luxury-shadow-sm rounded-3xl p-8 md:p-16 text-center max-w-2xl mx-auto">
            <CheckCircle className="w-16 h-16 text-[var(--accent-secondary)] mx-auto mb-6" />
            <h2 className="text-3xl font-light text-[var(--text-primary)] mb-4">Bedankt!</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={ref} className="fade-in-scroll">
      <div className="luxury-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] text-balance mb-6">
            Klaar voor praktische AI?
            <br />
            <span className="text-gradient">Plan een gesprek.</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Vertel ons over je situatie, dan bespreken we welke AI-tools direct impact hebben op jouw dagelijkse workflow.
          </p>
        </div>

        <div className="liquid-glass luxury-shadow-sm rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormInput id="name" name="name" label="Naam" type="text" placeholder="Je naam" required onChange={handleChange} />
              <FormInput id="email" name="email" label="Email" type="email" placeholder="je@email.com" required onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Bericht</label>
              <textarea id="message" name="message" rows={4} placeholder="Vertel ons kort over je grootste uitdaging..." required onChange={handleChange} className="form-input" />
            </div>
            <div className="text-right">
              <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
                {isSubmitting ? 'Versturen...' : 'Verstuur & Plan Gesprek'}
                <Send className="w-5 h-5 ml-2" />
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-12 text-sm text-[var(--text-secondary)] space-x-8">
            <a href="tel:+31612345678" className="inline-flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
              <Phone className="w-4 h-4" /> 06 - 12345678
            </a>
            <a href="mailto:info@groen.ai" className="inline-flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
              <Mail className="w-4 h-4" /> info@groen.ai
            </a>
        </div>
      </div>
      <style jsx>{`
        .form-input {
          width: 100%;
          background-color: var(--glass-bg-secondary);
          border: 1px solid var(--glass-border-color);
          border-radius: 0.75rem;
          padding: 12px 16px;
          color: var(--text-primary);
          transition: all 0.3s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-primary) 20%, transparent);
        }
        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s var(--ease-premium);
          display: inline-flex;
          align-items: center;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(13, 79, 60, 0.35);
        }
      `}</style>
    </section>
  );
};

export default Contact;