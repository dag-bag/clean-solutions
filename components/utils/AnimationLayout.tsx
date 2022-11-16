/** @format */

import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
};
function AnimationLayout({ children }: Props) {
  return (
    <motion.div
      layout
      exit={{ opacity: 0, transition: { duration: 0.6, ease: easing } }}
      variants={fadeInUp} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
    >
      {children}
    </motion.div>
  );
}

export default AnimationLayout;
