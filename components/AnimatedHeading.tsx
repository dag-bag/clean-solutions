/** @format */
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
    const userName = useRecoilValue(quizPage)

    const [replay, setReplay] = useState(true);

    // Placeholder text data, as if from API
    const placeholderText: Placeholder[] = [
        { type: "heading1", text: `Hyy, ${userName}` },
        {
            type: "heading2",
            text: "Welcome to Clean Tech Solutions",
        },
        {
            type: "heading3",
            text: "Tired of using so many different, bulky cleaning products for every job?",
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
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
            className="p-5 md:p-0"
        >
            <div className="container">
                {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                })}
            </div>
        </motion.div>
    );
}