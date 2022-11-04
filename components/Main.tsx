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
const labelImgs: string[] = [
  "./label-icons/bigstock-green-earth-and-leaves-14539535.png",

  "./label-icons/ICONS.png",

  "./label-icons/Non-Toxic-Icon.png",
  "./label-icons/OMRI-logo-NEW.png",
  "./label-icons/pngguru.com.png",
  "./label-icons/pngwing.com.png",
  "./label-icons/SeekPng.com_support-our-troops-png_5841661.png",
];
function Main({}: Props) {
  const page = useRecoilValue(stepAtom);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial
      animate="animate"
      className=" bg-white h-[100vh] w-full grid md:grid-cols-2  overflow-hidden"
      // style={{
      //   backgroundImage: "url(/bg.png)",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="absolute -top-2 -left-5">
        <Image src="/1.svg" alt="" className="w-60" height={200} width={200} />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="./icons/2.svg" alt="" className="w-60" />
      </div>
      <div className="absolute -top-10 -right-6">
        <img src="./icons/1.svg" alt="" className="w-[35rem]" />
      </div>
      <div className="flex justify-center items-center absolute bottom-10 left-0 border-[6px] border-l-0 border-blue-1 w-[30rem] h-[5rem] rounded-r-full space-x-3">
        {labelImgs.map((img, i) => {
          return (
            <img src={img} alt="" className="w-12 h-12 object-cover" key={i} />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-[80%]    md:ml-20">
          <Image
            src="/element.png"
            layout="responsive"
            className="absolute"
            objectFit="cover"
            width={150}
            height={100}
          />
        </div>
      </div>

      <div className="flex items-start justify-center p-16 flex-col space-y-4 mt-10">
        <h1 className="font-bold text-4xl ">
          <span className="text-blue-1">Clean</span>{" "}
          <span className="text-green-1">Solutions</span> Take Your <br /> Own
          Adventure Quiz
        </h1>
        <p className="text-lg italic mb-10">
          Today’s world requires a <Bold> stronger</Bold> and safer response for
          disinfection.
        </p>

        <p className="hidden text-gray-800 md:mt-4 md:block leading-7">
          Discover easy ways to use VeriSan to defeat <Bold> 99.99% </Bold> of
          bacteria, viruses, mold, and odor. You can use it on hard and soft
          surfaces, food, plants, animals, skin, water, entire rooms, and much
          more.
        </p>
        <p className="hidden text-gray-800 md:mt-4 md:block leading-7">
          No organism tested has proven to be resilient. Kill{" "}
          <Bold> 99.99% </Bold>of ALL <br /> germs known to humankind.
        </p>
        <p className="hidden text-gray-800 md:mt-4 md:block leading-7">
          Your responses will aid in the creation of a custom, economical,
          eco-friendly EPA, NSF, NFPA FDA, CDC & FTC Cleared Solution containing
          OMRI Listed Ingredients.
        </p>
        <div className="flex items-center justify-center w-full">
          <Link href="/quiz">
            <button className="bg-green-1 text-white px-14 py-5 text-3xl rounded-md font-semibold italic">
              {page === 0 ? "Start Quiz" : "Continue Quiz"}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
