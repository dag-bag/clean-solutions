/** @format */

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Flex from "./utils/Flex";
// import Loader from "./Loader";
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <Flex>
      {" "}
      <motion.div
        className="rangeen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Welcome to Medicine Corner</h2>
        <Link href="/authors">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="round-full px-3 py-2"
          >
            Start Quiz
          </motion.button>
        </Link>
        {/* <Loader /> */}
      </motion.div>
    </Flex>
  );
};

export default Home;
