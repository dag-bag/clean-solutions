/** @format */

import React from "react";

type Props = {
  error?: string;
};

function Error({ error }: Props) {
  return <p className="text-red-500">{error}</p>;
}

export default Error;
