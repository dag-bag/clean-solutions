/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { AiOutlineCheckCircle } from "react-icons/ai";
import truncate from "../../libs/Truncate";
import A from "../animation/A";
import Flex from "../utils/Flex";
import Svg from "../utils/Svg";
import { motion } from "framer-motion";
import { page3DataAtom } from "../../atoms/data";

type Props = {
  svgs: string[];
  title: string;
  description: string;
  modalText: string;
  onClick: () => void;
  buttonClick?: (e: any) => void;
};

function Card2({ svgs, title, description, onClick, buttonClick }: Props) {
  const data = useRecoilValue(page3DataAtom);
  const isSelected = data.find((i: any) => i.title === title);

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
            className="text-gray-900 text-xl title-font font-bold mb-3 uppercase"
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

            <Flex className="space-x-4 items-center">
              {svgs.slice(0, 3).map((src, index) => {
                return (
                  <Svg
                    src={src}
                    key={index}
                    select={isSelected ? true : false}
                    h="h-10"
                    w="w-10"
                  />
                );
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

            <Flex className="space-x-4 justify-center items-center">
              {svgs.slice(0, 3).map((src, index) => {
                return (
                  <Svg
                    src={src}
                    key={index}
                    h="!h-10"
                    w="w-10"
                    select={isSelected ? true : false}
                  />
                );
              })}
            </Flex>
          </Flex>
          <motion.button
            initial={{
              x: -100,
            }}
            animate={{
              x: 0,
              color: isSelected ? "#fff" : "#000",
            }}
            className="btn bg-white border-none !text-green-1"
          >
            {isSelected ? "Box Selected" : "Click to Select"}
            {isSelected && (
              <AiOutlineCheckCircle className=" text-2xl ml-2 text-green-1" />
            )}
          </motion.button>
        </div>
      </motion.div>
    </A>
  );
}

export default Card2;
