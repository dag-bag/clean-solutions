/** @format */
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/pages/Home/Main";
import Drawer from "../components/utils/Drawer";
const Index = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Home</title>
        <meta title="Home" />
        <meta name="description" content="this is a quiz ." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <div className="grid md:grid-rows-[80px_calc(100vh-80px)] ">
        <Navbar />
        <Drawer />
        <Main />
      </div>
    </div>
  );
};

export default Index;
