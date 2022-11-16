/** @format */

import React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import truncate from "../../libs/Truncate";
import A from "../animation/A";
import Modal from "../modal/Modal";
import Flex from "../utils/Flex";
import Svg from "../utils/Svg";
import { motion } from "framer-motion";

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
  return !isSelected ? (
    <A
      className={`p-1 lg:w-full m-auto  md:w-full  cursor-pointer  rounded-3xl `}
      onClick={onClick}
    >
      <motion.div
        key={isSelected}
        initial={{
          border: "4px solid #95D074",
          opacity: 0,
          backgroundColor: "#fff",
        }}
        animate={{
          backgroundColor: isSelected ? "#95D074" : "#fff",
          opacity: 1,
          border: isSelected ? "4px solid #fff" : "4px solid #95D074",
        }}
        className={`flex  rounded-3xl   px-5 py-4 sm:flex-row flex-col shadow-lg  ${
          isSelected ? "border-4 border-green-1" : ""
        } text-left`}
      >
        <div className="flex-grow">
          <motion.h2
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
            className="text-gray-900 text-xl title-font font-bold mb-3"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
            className="leading-relaxed text-[15px] "
          >
            {truncate(description, 160)}
            {/* {description} */}
          </motion.p>
          <Flex>
            <motion.a
              initial={{
                x: -100,
              }}
              animate={{
                x: 0,
                background: isSelected ? "#fff" : "#95D074",
                color: isSelected ? "#000" : "#fff",
              }}
              href="#my-modal-3"
              className=" modal-button mt-3 !text-xs bg-green-1 text-white inline-flex items-center px-2 py-2 rounded-md my-4 cursor-pointer"
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
            </motion.a>

            <Flex className="space-x-4 ">
              {svgs.slice(0, 3).map((src, index) => {
                return <Svg src={src} key={index} h="h-8" w="w-8" />;
              })}
            </Flex>
          </Flex>
          <motion.h5
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
          >
            {isSelected ? "Box Selected" : "Click to Select"}
          </motion.h5>
        </div>
      </motion.div>
    </A>
  ) : (
    <A
      className={`p-1 lg:w-full m-auto  md:w-full  cursor-pointer  rounded-3xl `}
      onClick={onClick}
    >
      <motion.div
        key={isSelected}
        initial={{
          border: "4px solid #95D074",
          opacity: 0,
          backgroundColor: "#fff",
        }}
        animate={{
          backgroundColor: isSelected ? "#95D074" : "#fff",
          opacity: 1,
          border: isSelected ? "4px solid #fff" : "4px solid #95D074",
        }}
        className={`flex  rounded-3xl   px-5 py-4 sm:flex-row flex-col shadow-lg  ${
          isSelected ? "border-4 border-green-1" : ""
        } text-left min-h-[250px]`}
      >
        <div className="flex-grow">
          <motion.h2
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
            className="text-gray-900 text-xl title-font font-bold mb-3"
          >
            {title}
          </motion.h2>
          {/* <motion.p
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
            className="leading-relaxed text-[15px] "
          >
            {truncate(description, 160)}
         
          </motion.p> */}
          <>
            <motion.a
              initial={{
                x: -100,
              }}
              animate={{
                x: 0,

                background: isSelected ? "#fff" : "#95D074",
                color: isSelected ? "#000" : "#fff",
              }}
              href="#my-modal-3"
              className=" modal-button btn-wide mt-3 !text-xs bg-green-1 text-white inline-flex items-center px-2 py-2 rounded-md my-4 cursor-pointer"
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
            </motion.a>

            <Flex className="space-x-4 ">
              {svgs.slice(0, 3).map((src, index) => {
                return <Svg src={src} key={index} h="h-8" w="w-8" />;
              })}
            </Flex>
          </>
          <motion.h5
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
          >
            {isSelected ? "Box Selected" : "Click to Select"}
          </motion.h5>
        </div>
      </motion.div>
    </A>
  );
}

export default Card2;
