/** @format */

import { useFormik, Form, Field } from "formik";

import React, { useEffect, useState } from "react";

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
  // console.log(allData);

  // const [completed, setCompleted] = useState(false);

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
    initialValues: {
      name: "",
    },
    validationSchema: validateString("name"),
    onSubmit: onSubmit,
  });

  return (
    <>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url("./page1.png")` }}
      >
        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        <div className="hero-content text-center text-neutral-content">
          <form onSubmit={handleSubmit} className="max-w-4xl text-white ">
            <h1 className="mb-5 text-5xl font-bold text-green-1">
              {data[step].question}
            </h1>
            <input
              type="text"
              name={data[step].data}
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-xl bg-white rounded-full border-4 border-green-1 text-green-1 py-7 mb-10 md:text-xl"
              onChange={(e) => {
                handleChange(e);
                onChange(e);
              }}
              onBlur={handleBlur}
              value={values.name}
            />
            <p className="mb-5 md:text-lg ">
              Clean Solutions is a bio-security company specializing in quickly
              <br /> identifying{" "}
              <Bold> economical and eco-friendly solutions </Bold>to
              micro-organic challenges.
            </p>
            <p className="mb-5 md:text-lg ">
              With our focus on safety and improving health through innovative
              products and services, our formulas are incredibly versatile and
              typically cost less than 80% of what you’re <br /> paying now.
            </p>
          </form>
        </div>
      </div>

      {/* <div className="absolute -top-16 -left-14">
        <img src="1.svg" alt="" className="w-[25rem] " />
      </div>
      <div className="absolute -bottom-4 -right-6">
        <img src="./icons/2.svg" alt="" className="w-[25rem]" />
      </div>
      <div className="absolute -top-8 -right-6">
        <img src="./icons/1.svg" alt="" className="w-[35rem]" />
      </div>
      <div className="absolute -bottom-[5rem] -left-4">
        <img src="./icons/4.svg" alt="" className="w-[30rem]" />
      </div>
      <div className="absolute top-4 right-[140px]">
        <img src="./icons/did.png" alt="" className="w-[15rem]" />
      </div> */}
      {/* <div className="flex items-center md:flex-col flex-col-reverse text-center ">
        <div className="space-y-10 mt-10 md:mt-28 p-5">
          <P1 size="3xl" maxW={true}>
            Clean Solutions is a bio-security company specializing in quickly
            <br /> identifying{" "}
            <Bold> economical and eco-friendly solutions </Bold>to micro-organic
            challenges.
          </P1>
          <P1 size="2xl">
            With our focus on <Bold> improving health </Bold> through innovative
            products and services, our solutions are incredibly versatile and
            typically <Bold> cost less than 80% </Bold>of what you’re paying
            now.
          </P1>
          <P1 size="2xl">
            We reduce our environmental footprint with unique eco-friendly
            solutions that <Bold> eliminate over 95%</Bold> of petroleum
            plastics used in conventional packaging.
          </P1>
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="md:mt-10 mt-10 space-y-8"
        >
          <H1
            Text={data[step].question}
            size="5xl"
            bold={true}
            color="blue-1"
          />
          <input
            type="text"
            name={data[step].data}
            id=""
            className="bg-white rounded-full border-2 border-green-1 outline-none py-5 max-w-xs md:max-w-md   font-medium  placeholder:text-center placeholder:text-3xl text-center text-xl md:text-4xl"
            placeholder="Enter your name"
            onChange={(e) => {
              handleChange(e);
              onChange(e);
            }}
            onBlur={handleBlur}
            value={values.name}
            // onFocus={(e) => (e.target.placeholder = "")}
          />
          <p className="text-xs text-red-500">{errors.name}</p>
        </form>
      </div> */}
    </>
  );
}

export default Page1;
