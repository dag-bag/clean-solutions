/** @format */
import Link from "next/link";
import { useState } from "react";
import Btn from "../../utils/Btn";
import Image from "next/image";
const TrustedIcons = [
  "bigstock-green-earth-and-leaves-14539535",
  "Non-Toxic-Icon",
  "pngguru.com",
  "pngwing.com",
  "SeekPng.com_support-our-troops-png_5841661",
];
const Main = () => {

  const [isViewMoreEnabled, toggleViewMoreEnabled] = useState(false)
  function onViewMoreBtnHandler() {
    toggleViewMoreEnabled(prev => !prev)
  }

  return (
    <>
      <div className=" flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 min-h-screen max-h-[1000px] bg-blue-1 text-white relative">
        <div className=" flex flex-col items-start w-full max-w-xl px-4 mx-auto xl:px-10 xl:max-w-[92%] text-center ">
          <div className="mb-16 lg:mt-20 xl:my-52 xl:mt-20 xl:max-w-3xl lg:pr-5 ">

            <h1 className="hollow mb-4 text-center text-5xl md:text-[4rem] text-white md:mb-12 max-w-3xl " >Clean Tech Solutions</h1>

            <div className=" border-red-500 flex items-center justify-center flex-col">

              <h2 className="text-5xl font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[4.5rem] text-center font-heading">Take Your Own Adventure Quiz</h2>

              <p className="text-base  md:text-md my-7 text-gray-200">{`Use it on hard and soft surfaces, food, plants, animals, skin, water, entire rooms, and much more. No organism tested has proven to be resilient. Kill 99.99% of ALL germs known to humankind. ${isViewMoreEnabled ? `Discover the many ways to use to defeat bacteria, viruses, mold, and odor.Your responses will aid in the creation of a custom, economical, eco-frienly EPA, NSF, NFPA FDA, CDC & FTC Cleared Disinfecting Solution.` : ''}`}</p>

            </div>
            <div className="flex flex-col items-center  md:flex-row justify-center">
              <Link href={"/quiz"}>
                <Btn />
              </Link>

              <button onClick={onViewMoreBtnHandler} className="md:inline-flex block w-full md:w-auto items-center justify-start py-4 px-10 overflow-hidden font-semibold text-green-1 transition-all duration-150 ease-in-out rounded-full hover:pl-10  bg-none group border border-green-1  mx-5 my-4  md:my-0 ">Read More</button>

            </div>
            <div className="mt-8 pt-8 border-t border-gray-300 ">
              <div className="mt-2 flex gap-6 justify-center items-center">

                {TrustedIcons.map((icon) => <div className="flex items-center">
                  <img
                    className=" w-24 h-auto "
                    src={`./label-icons/${icon}.png`}
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>)}

              </div>
            </div>
          </div>
        </div>

        <div className="w-[45%] absolute right-0 -bottom-[15rem] hidden xl:block">
          <Image
            alt="main-image"
            src={'/sanitizer-quiz2.png'}
            width={1000}
            height={1300}
          />
        </div>
      </div>
    </>

  );
};
export default Main;

