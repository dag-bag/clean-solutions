/** @format */

import Link from "next/link";
import Btn from "../utils/Btn";

const Main3 = () => {
  return (
    <div
      className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 h-screen bg-blue-1
    text-white"
    >
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-[92%] text-center">
        <div className="mb-16 lg:my-52 lg:mt-36 lg:max-w-3xl lg:pr-5 ">
          <h1
            className="hollow text-center text-4xl md:text-[4rem] text-white md:mb-12
          "
          >
            Clean Tech Solutions
          </h1>
          <div className="max-w-xl flex justify-center items-center flex-col mb-6 text-center m-auto">
            {/* <h1 className="hollow text-center  text-5xl text-white">
              Clean Tech Solutions
            </h1>
            <h1 className="hollow text-center  text-5xl text-white">
              Clean Tech Solutions
            </h1> */}

            {/* <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Colaboration
              </p>
            </div> */}
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none lg:text-5xl xl:text-[4rem] xl:mb-6">
              Take Your Own <br className="hidden md:block" /> Adventure Quiz
              {/* The quick, brown fox */}
              {/* <br className="hidden md:block" />
              jumps over <span className="inline-block ">a lazy dog</span> */}
            </h2>
            <p className="text-base  md:text-lg">
              Today’s world requires a stronger and safer response for
              disinfection. Use it on hard and soft surfaces, food, plants,
              animals, skin, water, entire rooms, and much more.
            </p>
          </div>
          <div className="flex flex-col items-center  md:flex-row justify-center md:space-x-8">
            <Link href={"/quiz"}>
              <Btn />
              {/* <a
                className="inline-flex  items-center justify-center  h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200  shadow-md md:w-auto md:mr-4 md:mb-0 bg-green-1 btn btn-wide hover:bg-white hover:!border-green hover:text-green-1 focus:shadow-outline focus:outline-none border border-white 
              rounded-full
              "
              >
                Start Quiz
              </a> */}
            </Link>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700 "
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-[70%] lg:max-w-full lg:absolute xl:px-0 md:-right-[25rem] md:-bottom-[10rem]">
        <img
          className="object-cover w-full  rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="./sanitizer-quiz.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Main3;
