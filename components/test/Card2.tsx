/** @format */

import React from "react";

type Props = {};

function Card2({}: Props) {
  return (
    <div className="card w-72 cursor-pointer">
      <div className="card__side card__side--front card__side--front-1 text-center rounded-lg">
        <div className="card__description flex items-center justify-center">
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">
              SKIN CONTACT
            </h1>

            <div className="mt-3 space-x-8 flex p-1">
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                <img
                  src="https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200">
                <img
                  src="https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200">
                <img
                  src="https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png"
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1 rounded-lg">
        <div className="card__description flex justify-center items-center flex-col">
          <p className="text-black text-center p-5 text-lg">
            You can contact us whenever you need help or just curious about
            something.
          </p>
          <button className="rounded-md bg-gradient-to-r bg-green-1 text-xl text-white pt-3 pb-4 px-8 inline ">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;
