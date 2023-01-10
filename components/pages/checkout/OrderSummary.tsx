/** @format */

import { TrashIcon } from "@heroicons/react/solid";
import { Field } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../../../atoms/Cart";
import { FormValues } from "../../../types/checkout";
import PaypalComponent from "./Paypal/PaypalComponent";
import Terms from "./Terms";

type Props = {
  isSubmitting: boolean;
  isValid: boolean;
  isValidating: boolean;
  values: FormValues;
};

function OrderSummary({ isSubmitting, isValid, isValidating, values }: Props) {
  const cartItems = useRecoilValue(cartAtom);
  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list" className="divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li key={product.id} className="flex py-6 px-4 sm:px-6">
              <div className="flex-shrink-0 relative">
                <Image
                  width={100}
                  height={100}
                  layout="responsive"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-20 rounded-md"
                />
              </div>

              <div className="ml-6 flex-1 flex flex-col">
                <div className="flex">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm">
                      <a
                        href={product.href}
                        className="font-medium text-gray-700 hover:text-gray-800"
                      >
                        {product.title}
                      </a>
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                  </div>

                  <div className="ml-4 flex-shrink-0 flow-root">
                    <button
                      type="button"
                      className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Remove</span>
                      <TrashIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 pt-2 flex items-end justify-between">
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {product.price}
                  </p>

                  <div className="ml-4">
                    <label htmlFor="quantity" className="sr-only">
                      Quantity
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-1 focus:border-blue-1 sm:text-sm"
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">$64.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Shipping</dt>
            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Taxes</dt>
            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            <dd className="text-base font-medium text-gray-900">$75.52</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dd className="text-base font-medium text-gray-900">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our
                <Link href={"https://cleansolutions.tech/privacy-policy-2/"}>
                  <a
                    target={"_blank"}
                    className="ml-2 underline text-blue-1 cursor-pointer"
                  >
                    privacy policy.
                  </a>
                </Link>
              </p>
              <div className="flex items-center mt-10">
                <label
                  htmlFor="remember-me"
                  className="ml-2  text-sm text-gray-900 font-bold "
                >
                  <Field
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-blue-1 focus:ring-blue-1 border-gray-300 rounded mr-2"
                  />{" "}
                  I have read and agree to the website <Terms />
                </label>
              </div>
            </dd>
          </div>
        </dl>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <button
            disabled={isSubmitting || !isValid || isValidating}
            type="submit"
            className="w-full"
            // className="w-full  bg-green-1 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <PaypalComponent
              disabled={isSubmitting || !isValid || isValidating}
              values={values}
            />
            {/* Proceed to Paypal. */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
