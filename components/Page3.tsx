/** @format */

import React from "react";
import Card2 from "./cards/Card2";
import Flex from "./utils/Flex";
import Svg from "./utils/Svg";

type Props = {};

function Page3({}: Props) {
  const svgs = [
    "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
    "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
    "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
  ];
  return (
    <Flex className="text-center">
      <div className="mt-24 max-w-6xl">
        <h4 className=" mb-8 text-xl md:leading-10   md:mt-0 md:text-3xl bg-green-1 text-white p-5 rounded-md">
          Please select all areas you disinfect, sanitize, or deodorize.
        </h4>
        <div>
          <section className="text-gray-600 body-font">
            <div className="grid grid-cols-2 ">
              <div className="grid ">
                <Card2 svgs={svgs} />
                <Card2 svgs={svgs} />
              </div>
              <div>{/* <Card2 svgs={svgs} /> */}</div>
            </div>
          </section>
        </div>
      </div>
    </Flex>
  );
}

export default Page3;
