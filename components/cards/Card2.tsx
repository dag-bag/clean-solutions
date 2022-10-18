/** @format */

import React from "react";
import Flex from "../utils/Flex";
import Svg from "../utils/Svg";

type Props = {
  svgs: string[];
};

function Card2({ svgs }: Props) {
  return (
    <div className="p-4 lg:w-full md:w-full ">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col shadow-lg">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
            Skin Disinfected
          </h2>
          <p className="leading-relaxed text-base">
            VeriSan can be used to deactivate germs on skin and eliminate odor.
            Our solutions meet USDA, EPA, and AMA approved standards as a
            sanitizer to kill bacteria. Safe for use on lesions, scratches, and
            wound sites.
          </p>
          <a className="mt-3 bg-green-1 text-white inline-flex items-center px-3 py-2 rounded-md my-4 cursor-pointer">
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
          <Flex className="space-x-4">
            {svgs.map((src, index) => {
              return <Svg src={src} key={index} />;
            })}
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default Card2;
