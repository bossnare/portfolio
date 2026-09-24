'use client';

import { animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { useReveal } from '../../hooks/use-reveal';

export function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const { isInView, ref } = useReveal<HTMLSpanElement>({
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
