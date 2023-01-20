/** @format */

import React from "react";
import { motion } from "framer-motion";
import { dropUpVariants } from "../../animation/anime";

type Props = {
  error: string | any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  value: string;
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
};

function Input({ onChange, error, value }: Props) {
  return (
    <motion.input
      variants={dropUpVariants}
      autoComplete="off"
      type="text"
      className={`bg-white border-4 placeholder:px-2    outline-none py-5
px-5 w-[30%] ${
        error ? "border-red-400" : "border-green-1 focus:border-green-1"
      }`}
      id="value"
      name="value"
      placeholder="Enter your answer"
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
