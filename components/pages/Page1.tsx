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
import { disAbleAtom, stepAtom } from "../../atoms/steps";
import { allPageDataAtom, page1DataAtom } from "../../atoms/data";
import P1 from "../para/P1";
import Bold from "../utils/Bold";
import { MotionConfig } from "framer-motion";
import { dropUpVariants, childVariants } from "../../animation/anime";
import AnimatedTextWord from "../Headings/test/AnimatedText";
import Spacing from "./layout/Spacing";
import Error from "../../Error";

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
  const [page1Data, setPage1Values] = useRecoilState(page1DataAtom);

  const onSubmit = (values: any, actions: any) => {
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
    initialValues: page1Data,
    validationSchema: validateString("name"),
    onSubmit: onSubmit,
  });
  const setDisabled = useSetRecoilState(disAbleAtom);

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
            <AnimatedTextWord
              text={data[step].question}
              maxW="auto"
              // variants={dropUpVariants}
              className="mb-5 text-5xl font-bold text-green-1"
            ></AnimatedTextWord>
            <Spacing spacing={2} className="mb-10">
              <motion.input
                type="text"
                name={data[step].data}
                placeholder="Enter Your Name"
                className={` ${
                  errors.name
                    ? "border-red-400 focus:!border-red-400"
                    : "!border-green-1 focus-within:!border-green-1"
                } input input-bordered w-full max-w-xl bg-white rounded-full border-4   text-green-1 py-7  md:text-xl  `}
                onChange={(e) => {
                  handleChange(e);
                }}
                value={values.name}
              />
              <Error error={errors.name} />
            </Spacing>

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
