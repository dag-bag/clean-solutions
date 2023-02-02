/** @format */

import React from "react";
type Props = {
  src: string;
  select?: boolean;
  h?: string;
  w?: string;
  className?: string;
};

function Svg({ src, select, h, w }: Props) {
  return (
    <div
      className={`p-1 border-4 rounded-lg border-gray-100 cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200  ${select ? " !bg-white" : ""
        } h-14 `}
    >
      <img
        src={src}
        alt=""
        className={` ${h ? h : "h-8"} ${w ? w : "w-8"}  object-cover`}
      />
    </div>
  );
}

export default Svg;
