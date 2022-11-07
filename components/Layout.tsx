/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div
      className="hero min-h-screen place-items-start md:place-items-center"
      style={{ backgroundImage: `url("./page1.png")` }}
    >
      <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
      {children}
    </div>
  );
}

export default Layout;
