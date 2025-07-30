import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import ChaosToClarity from './components/ChaosToClarity';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Expertise from './components/Expertise';
import Stats from './components/Stats';
import Process from './components/Process';
import FAQ from './components/FAQ';
import ComparisonTable from './components/ComparisonTable';
import TestimonialSlider from './components/TestimonialSlider';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import StickyActions from './components/StickyActions';

function App() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrollY = window.scrollY;
        const pageHeight = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / pageHeight;
        // Animate the background up to 50% of its total scrollable height (300vh - 100vh = 200vh)
        // This creates a slow, subtle parallax effect.
        bgRef.current.style.transform = `translateY(-${scrollFraction * (bgRef.current.clientHeight - window.innerHeight)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={bgRef} className="dynamic-gradient-background" />
      <div className="gradient-overlay" />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <ChaosToClarity />
          <Solutions />
          <CaseStudies />
          <Expertise />
          <Stats />
          <Process />
          <TestimonialSlider />
          <ComparisonTable />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <StickyActions />
      </div>
    </>
  );
}

export default App;