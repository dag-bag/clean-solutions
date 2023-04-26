/** @format */
import React from "react";
import Link from "next/link";
import Btn from "./utils/Btn";
import Image from "next/image";

function Navbar() {
  return (
    <div className="z-50 bg-white flex">
      <div className="navbar  max-w-7xl mx-auto ">
        <div className="navbar-start py-1.5">
          <Link href={"/"} legacyBehavior>
            <Image
              src="https://cleansolutions.tech/wp-content/uploads/2022/09/clean-solution-logo-1024x337-1-2.png"
              alt="Clean Solutions Logo"
              width={134}
              className="cursor-pointer"
              height={147}
            />
          </Link>
        </div>

        <div className="navbar-end">
          <div className="flex-none md:mr-2">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                htmlFor="my-drawer-4"
                className="btn btn-ghost btn-circle drawer-button"
              >
                <div className="indicator ">
                  <svg
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item  text-green-800 ">
                    0
                  </span>
                </div>
              </label>
            </div>
          </div>
          <Btn className="!hidden md:inline-flex" hidden={true} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
