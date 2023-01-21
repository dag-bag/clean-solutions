/** @format */
import Link from "next/link";
import { useState } from "react";
import Btn from "../../utils/Btn";
import Div from "../../animation/Div";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../Headings/test/AnimatedText";

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

  const [isViewMoreEnabled, toggleViewMoreEnabled] = useState(false)
  function onViewMoreBtnHandler() {
    toggleViewMoreEnabled(prev => !prev)
  }

  return (
    <>
      <Div className=" flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen bg-blue-1 text-white relative">
        <div className=" flex flex-col items-start w-full max-w-xl px-4 mx-auto xl:px-10 xl:max-w-[92%] text-center ">
          <div className="mb-16 lg:mt-20 xl:my-52 xl:mt-20 xl:max-w-3xl lg:pr-5 ">
            <AnimatedTextWord
              maxW="max-w-3xl"
              text=" Clean Tech Solutions"
              className="hollow mb-4 text-center text-5xl md:text-[4rem] text-white md:mb-12"
            ></AnimatedTextWord>

            <div className=" border-red-500 flex items-center justify-center flex-col">
              <AnimatedTextWord
                text="Take Your Own Adventure Quiz"
                className="text-5xl font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[4.5rem] text-center font-heading"
              />
              <AnimatedTextWord
                className="text-base  md:text-md my-7 text-gray-200"
                text={`Use it on hard and soft surfaces, food, plants, animals, skin, water, entire rooms, and much more. No organism tested has proven to be resilient. Kill 99.99% of ALL germs known to humankind. ${isViewMoreEnabled ? `Discover the many ways to use to defeat bacteria, viruses, mold, and odor.Your responses will aid in the creation of a custom, economical, eco-frienly EPA, NSF, NFPA FDA, CDC & FTC Cleared Disinfecting Solution.` : ''}`}
              />
            </div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center  md:flex-row justify-center">
              <Link href={"/quiz"}>
                <Btn />
              </Link>

              <button onClick={onViewMoreBtnHandler} className="md:inline-flex block w-full md:w-auto items-center justify-start py-4 px-10 overflow-hidden font-semibold text-green-1 transition-all duration-150 ease-in-out rounded-full hover:pl-10  bg-none group border border-green-1  mx-5 my-2 md:my-0 ">Read More</button>

            </motion.div>
            <div className="mt-8 pt-8 border-t border-gray-300 ">
              <div className="mt-2 flex gap-6 justify-center items-center">

                {TrustedIcons.map((icon) => <div className="flex items-center">
                  <img
                    className=" w-24 h-auto "
                    src={`./label-icons/${icon}.png`}
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>)}

              </div>
            </div>
          </div>
        </div>

        <div className="w-[45%] absolute right-0 -bottom-[15rem] hidden xl:block">
          <motion.img
            alt="main-image"
            exit={{ opacity: 0 }}
            src="./sanitizer-quiz2.png"
            transition={{ delay: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            className="object-cover  w-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full "
          />
        </div>
      </Div>
    </>

  );
};
export default Main;

