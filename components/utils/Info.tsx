/** @format */

import React from "react";

type Props = {
  Text: string;
};

function Info({ Text }: Props) {
  return (
    <p
      className="  text-xl md:leading-10 font-bold  md:mt-0 md:text-3xl bg-white text-blue-1 md:px-14  p-3 rounded-full border-4 border-green-1 uppercase md:max-w-[70%] m-auto px-5
    mb-5
"
    >
      {Text}
    </p>
  );
}

export default Info;
