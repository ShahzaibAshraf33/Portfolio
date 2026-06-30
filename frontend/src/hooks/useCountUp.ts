import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const useCountUp = (end: number, duration: number = 1500) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 40;
    const increment = Math.max(1, Math.ceil(end / steps));
    const timer = setInterval(() => {
      current = Math.min(current + increment, end);
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { ref, count };
};
