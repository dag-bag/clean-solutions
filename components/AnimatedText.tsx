import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props: any) => {
    // We'll do this to prevent wrapping of words using CSS
    return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap: any = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props: any) => {
    // Framer Motion variant object, for controlling animation
    const item = {
        hidden: {
            y: "200%",
            // color: "#FF0088",    
            rotate: 200,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            // color: "#518CA4",    
            rotate: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    //  Split each word of props.text into an array
    const splitWords = props.text.split(" ");

    // Create storage array
    const words: any = [];

    // Push each word into words array
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    // Add a space ("\u00A0") to the end of each word
    words.map((word: any) => {
        return word.push("\u00A0");
    });

    // Get the tag name from tagMap
    const Tag = tagMap[props.type];

    console.log(Tag)

    return (
        <h1 className="text-black text-center ">

            {words.map((word: string, index: number) => {
                return (
                    // Wrap each word in the Wrapper component
                    <Wrapper key={index}>
                        {words[index].flat().map((element: any, index: any) => {
                            return (
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block"
                                    }}
                                    key={index}>
                                    <motion.span
                                        className={` ${Tag == 'h1'
                                            ? 'xl:text-[70px] md:text-[50px] text-[35px] font-[600] text-blue-1'
                                            : Tag == 'h2'
                                                ? 'xl:text-[50px] md:text-[30px] text-[20px] font-[500] text-gray-500'
                                                : 'xl:text-[20px] md:text-[20px]  text-[15px] font-[400] text-black'}
                                                 `}
                                        style={{ display: "inline-block" }}
                                        variants={item}>
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </h1 >
    );
};

export default AnimatedCharacters;
