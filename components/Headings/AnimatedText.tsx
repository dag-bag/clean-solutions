/** @format */

import React from "react";
import { motion } from "framer-motion";
type Props = {
  children?: React.ReactNode;
  type: "paragraph" | "heading1" | "heading2";
  text: string;
};
// Word wrapper
const Wrapper = ({ children }: { children?: React.ReactNode }) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = ({ text, type }: Props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FF0088",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords: string[] = text?.split(" ");

  // Create storage array
  // @ts-ignore
  const words = [];

  // Push each word into words array
  // @ts-ignore
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <div>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {/* @ts-ignore */}
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                    className="text-[5rem] !text-white  font-bold"
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </div>
  );
};

export default AnimatedCharacters;
