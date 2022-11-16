/** @format */

import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function A({ children, onClick, className }: Props) {
  let aClasses = ` ${className}`;
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={aClasses}
    >
      {children}
    </motion.a>
  );
}

export default A;
