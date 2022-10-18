/** @format */

import React from "react";

type Props = {
  src: string;
  select: boolean;
};

function Svg({ src, select }: Props) {
  return (
    <div
      className={`p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200 ${
        select ? "border-green-1" : "border-gray-200"
      }`}
    >
      <img src={src} alt="" className="h-14 w-14 rounded-full" />
    </div>
  );
}

export default Svg;
