/** @format */

import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  hidden?: boolean;
};

function Btn({ hidden }: Props) {
  return (
    <Link href="/quiz">
      <button
        className={`relative btn  items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 !border-white rounded-full shadow-md group ${
          hidden ? "hidden md:inline-flex" : "inline-flex"
        }`}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-1 group-hover:translate-x-0 ease ">
          Let's Go{" "}
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white border-white transition-all duration-300 transform group-hover:translate-x-full ease bg-green-1 rounded-full p-1 ">
          Start Quiz
        </span>
        <span className="relative invisible">Button Text</span>
      </button>
    </Link>
  );
}

export default Btn;
