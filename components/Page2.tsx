/** @format */

import React from "react";
import Card from "./Card";
import H1 from "./Headings/H1";
import P from "./para/P";

type Props = {};

function Page2({}: Props) {
  return (
    <div className="max-w-5xl m-auto">
      <div className="space-y-4">
        <H1 Text="Tired of using so many different cleaning products for every different job? " />

        <P
          className=""
          Text="Stop purchasing single-use, toxic cleaners sold in limited quantities."
        />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Page2;
