/** @format */

import { motion } from "framer-motion";
import Link from "next/link";
import Div from "../animation/Div";

import Btn from "../utils/Btn";
import Drawer from "../utils/Drawer";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
};
const Main3 = () => {
  return (
    <>
      <Div
        className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen bg-blue-1
        text-white"
      >
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-[92%] text-center">
          <div className="mb-16 lg:my-52 lg:mt-20 lg:max-w-3xl lg:pr-5 ">
            <motion.h1
              variants={fadeInUp}
              className="hollow mb-4 text-center text-5xl md:text-[4rem] text-white md:mb-12
          "
            >
              Clean Tech Solutions
            </motion.h1>
            <div className="max-w-xl flex justify-center items-center flex-col mb-6 text-center m-auto">
              {/* <h1 className="hollow text-center  text-5xl text-white">
              Clean Tech Solutions
            </h1>
            <h1 className="hollow text-center  text-5xl text-white">
              Clean Tech Solutions
            </h1> */}

              {/* <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Colaboration
              </p>
            </div> */}
              <motion.h2
                variants={fadeInUp}
                className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight  sm:text-5xl sm:leading-none lg:text-5xl xl:text-[4rem] xl:mb-6"
              >
                Take Your Own <br className="hidden md:block" /> Adventure Quiz
                {/* The quick, brown fox */}
                {/* <br className="hidden md:block" />
              jumps over <span className="inline-block ">a lazy dog</span> */}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base  md:text-lg">
                Today’s world requires a stronger and safer response for
                disinfection. Use it on hard and soft surfaces, food, plants,
                animals, skin, water, entire rooms, and much more.
              </motion.p>
            </div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center  md:flex-row justify-center md:space-x-8"
            >
              <Link href={"/quiz"}>
                <Btn />
                {/* <a
                className="inline-flex  items-center justify-center  h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200  shadow-md md:w-auto md:mr-4 md:mb-0 bg-green-1 btn btn-wide hover:bg-white hover:!border-green hover:text-green-1 focus:shadow-outline focus:outline-none border border-white 
              rounded-full
              "
              >
                Start Quiz
              </a> */}
              </Link>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700 "
              >
                Learn more
              </a>
            </motion.div>
            <div className="mt-8 pt-8 border-t border-gray-300 ">
              <h6 className="text-lg text-green-800 dark:text-green-400 font-semibold">
                Trusted by
              </h6>
              <div className="mt-2 flex gap-6">
                <div className="flex items-center">
                  <img
                    className=" w-28 h-auto "
                    src="./label-icons/EPA-ICON.png"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-28 h-auto "
                    src="https://tailus.io/sources/blocks/horse/preview/images/clients/lifegroups.png"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-28 h-auto dark:grayscale"
                    src="https://tailus.io/sources/blocks/horse/preview/images/clients/lilly.png"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="-hue-rotate-30 w-28 h-auto dark:grayscale"
                    src="https://tailus.io/sources/blocks/horse/preview/images/clients/microsoft.png"
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-[70%] lg:max-w-full lg:absolute xl:px-0 md:-right-[25rem] md:-bottom-[10rem]">
          <motion.img
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="./sanitizer-quiz.png"
            alt=""
          />
        </div>
      </Div>
    </>
  );
};
export default Main3;
