/** @format */

import React from "react";
import { motion } from "framer-motion";
type Props = {
  Text: string;
  bold?: boolean;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
};

function H1({ Text, size, bold }: Props) {
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
      className={`${bold ? "font-bold" : "font-semibold"}   text-black ${
        size ? `text-${size}` : "text-5xl"
      }`}
    >
      {Text}
      {/* <span className="sm:block"> Increase Conversion. </span> */}
    </motion.h1>
  );
}

export default H1;
