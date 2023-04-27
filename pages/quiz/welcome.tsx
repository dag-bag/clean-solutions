import React from "react";
import Layout from "../../components/quiz-btn-layout";
import Router from "next/router";
import { motion } from "framer-motion";
import AnimationHeading from "../../components/AnimatedHeading";

const WaveAnimation = () => {
  return (
    <motion.div
      initial={{
        rotate: 10,
      }}
      animate={{
        rotate: 50,
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      }}
      className="inline-block px-2 md:text-[4rem]"
    >
      👋
    </motion.div>
  );
};

function WelcomePage() {
  function Next() {
    Router.push("get-email");
  }
  function Prevous() {
    Router.push("categories");
  }

  React.useEffect(() => {
    const Timeout = setTimeout(() => {
      Router.push("categories");
    }, 113900);
    return () => {
      clearTimeout(Timeout);
    };
  }, [Router]);

  return (
    <Layout onNext={Next} onPrevious={Prevous}>
      <div className="flex bg-green-1 items-center justify-center h-full px-10">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-center text-[1.5rem] md:text-[3rem] text-white font-medium">
            Hey!, Deepak <WaveAnimation />{" "}
          </h1>
          <AnimationHeading />
        </motion.div>
      </div>
    </Layout>
  );
}

export default WelcomePage;
