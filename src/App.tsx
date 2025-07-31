import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';
import DubbeledrukSection from './components/DubbeledrukSection';
import StatsSection from './components/StatsSection';
import SolutionsSection from './components/SolutionsSection';
import ProcessSection from './components/ProcessSection';
import FAQ from './components/FAQ';


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
          <DubbeledrukSection />
          <StatsSection />
          <SolutionsSection />
          <ProcessSection />
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