import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * A performance-optimized parallax hook using Framer Motion.
 * It links an element's vertical position to the scroll progress within a target container.
 *
 * @param speedFactor A number that determines the parallax effect's intensity.
 *        - A value between 0 and 1 will make the element move slower than the scroll (appears to move up).
 *        - A value greater than 1 will make it move faster.
 *        - A negative value will make it move in the opposite direction.
 *        Default is 0.3.
 * @returns A ref to attach to the container element and a style object to apply to the parallaxed element.
 */
export const useParallax = (speedFactor: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  // Use the scroll progress of the `ref` container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Track from when the top of the container enters the bottom of the viewport to when the bottom of the container leaves the top.
  });

  // Transform the scroll progress (0 to 1) into a vertical movement.
  // We use percentages to make it responsive. A range of -10% to 10% is a subtle effect.
  const y = useTransform(scrollYProgress, [0, 1], [`${-50 * speedFactor}%`, `${50 * speedFactor}%`]);

  return { ref, style: { y } };
};

/*
  EXAMPLE USAGE:
  The component using this hook should use framer-motion's `motion.div`.

  import { motion } from 'framer-motion';
  import { useParallax } from '../hooks/useParallax';

  const ParallaxComponent = () => {
    // The ref should be on the parent/container to define the scroll area.
    const { ref, style } = useParallax(0.3);

    return (
      <div ref={ref} className="h-[150vh] relative"> // Container needs a height
        <motion.div
          className="absolute top-1/2 left-1/2" // The element to be animated
          style={style}
        >
          Parallax Content
        </motion.div>
      </div>
    );
  }
*/