/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  height?: string;
};

function Flex({ children, className, height }: Props) {
  const classes = `flex justify-center items-center w-full h-${height} ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Flex;
