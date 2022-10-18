/** @format */

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { stepAtom } from "../atoms/steps";
import Bold from "./utils/Bold";
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
  const page = useRecoilValue(stepAtom);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial
      animate="animate"
      className="bg2 md:bg1 h-[100vh] w-full grid md:grid-cols-2 text-center"
      style={{
        backgroundImage: "url(/bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center">
        <div className="relative w-[80%]    ">
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
      <div className="flex items-center justify-center p-16 flex-col space-y-4 mt-10">
        <h1 className="font-bold text-4xl ">
          <span className="text-blue-1">Clean</span>{" "}
          <span className="text-green-1">Solutions</span> Take Your <br /> Own
          Adventure Quiz
        </h1>
        <p className="font-semibold italic mb-10">
          Today’s world requires a <Bold> stronger</Bold> and safer response for
          disinfection.
        </p>

        <p className="hidden text-gray-800 md:mt-4 md:block">
          Discover easy ways to use VeriSan to defeat <Bold> 99.99% </Bold> of
          bacteria, viruses, mold, and odor. You can use it on hard and soft
          surfaces, food, plants, animals, skin, water, entire rooms, and much
          more.
        </p>
        <p className="hidden text-gray-800 md:mt-4 md:block">
          No organism tested has proven to be resilient. <br /> Kill{" "}
          <Bold> 99.99% </Bold>of ALL germs known to humankind.
        </p>
        <p className="hidden text-gray-800 md:mt-4 md:block">
          Your responses will aid in the creation of a custom, economical,
          eco-friendly EPA, NSF, NFPA FDA, CDC & FTC Cleared Solution containing
          OMRI Listed Ingredients.
        </p>

        <Link href="/quiz">
          <button className="bg-green-1 text-white px-10 py-5 text-3xl rounded-md ">
            {page === 0 ? "Start Quiz" : "Continue Quiz"}
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Main;
