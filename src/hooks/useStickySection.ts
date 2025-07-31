// hooks/useStickySection.ts
import { useRef, useState, useEffect } from 'react';
import { useScrollProgress } from './useScrollProgress';

export const useStickySection = (duration: number = 2) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [stickyProgress, setStickyProgress] = useState(0);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const section = sectionRef.current;
    section.style.height = `${duration * 100}vh`;
    
    const inner = section.querySelector('.sticky-inner') as HTMLElement;
    if (inner) {
      inner.style.position = 'sticky';
      inner.style.top = '0';
      inner.style.height = '100vh';
      inner.style.overflow = 'hidden';
    }
  }, [duration]);
  
  const { progress } = useScrollProgress(sectionRef);
  
  useEffect(() => {
    setStickyProgress(progress);
  }, [progress]);
  
  return { sectionRef, progress: stickyProgress };
};
