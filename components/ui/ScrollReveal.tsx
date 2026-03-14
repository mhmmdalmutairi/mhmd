"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children:   ReactNode;
  delay?:     number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?:      boolean;
}

const variants: Record<string, Variants> = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children,
  delay     = 0,
  direction = "up",
  className,
  once      = true,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    threshold:   0.1,
    triggerOnce: once,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
