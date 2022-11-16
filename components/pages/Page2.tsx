/** @format */

import React from "react";
import { atom, useRecoilValue } from "recoil";
import { page1DataAtom } from "../../atoms/data";
import { motion } from "framer-motion";
import Flex from "../utils/Flex";

import Card3 from "../test/Card3";
import { childVariants, containerVariants } from "../../animation/anime";

export const selectedCardIdsAtom = atom<number[]>({
  key: "selectedCardIdsAtom",
  default: [],
});

type Props = {};

function Page2({}: Props) {
  const data = [
    {
      title: "SKIN CONTACT",
      svgs: [
        "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      ],

      text: "You can contact us whenever you need help or just curious about something.",
    },
    {
      title: "WATER TREATMENT",
      svgs: [
        "https://cleansolutions.tech/wp-content/uploads/2022/09/skin-care-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      ],

      text: "Control parasites, slime, sludge, and harmful pathogens to ensure clean, safe water.      ",
    },

    {
      title: "HOME AND GARDEN",
      svgs: [
        "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      ],

      text: "All-in-one sanitizer, disinfectant, and deodorizer for humans, pets, plants, and food.",
    },

    {
      title: "TRAVEL AND LEISURE",
      svgs: [
        "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      ],

      text: "A compact solution for traveling, camping, auto, RV, bus, aircraft, and marine decontamination.",
    },

    {
      title: "PROFESSIONAL USE",

      svgs: [
        "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      ],

      text: "From factories to pharmacies, businesses to bus lines, reach every crack and crevice.",
    },
    {
      title: "FARM AND RANCH",
      svgs: [
        "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
        "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      ],

      text: "Use one eco-friendly sanitizer for vegetation, animals, raw foods, tools, and more. ",
    },
  ];
  const page1Data = useRecoilValue(page1DataAtom);
  return (
    <>
      <div
        className="hero min-h-screen place-items-start md:place-items-center"
        style={{ backgroundImage: `url("./page1.png")` }}
      >
        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        {/* <div className="absolute -top-28 -left-14 hidden md:block">
        <img src="1.svg" alt="" className="w-[25rem] " />
      </div>
      <div className="absolute -bottom-14 -right-14 hidden md:block">
        <img src="./icons/2.svg" alt="" className="w-[25rem]" />
      </div>
      <div className="absolute -top-14 -right-6 hidden md:block">
        <img src="./icons/1.svg" alt="" className=" md:w-[35rem]" />
      </div>
      <div className="absolute -bottom-[6rem] -left-4 hidden md:block">
        <img src="./icons/4.svg" alt="" className="w-[30rem]" />
      </div> */}
        <Flex
          className="flex-col space-y-8 items-center   p-4 md:p-0 md:pt-12 scrollbar-hide"
          height="auto"
        >
          <div className="flex w-full mx-auto text-left  mt-10 md:mt-0">
            <div className="relative inline-flex  mx-auto align-middle">
              <div className="text-center">
                <p
                  className="  text-xl md:leading-10 font-bold  md:mt-0 md:text-3xl bg-white text-blue-1 md:px-14  p-3 rounded-full border-4 border-green-1 uppercase md:min-w-[34rem] px-5
"
                >
                  Please select all that interest you
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 w-full md:w-[85%] mx-auto place-items-center overflow-hidden overflow-y-scroll  h-[70vh] md:h-auto pb-20 scrollbar-hide"
            variants={childVariants(0.1)}
            initial="hidden"
            animate="visible"
          >
            {data.map((item, index) => {
              return <Card3 key={index} {...item} index={index} />;
            })}
          </motion.div>
        </Flex>
      </div>
    </>
  );
}

export default Page2;
