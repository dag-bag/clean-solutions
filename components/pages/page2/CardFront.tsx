/** @format */

import React from "react";
import Flex from "../../utils/Flex";

type Props = {
  isSelected: boolean;
  svgs: any;
  title: string;
  text: string;
  l: boolean;
};

function CardFront({ isSelected, svgs, title, text, l }: Props) {
  return (
    <div
      className={`front flex-col justify-center items-center  shadow-2xl rounded-3xl ${
        isSelected ? " bg-white border-green-1" : "border-white bg-blue-1"
      }   transition-all duration-200 ease-in-out z-50  
  group    rounded-3xl   px-8 py-4 text-center shadow-2xl shadow-gray-600/10 
     border-4 
  `}
    >
      <Flex className="space-x-8">
        {svgs.map((Icon: any, index: number) => {
          return (
            <span
              className={`${
                isSelected ? "bg-green-1" : "bg-white"
              } rounded-full p-3  inline-flex justify-center items-center`}
            >
              <Icon
                key={index}
                className={` ${l ? "w-16" : "w-10"} ${
                  l ? "h-16" : "h-10"
                }  bg-transparent flex justify-center items-center`}
                color={isSelected ? "#000000" : "#000000"}
              />
            </span>
          );
        })}
      </Flex>
      <h2
        className={`card-title ${
          !isSelected ? "bg-white text-black" : "bg-green-1 "
        } rounded-full px-3 py-1 my-6`}
      >
        {title}
      </h2>

      <p
        className={`${
          !isSelected ? "text-white" : "text-black"
        } font-normal text-base`}
      >
        {text}
      </p>
    </div>
  );
}

export default CardFront;
