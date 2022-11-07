/** @format */

import React from "react";

type Props = {
  src: string;
  select?: boolean;
  h?: string;
  w?: string;
};

function Svg({ src, select, h, w }: Props) {
  return (
    <div
      className={`p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200  ${
        select ? "border-green-1" : "border-gray-200"
      }`}
    >
      <img
        src={src}
        alt=""
        className={` ${h ? h : "h-8"} ${w ? w : "w-8"} rounded-full`}
      />
    </div>
  );
}

export default Svg;
