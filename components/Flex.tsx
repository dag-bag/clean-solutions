/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Flex({ children, className }: Props) {
  const classes = `flex justify-center items-center w-full h-[100vh] ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Flex;
