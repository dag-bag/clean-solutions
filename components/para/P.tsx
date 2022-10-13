/** @format */

import React from "react";

type Props = {
  Text: string;
  className?: string;
};

function P({ Text, className }: Props) {
  const classes = "" + " " + className;
  return <p className={classes}>{Text}</p>;
}

export default P;
