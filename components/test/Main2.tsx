/** @format */

import { useRouter } from "next/router";
import React from "react";
import Flex from "../utils/Flex";
import { AiOutlineRightCircle } from "react-icons/ai";
import Link from "next/link";

type Props = {};

function Main2({}: Props) {
  return (
    <div className="h-screen w-full bg-[#acd2e1]">
      <h1 className="hollow text-center  text-4xl">Clean Tech Solutions</h1>
      <div className="hero min-h-screen text-[#2b678e]">
        <div className="hero-content flex-col lg:flex-row max-w-[90%]">
          <div className="w-[80%] m-auto">
            <img
              src="https://images.unsplash.com/photo-1603248322878-f0e0ac378588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuaXRpemVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className=" rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          <div className="text-center md:max-w-[50%] md:px-20">
            <h1 className="text-5xl font-bold text-uppercase">
              Take Your Own <br /> Adventure Quiz
            </h1>
            <p className="pt-6 ">
              Discover the many ways to use VeriSan to defeat bacteria, viruses,
              mold, and odor. Your responses will aid in the creation of a
              custom, economical, eco-friendly EPA, NSF, NFPA FDA, CDC & FTC
              Cleared Disinfecting Solution.
            </p>
            <p className="py-6">
              No organism tested has proven to be resilient. Kill 99.99% of ALL
              germs known to humankind.
            </p>
            <Link href="/quiz">
              <button className="btn btn-wide hover:bg-green-1 bg-[#2b678e]  border-white text-white">
                Start Quiz
                <AiOutlineRightCircle className="text-2xl rounded-full hover:!bg-green-1 ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
