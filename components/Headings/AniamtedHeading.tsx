/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useRecoilValue } from "recoil";
import { page1DataAtom } from "../../atoms/data";
// import "./styles.css";
interface Placeholder {
  type: "heading2" | "heading1" | "paragraph";
  text: string;
}
export default function AnimationHeading() {
  const name = useRecoilValue(page1DataAtom);
  const [replay, setReplay] = useState(true);

  // Placeholder text data, as if from API
  const placeholderText: Placeholder[] = [
    { type: "heading1", text: `Hi ${name.name}` },
    {
      type: "heading2",
      text: "Welcome to Clean Tech Solutions",
    },
    {
      type: "heading2",
      text: "Hello",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
