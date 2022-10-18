/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

function Bold({ children }: Props) {
  return <span className="font-bold">{children}</span>;
}

export default Bold;
