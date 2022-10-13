/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { page1DataAtom } from "../atoms/data";
import Card from "./Card";
import H1 from "./Headings/H1";
import P from "./para/P";

type Props = {};

function Page2({}: Props) {
  const page1Data = useRecoilValue(page1DataAtom);
  return (
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
            Hi, John Welcome to <span> Clean Solutions.</span>
            {/* <br className="hidden lg:block" />
            your visitors into users */}
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
            Free and Premium themes, UI Kit's, templates and landing pages built
            with Tailwind CSS, HTML &amp; Next.js.
          </p>
          <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
              <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Get bundle
              </button>
            </div>
            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                See features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
