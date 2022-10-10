/** @format */

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
type Props = {};
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
};
function Main({}: Props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial
      animate="animate"
      className="bg2 md:bg1 h-[100vh] w-full grid md:grid-cols-2 text-center"
    >
      <div className="flex justify-center items-center">
        <div className="relative w-[70%]    ">
          <Image
            src="/page.png"
            layout="responsive"
            className="absolute"
            objectFit="cover"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-16 flex-col space-y-8">
        <h1 className="font-bold text-4xl ">
          Clean Solutions <br /> Take Your Own Adventure Quiz
        </h1>
        <p className="max-w-sm">
          Today’s world requires a stronger and safer response for disinfection.
          Discover easy ways to apply chlorine dioxide on skin contact, hard and
          soft surfaces, animals, food, plants, water, or fogging entire rooms
          for odor and kill 99.99% of bacteria, viruses, mold, and more
        </p>
        <button className="bg-[#2dd4bf] text-white px-8 py-5 text-2xl rounded-md">
          Start Quiz
        </button>
      </div>
      {/* Container for demo purpose */}
      {/* <section className=" text-white">
        <motion.div
          variants={fadeInUp}
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
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              variants={fadeInUp}
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </motion.h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={"/quiz"}>
                <a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                  Start Quiz
                </a>
              </Link>
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* Container for demo purpose */}
    </motion.div>
  );
}

export default Main;
