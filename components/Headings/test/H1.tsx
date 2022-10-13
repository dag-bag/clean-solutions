/** @format */

import React from "react";
import { motion } from "framer-motion";
type Props = {
  Text: string;
};

function H1({ Text }: Props) {
  return (
    <motion.h1
      initial={{
        y: 60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.48, 0.15, 0.25, 0.96],
        },
      }}
      className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
    >
      {Text}
      {/* <span className="sm:block"> Increase Conversion. </span> */}
    </motion.h1>
  );
}

export default H1;
