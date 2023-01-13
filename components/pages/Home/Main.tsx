/** @format */

import { motion } from "framer-motion";
import Link from "next/link";
import Div from "../../animation/Div";
import AnimatedTextWord from "../../Headings/test/AnimatedText";
import Btn from "../../utils/Btn";
import HomeModal from "./HomeModal";

let easing = [0.6, -0.05, 0.01, 0.99];

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
const TrustedIcons = [
  "bigstock-green-earth-and-leaves-14539535",
  "Non-Toxic-Icon",
  "pngguru.com",
  "pngwing.com",
  "SeekPng.com_support-our-troops-png_5841661",
];
const Main = () => {
  return (
    <>
      <Div
        className=" flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen bg-blue-1
        text-white relative"
      >
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-[92%] text-center">
          <div className="mb-16 lg:my-52 lg:mt-20 lg:max-w-3xl lg:pr-5 ">
            <AnimatedTextWord
              text=" Clean Tech Solutions"
              maxW="max-w-3xl"
              className="hollow mb-4 text-center text-5xl md:text-[4rem] text-white md:mb-12
          "
            ></AnimatedTextWord>

            <div className="max-w-xl flex justify-center items-center flex-col mb-6 text-center m-auto">
              <AnimatedTextWord
                text=" Take Your Own Adventure Quiz"
                className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight  sm:text-5xl sm:leading-none lg:text-5xl xl:text-[4rem] xl:mb-6"
              />
              <AnimatedTextWord
                text=" Today’s world requires a stronger and safer response for
                disinfection. Use it on hard and soft surfaces, food, plants,
                animals, skin, water, entire rooms, and much more."
                className="text-base  md:text-lg"
              ></AnimatedTextWord>
            </div>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center  md:flex-row justify-center "
            >
              <Link href={"/quiz"}>
                <Btn />
              </Link>
              <HomeModal />
            </motion.div>
            <div className="mt-8 pt-8 border-t border-gray-300 ">
              <div className="mt-2 flex gap-6 justify-center items-center">
                {TrustedIcons.map((icon, index) => {
                  return (
                    <div className="flex items-center">
                      <img
                        className=" w-24 h-auto "
                        src={`./label-icons/${icon}.png`}
                        width={50}
                        height={20}
                        alt="logo partener"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[45%]  absolute right-0  -bottom-[15rem] hidden md:block">
          <motion.img
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="object-cover  w-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="./sanitizer-quiz2.png"
            alt=""
          />
        </div>
      </Div>
    </>
  );
};
export default Main;
