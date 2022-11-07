/** @format */

import React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import truncate from "../../libs/Truncate";
import Modal from "../modal/Modal";
import Flex from "../utils/Flex";
import Svg from "../utils/Svg";

type Props = {
  svgs: string[];
  title: string;
  description: string;
  modalText: string;
  onClick: () => void;
  buttonClick?: (e: any) => void;
  Data: any;
};

function Card2({
  svgs,
  title,
  description,
  modalText,
  onClick,
  buttonClick,
  Data,
}: Props) {
  const isSelected = Data.page3.data.find((i: any) => i.title === title);
  return (
    <div
      className={`p-1 lg:w-full m-auto  md:w-full  cursor-pointer  rounded-3xl ${
        isSelected ? "border-4 border-green-1" : ""
      } `}
      onClick={onClick}
    >
      <div className="flex  rounded-3xl bg-white  px-5 py-4 sm:flex-row flex-col shadow-lg">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-xl title-font font-bold mb-3">
            {title}
          </h2>
          <p className="leading-relaxed text-[15px] text-Center">
            {truncate(description, 160)}
            {/* {description} */}
          </p>

          <a
            href="#my-modal-3"
            className=" modal-button mt-3 bg-green-1 text-white inline-flex items-center px-3 py-2 rounded-md my-4 cursor-pointer"
            onClick={buttonClick}
          >
            Read More.
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <Modal />
          <Flex className="space-x-4 ">
            {svgs.slice(0, 3).map((src, index) => {
              return <Svg src={src} key={index} h="h-8" w="w-8" />;
            })}
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default Card2;
