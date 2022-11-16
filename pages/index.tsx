/** @format */

import Head from "next/head";
import Card from "../components/Card";

import Navbar from "../components/Navbar";
import Cart from "../components/test/Cart";

import Main3 from "../components/test/Main3";
import Drawer from "../components/utils/Drawer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta title="Home" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="this is a quiz ." />
      </Head>

      <Navbar />
      <Drawer />

      <Main3 />
    </>
  );
};

export default Home;
