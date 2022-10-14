/** @format */

import React from "react";

type Props = {};

function Cart({}: Props) {
  return (
    <div className="">
      {/* component */}
      {/* Create By Joker Banny */}
      {/* POT */}
      <div className="  flex justify-center items-center px-10 ">
        <div className="w- p-10 bg-white  hover:shadow-2xl hover:scale-105 transition-all transform duration-500   card__side">
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
    </div>
  );
}

export default Cart;
