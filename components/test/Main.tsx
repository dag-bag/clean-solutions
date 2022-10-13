/** @format */

import React from "react";

type Props = {};
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { stepAtom } from "../../atoms/steps";

function Main({}: Props) {
  const page = useRecoilValue(stepAtom);
  return (
    <main className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center h-[100vh]">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Clean Solutions Take Your Own Adventure Quiz
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Discover easy ways to use VeriSan to defeat 99.99% of bacteria,
            viruses, mold, and odor. For use on hard and soft surfaces, food,
            plants, animals, or skin, in water, for entire rooms, and much more.
          </p>
          <div className="mt-4 md:mt-8">
            <Link href="/quiz">
              <a className="inline-block rounded bg-green-1 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                {page === 0 ? "Start Quiz" : "Continue Quiz"}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <img
        alt="Violin"
        src="https://cleansolutions.tech/wp-content/uploads/2022/09/2nd-section-1.png"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </main>
  );
}

export default Main;
