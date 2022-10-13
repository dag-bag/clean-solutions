/** @format */

import React from "react";
import Card from "../Card";

type Props = {};

function Page1({}: Props) {
  return (
    <>
      {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
*/}
      <div className="bg-gray-50  flex justify-center items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Hi, Joseph Welcome to Clean Solutions.
            </h2>
          </div>

          <div className="mx-auto max-w-6xl text-center">
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Tired of using so many different cleaning products for every job?
              <span className="font-medium text-lg">
                {" "}
                We have a solution for every budget and situation.
              </span>
            </p>
            {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
              With our focus on improving health through innovative products and
              services, our solutions are incredibly versatile and typically
              cost less than 80% of what you’re paying now. We reduce our
              environmental footprint with our unique eco-friendly solutions
              that eliminate over 95% of petroleum plastics used in conventional
              packaging..
            </p> */}
          </div>
          <div className="mx-auto max-w-5xl text-center">
            {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Clean Solutions is a biosecurity company specializing in quickly{" "}
              <br />
              identifying economical and eco-friendly solutions to micro-organic
              challenges.
            </p> */}
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Please select all areas you disinfect, sanitize, or deodorize.
              Your responses will create a unique and custom solution.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
