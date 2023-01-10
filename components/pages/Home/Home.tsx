/** @format */

import React from "react";
import Navbar from "../../Navbar";

import Drawer from "../../utils/Drawer";
import Main from "./Main";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Drawer />

      <Main />
    </>
  );
}

export default Home;
