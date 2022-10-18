/** @format */

import React from "react";

type Props = {
  title: string;
  svgs: string[];
  text: string;
};

function Card2({ title, svgs, text }: Props) {
  return (
    <div className="card md:w-72 cursor-pointer w-96 ">
      <div className="card__side card__side--front card__side--front-1 text-center rounded-lg">
        <div className="card__description flex  justify-start">
          <div className="mt-4">
            <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
            {/* <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
              {title}
            </h1> */}

            <div className="mt-3 space-x-8 flex p-1">
              {svgs.map((src, index) => {
                return (
                  <div
                    className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200"
                    key={index}
                  >
                    <img src={src} alt="" className="h-10 w-10 rounded-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1 rounded-lg">
        <div className="card__description flex justify-center items-center flex-col">
          <p className="text-black text-center p-5 text-lg">{text}</p>
          <button className="rounded-md bg-gradient-to-r bg-green-1 text-xl text-white pt-3 pb-4 px-8 inline ">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;
