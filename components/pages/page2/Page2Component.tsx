/** @format */
import Card3SM from "../../test/Card3-sm";
import React from "react";
import Card3 from "../../test/Card3";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import { page2DataText } from "../../../data/Page2";
import { childVariants } from "../../../animation/anime";

import data from "../../../_____quiz-data";

type Props = {};

function Page2Component({ }: Props) {
  return (

    <MainLayout bgImage={false} bgcolor={false}>

      <div className="bg-red-500-- h-full">
        <header className=" md:h-[200px] h-[100px] md:mt-0 mt-5 flex items-center justify-center flex-col">

          <h1 className="text-center md:text-[50px] text-[35px]  font-heading text-white font-semibold capitalize">
            Choose the categories
          </h1>
          <p className="text-gray-200 text-center p-2">Select the categories in which you are interested.</p>

        </header>
        <main className=" h-auto mt-5">
          <motion.div
            animate="visible"
            initial="hidden"
            variants={childVariants(0.1)}
            className="grid md:grid-cols-2  max-w-[85rem] lg:grid-cols-3 w-full md:w-[90%]-- mx-auto place-items-center overflow-hidden overflow-y-scroll md:overflow-visible  md:h-auto pb-20 scrollbar-hide md:mt-0 sm:grid-cols-2 p-5 md:p-0 md:gap-0 gap-2">
            {page2DataText.map((item, index) => {
              return <div className=" h-full w-full">
                <div className="md:hidden block h-full">
                  <Card3SM key={index} {...item} index={index} />
                </div>
                <div className="md:block  hidden">
                  <Card3 key={index} {...item} index={index} />
                </div>
              </div>
            })}
          </motion.div>
        </main>
      </div>

    </MainLayout>
  );
}

export default Page2Component;
