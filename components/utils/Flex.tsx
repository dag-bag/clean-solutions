/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  height?: string;
};

function Flex({ children, className, height }: Props) {
  const classes = `${className} flex justify-center  w-full h-${height} `;
  return <div className={classes}>{children}</div>;
}

export default Flex;
