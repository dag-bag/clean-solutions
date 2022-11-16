/** @format */

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation/anime";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Div({ children, className }: Props) {
  const divClasess = `  ${className}`;
  return (
    <motion.div
      className={divClasess}
      initial="hidden"
      animate="enter"
      transition={{ duration: 0.6 }}
      // Pass the variant object into Framer Motion
      // Set the initial state to variants.hidden
      // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      // transition={{ type: "linear" }}

      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}

export default Div;
