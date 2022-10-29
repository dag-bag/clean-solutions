/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  bold?: "medium" | "semibold" | "bold";
};

function Bold({ children }: Props) {
  return <span className="font-bold">{children}</span>;
}

export default Bold;
