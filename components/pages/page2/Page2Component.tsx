/** @format */

import React from "react";
import Flex from "../../utils/Flex";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import { page2DataText } from "../../../data/Page2";
import Card3 from "../../test/Card3";
import { childVariants } from "../../../animation/anime";
import NextPrev from "../../NextPrev";
import { isEmpty } from "lodash";
import { useRecoilValue } from "recoil";
import { page2DataAtom } from "../../../atoms/data";

type Props = {};

function Page2Component({}: Props) {
  const page2Data = useRecoilValue(page2DataAtom);
  const isDisabledPage2 = isEmpty(page2Data);
  return (
    <MainLayout bgImage={false} bgcolor={false}>
      <NextPrev disabled={isDisabledPage2} />
      <Flex
        className="flex-col space-y-4 items-center   md:pt-8 scrollbar-hide"
        height="auto"
      >
        <div className="flex w-full mx-auto text-left  mt-10 md:mt-0 px-4">
          <div className="relative inline-flex  mx-auto align-middle">
            <div className="text-center">
              <p className="  text-xl md:leading-10 font-bold  md:mt-0 md:text-3xl bg-white text-blue-1 md:px-14  p-3 rounded-full border-4 border-green-1 uppercase md:min-w-[34rem] px-5">
                Please select all that interest you
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3  w-full md:w-[90%] mx-auto place-items-center overflow-hidden overflow-y-scroll md:overflow-visible h-[70vh] md:h-auto pb-20 scrollbar-hide md:mt-0 sm:grid-cols-2"
          variants={childVariants(0.1)}
          initial="hidden"
          animate="visible"
        >
          {page2DataText.map((item, index) => {
            return <Card3 key={index} {...item} index={index} />;
          })}
        </motion.div>
      </Flex>
    </MainLayout>
  );
}

export default Page2Component;
