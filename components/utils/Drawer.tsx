/** @format */

import React from "react";
interface Props {
  title: string;
  price: number;
  category: string;
  image: string;
  qty: number;
}

const rawData = [
  {
    id: 2,
    title: "1 gallon reusable mixing and storage container",
    price: 55,
    image:
      "https://cleansolutions.tech/wp-content/uploads/2021/06/1gal-768x512.png",
    category: "Container",
    qty: 1,
  },
  {
    id: 1,
    title: "16oz reusable trigger sprayer",
    price: 90,
    image:
      "https://cleansolutions.tech/wp-content/uploads/2021/06/16oz-768x768.png",
    category: "Sprayer",
    qty: 1,
  },
  {
    id: 3,
    title: "VERISAN 6ml Cleaner",
    price: 90,
    image:
      "https://cleansolutions.tech/wp-content/uploads/2020/12/AB-4-768x576.png",
    category: "Container",
    qty: 1,
  },
];
function Item({ title, price, category, image, qty }: Props) {
  return (
    <div className="flex py-6 border border-gray-200 mb-2">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{title}</a>
            </h3>
            <p className="ml-4">${price}.00</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {qty}</p>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Drawer() {
  return (
    <div className="drawer drawer-end absolute ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay z-40"></label>

        <ul className="menu p-4 w-96 bg-white !z-[98]">
          <div className="flex items-start justify-between py-4">
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Shopping cart
            </h2>
            <div className="ml-3 flex h-7 items-center">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn outline-none border-none bg-white hover:text-white text-black"
              >
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </div>
          </div>
          {rawData.map((item, index) => {
            const { title, price, category, image, qty } = item;
            return (
              <li>
                <Item
                  key={index}
                  title={title}
                  price={price}
                  image={image}
                  category={category}
                  qty={qty}
                />
              </li>
            );
          })}
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-green-1 btn  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-1"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
