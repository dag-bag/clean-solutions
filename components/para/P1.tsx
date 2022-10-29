/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  maxW?: boolean;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
};

function P1({ children, size, maxW }: Props) {
  return (
    <p
      className={` text-gray-900 ${
        maxW ? `max-w-[77rem]` : "max-w-[69rem] "
      }   ${size ? `text-${size} ` : "text-xl"}`}
    >
      {children}
    </p>
  );
}

export default P1;
