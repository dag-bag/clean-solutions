/** @format */

import React from "react";

type Props = {
  src: string;
};

function Svg({ src }: Props) {
  return (
    <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
      <img src={src} alt="" className="h-14 w-14 rounded-full" />
    </div>
  );
}

export default Svg;
