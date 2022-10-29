/** @format */

import React from "react";

type Props = {
  question: string;
};

function Questions({ question }: Props) {
  return <div>{question}</div>;
}

export default Questions;
