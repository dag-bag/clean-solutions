/** @format */

import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  hidden?: boolean;
};

function Btn({ hidden }: Props) {
  return (
    <Link href="/quiz" legacyBehavior>
      <button
        className={`relative block w-full md:w-auto  md:inline-flex items-center justify-start py-4 pl-10 pr-14 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded-full   bg-green-1 group border   ${hidden ? "hidden md:block" : ""
          }`}
      >
        <span className="absolute right-0 pr-4 duration-200 ease-out  ">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12  ease-out duration-200 ">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out">
          Start Quiz
        </span>
      </button>
    </Link>
  );
}

export default Btn;
