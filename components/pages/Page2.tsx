/** @format */

import React from "react";
import { atom, useRecoilValue } from "recoil";
import { page1DataAtom } from "../../atoms/data";
import Card from "../test/Cart";
import H1 from "../Headings/H1";
import P from "../para/P";
import Flex from "../utils/Flex";
import Card2 from "../test/Card2";
import Card3 from "../test/Card3";
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
      <div className="absolute -top-28 -left-14 hidden md:block">
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
      </div>
      <Flex
        className="flex-col space-y-8 items-center   p-4 md:p-0 md:pt-16"
        height="auto"
      >
        <div className="flex w-full mx-auto text-left  mt-10 md:mt-0">
          <div className="relative inline-flex  mx-auto align-middle">
            <div className="text-center">
              <h1 className=" md:max-w-5xl text-3xl font-bold leading-none tracking-tighter text-neutral-900 md:text-5xl lg:text-5xl lg:max-w-7xl">
                Hi, {page1Data.name} Welcome to
                <span className="text-green-1 mx-2">Clean</span>
                <span className="text-blue-1">Solutions.</span>
              </h1>
              <p
                className=" mb-8 md:mb-4
             md:leading-10 mt-3 md:text-2xl text-lg"
              >
                Tired of using so many different, bulky cleaning products for
                every job?
              </p>
              <p className="  text-xl md:leading-10 font-bold  md:mt-0 md:text-3xl bg-green-1 text-white md:p-4  p-3 rounded-md">
                {"Please select all that interest you".toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 w-full md:w-[80%] mx-auto place-items-center overflow-hidden overflow-y-scroll  h-[50vh] md:h-auto pb-20">
          {data.map((item, index) => {
            return <Card3 key={index} {...item} index={index} />;
          })}
        </div>
      </Flex>
    </>
  );
}

export default Page2;
