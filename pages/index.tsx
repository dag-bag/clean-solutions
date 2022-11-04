/** @format */

import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Main2 from "../components/test/Main2";
import Main3 from "../components/test/Main3";
// import Main from "../components/TestMain";

import { Header } from "../components/TestMain";
import Img from "/logo.png";

const Home: NextPage = () => {
  let a = 1;
  console.log(a);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta title="Home" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="this is a quiz ." />
      </Head>
      <Navbar />
      <Main3 />
    </>
  );
};

export default Home;
