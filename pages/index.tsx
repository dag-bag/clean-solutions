/** @format */

import { motion } from "framer-motion";
import type { NextPage } from "next";
import Main from "../components/test/Main";
import { Header } from "../components/TestMain";
import Img from "/logo.png";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Main />
      </div>
      {/* <Header />
      <Main /> */}
    </>
  );
};

export default Home;
