/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
};

function Spacing({ children, spacing, className }: Props) {
  const Style = {
    spacing: `${className} space-y-${spacing ? spacing : "4"}`,
  };
  return <div className={Style.spacing}>{children}</div>;
}

export default Spacing;
