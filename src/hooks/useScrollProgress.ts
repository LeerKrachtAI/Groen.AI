// hooks/useScrollProgress.ts
import { useState, useEffect, RefObject } from 'react';
import { throttle } from '../utils/throttle';

export const useScrollProgress = (
  ref: RefObject<HTMLElement>,
  options?: { offset?: number; smoothing?: number }
) => {
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const offset = options?.offset || 0;
    
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress
      const start = -elementHeight + offset;
      const end = windowHeight - offset;
      const current = -rect.top;
      
      const rawProgress = (current - start) / (end - start);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      
      setProgress(clampedProgress);
      setIsInView(rect.top < windowHeight && rect.bottom > 0);
    };
    
    const throttledScroll = throttle(handleScroll, 16); // 60fps
    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [ref, options?.offset]);
  
  return { progress, isInView };
};
