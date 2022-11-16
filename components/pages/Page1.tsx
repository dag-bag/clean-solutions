/** @format */

import { useFormik, Form, Field } from "formik";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flex from "../utils/Flex";

import H1 from "../Headings/H1";

import {
  formValidationSchema,
  stringSchema,
  validateString,
} from "../../types/form";
import P from "../para/P";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepAtom } from "../../atoms/steps";
import { allPageDataAtom, page1DataAtom } from "../../atoms/data";
import P1 from "../para/P1";
import Bold from "../utils/Bold";
import { MotionConfig } from "framer-motion";
import {
  easing,
  stagger,
  fadeInUp,
  containerVariants,
  dropUpVariants,
  childVariants,
} from "../../animation/anime";

type Props = {};
const data = [
  {
    question: "What is your name?",
    data: "name",
    case: 1,
  },
];
function Page1({}: Props) {
  const [step, setStep] = useRecoilState(stepAtom);
  const setPage1Values = useSetRecoilState(page1DataAtom);
  const [allData, setData] = useRecoilState(allPageDataAtom);

  const onChange = (e: any) => {
    // setData({ ...allData, [e.target.name]: e.target.value });
  };

  const onSubmit = (values: any, actions: any) => {
    console.log(values);
    setPage1Values(values);
    setStep((prev) => prev + 1);
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    validateOnBlur,
    values,
  } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validateString("name"),
    onSubmit: onSubmit,
  });
  console.log(values);

  return (
    <>
      <motion.div
        animate="animate"
        initial="initial"
        exit={{ opacity: 0 }}
        className="hero min-h-screen "
        style={{ backgroundImage: `url("./page1.png")` }}
      >
        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.form
            variants={childVariants(0.4)}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="max-w-4xl text-white "
          >
            <motion.h1
              variants={dropUpVariants}
              className="mb-5 text-5xl font-bold text-green-1"
            >
              {data[step].question}
            </motion.h1>
            <motion.input
              // variants={fadeInUp}
              variants={dropUpVariants}
              type="text"
              name={data[step].data}
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xl bg-white rounded-full border-4 border-green-1 text-green-1 py-7 mb-10 md:text-xl"
              onChange={(e) => {
                handleChange(e);
                onChange(e);
              }}
              value={values.name}
            />
            <motion.p className="mb-5 md:text-lg " variants={dropUpVariants}>
              Clean Solutions is a bio-security company specializing in quickly
              <br /> identifying{" "}
              <Bold> economical and eco-friendly solutions </Bold>to
              micro-organic challenges.
            </motion.p>
            <motion.p variants={dropUpVariants} className="mb-5 md:text-lg ">
              With our focus on safety and improving health through innovative
              products and services, our formulas are incredibly versatile and
              typically cost less than 80% of what you’re <br /> paying now.
            </motion.p>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
}

export default Page1;
