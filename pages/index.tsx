/** @format */

import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
// import Main from "../components/TestMain";
import Main from "../components/Main";
import { Header } from "../components/TestMain";
import Img from "/logo.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta title="Home" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="this is a quiz ." />
      </Head>

      <Main />
    </>
  );
};

export default Home;
