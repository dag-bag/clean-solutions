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
      className="relative"
    >
      <a className="btn btn-ghost normal-case text-xl absolute top-5 left-5 bg-white hidden md:block">
        <img
          src="https://cleansolutions.tech/wp-content/uploads/2022/09/clean-solution-logo-1024x337-1-2.png"
          alt=""
          className="h-10"
        />
      </a>
      {children}
    </motion.div>
  );
}

export default AnimationLayout;
