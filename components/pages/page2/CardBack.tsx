/** @format */

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Flex from "../../utils/Flex";

type Props = {
  isSelected: boolean;
  title: string;
  text: string;
};

function CardBack({ isSelected, title, text }: Props) {
  return (
    <div className={` back sd shadow-lg rounded-3xl border-2  ${isSelected ? " border-green-1 bg-white" : "border-white bg-blue-1"}`}>
      <div className="flex  flex-col items-start">
        <p className={`${!isSelected ? "text-white" : "text-black"} font-normal text-xl text-center`}>
          {text}
        </p>
        <Flex className="flex-col">
          <button
            className={`${isSelected ? "bg-green-1 text-white" : "bg-white text-black"}text-white rounded-md py-2 mt-4  m-auto btn border-none btn-accent`}>
            {isSelected ? "Selected" : "Select"}
            {isSelected && (<AiOutlineCheckCircle className="text-2xl ml-2 text-white" />)}
          </button>
        </Flex>
      </div>
    </div>
  );
}

export default CardBack;
