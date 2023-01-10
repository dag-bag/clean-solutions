/** @format */

import React from "react";
import Navbar from "../../Navbar";

type Props = { children: React.ReactNode };

function CheckoutLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Checkout</h2>
          {children}
        </div>
      </div>
    </>
  );
}

export default CheckoutLayout;
