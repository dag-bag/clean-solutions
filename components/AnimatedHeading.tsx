import { quizPage } from "../pages/quiz";
import { useRecoilValue } from "recoil";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface Placeholder {
  type: "heading2" | "heading1" | "paragraph" | "heading3";
  text: string;
}

export default function AnimationHeading() {
  const userName = useRecoilValue(quizPage);
  const [replay, setReplay] = useState(true);

  // Placeholder text data, as if from API
  const placeholderText: Placeholder[] = [
    { type: "heading1", text: `Welcome to Clean Solutions.` },
    {
      type: "heading3",
      text: `Tired of using so many different, bulky cleaning products for every job?`,
    },
  ];

  const container = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
      className="p-5 md:p-0"
    >
      <div className="container">
        {placeholderText.map((placeholder, index) => {
          return (
            <motion.div key={index} variants={itemVariants} custom={index}>
              <AnimatedText {...placeholder} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
