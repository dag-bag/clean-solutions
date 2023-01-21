/** @format */

import { useFormik } from "formik";
import Spacing from "./layout/Spacing";
import React, { useEffect } from "react";
import { page1DataAtom } from "../../atoms/data";
import { validateString } from "../../types/form";
import { motion, AnimatePresence } from "framer-motion";
import { disAbleAtom, stepAtom } from "../../atoms/steps";
import { useRecoilState, useSetRecoilState } from "recoil";
import AnimatedTextWord from "../Headings/test/AnimatedText";
import { dropUpVariants, childVariants } from "../../animation/anime";

const data = [
  {
    question: "What  Should  I  Call  You?",
    data: "name",
    case: 1,
  },
];

function Page1() {
  const [step, setStep] = useRecoilState(stepAtom);
  const setDisabled = useSetRecoilState(disAbleAtom);
  const [page1Data, setPage1Values] = useRecoilState(page1DataAtom);

  const onSubmit = (values: any,) => {
    setPage1Values(values);
    setStep((prev) => prev + 1);
  };

  const { handleChange, handleSubmit, errors, values } = useFormik({
    onSubmit: onSubmit,
    initialValues: page1Data,
    validationSchema: validateString("name"),
  });

  useEffect(() => {
    if (errors.name || values.name === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [errors]);

  return (
    <>
      <motion.div
        animate="animate"
        initial="initial"
        exit={{ opacity: 0 }}
        style={{ backgroundImage: `url("./page1.png")` }}
        className="hero min-h-screen overflow-hidden bg-center bg-cover"
      >

        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.form
            variants={childVariants(0.4)}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="max-w-4xl text-white">

            <div className=" pt-14 pb-4 my-5 rounded-md px-5">

              <AnimatedTextWord
                maxW="auto"
                text={data[step].question}
                className="text-5xl text-green-1-tt font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[3rem] mb-7" />

              <Spacing spacing={2} className="mb-10">

                <motion.input
                  type="text"
                  value={values.name}
                  name={data[step].data}
                  placeholder="Your name goes here..."
                  onChange={(e) => { handleChange(e); }}
                  className={` ${errors.name
                    ? "border-red-400 focus:!border-red-400"
                    : "focus-within:!border-green-1"
                    } input input-bordered w-full max-w-xl  rounded-full text-center border-2  py-5  md:text-[20px] placeholder:text-gray-300  bg-transparent !bg-white !text-black `}
                />

                <AnimatePresence>
                  {
                    errors.name && <motion.div
                      transition={{ duration: .2 }}
                      exit={{ opacity: 0, height: 0 }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 24 }}>
                      <span > <i className="text-red-500">●</i> {errors.name}</span>
                    </motion.div>
                  }

                </AnimatePresence>
              </Spacing>
            </div>

            <motion.p className="mb-5 md:text-xl text-base text-gray-100 " variants={dropUpVariants}>
              Clean Solutions is a bio-security company specializing in quickly
              identifying <b className="text-green-1 font-semibold">economical and eco-friendly solutions</b> to micro-organic challenges. <br />
              With our focus on <b className="text-green-1 font-semibold">safety and improving health</b> through innovative products and services,
              our formulas are incredibly versatile and typically <b className="text-green-1 font-semibold">cost less than 80%</b> of what you’re paying now.
              We reduce our environmental footprint with unique products
              that <b className="text-green-1 font-semibold">eliminate over 95% </b> of petroleum plastics used in conventional packaging.
            </motion.p>

          </motion.form>
        </div>
      </motion.div>
    </>
  );
}

export default Page1;
