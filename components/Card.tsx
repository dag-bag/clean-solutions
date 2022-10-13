/** @format */

import React from "react";

type Props = {};

function Card({}: Props) {
  return (
    <a className="group grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 sm:grid-cols-3 bg-white">
      <div className="relative">
        <img
          alt="Climber"
          src="https://images.unsplash.com/photo-1597698063932-9450882bb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="p-8 sm:col-span-2">
        <ul className="flex gap-1">
          <li className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Notice
          </li>
          <li className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Information
          </li>
        </ul>
        <h5 className="mt-4 font-bold">Lorem ipsum dolor sit amet.</h5>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          adipisci!
        </p>
      </div>
    </a>
  );
}

export default Card;
