/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

function P1({ children }: Props) {
  return <p className=" text-gray-500  ">{children}</p>;
}

export default P1;
