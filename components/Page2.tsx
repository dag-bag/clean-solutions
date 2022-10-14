/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { page1DataAtom } from "../atoms/data";
import Card from "./test/Cart";
import H1 from "./Headings/H1";
import P from "./para/P";
import Flex from "./utils/Flex";
import Card2 from "./test/Card2";

type Props = {};

function Page2({}: Props) {
  const page1Data = useRecoilValue(page1DataAtom);
  return (
    <Flex
      className="flex-col space-y-8 items-center justify-center pt-40"
      height="auto"
    >
      <div className="flex w-full mx-auto text-left  ">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-900 md:text-5xl lg:text-5xl lg:max-w-7xl">
              Hi, John Welcome to <span> Clean Solutions.</span>
              {/* <br className="hidden lg:block" />
            your visitors into users */}
            </h1>
            <p className=" mb-8 leading-10 mt-4">
              Tired of using so many different cleaning products for every job?{" "}
              <br />
              Please select all areas you disinfect, sanitize, or deodorize.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 w-full place-items-center  relative">
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </Flex>
  );
}

export default Page2;
