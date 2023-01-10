/** @format */

import React from "react";
import Navbar from "../components/Navbar";

type Props = {};

function test({}: Props) {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen grid grid-cols-2 ">
        <div className="bg-[#276981] flex justify-center items-center ">
          <img src="./test.png" alt="" className="" />
        </div>
        <div className="bg-green-1 text-white text-5xl flex justify-center items-center font-bold">
          <h1>The Heading</h1>
        </div>
      </div>
    </div>
  );
}

export default test;
