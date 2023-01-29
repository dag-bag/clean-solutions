/** @format */
// import { flatten } from "lodash";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/pages/Home/Main";
import Drawer from "../components/utils/Drawer";

// import data from "../_____quiz-data";

const Index = () => {

  // console.log(flatten(Object.keys(data).map((category: any) => Object.keys(data[category].categories))))

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Home</title>
        <meta title="Home" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="this is a quiz ." />
      </Head>
      <Navbar />
      <Drawer />
      <Main />
    </div>
  );
};

export default Index;
