/** @format */

import { useFormik, Form, Field } from "formik";

import React, { useState } from "react";

import Flex from "../components/utils/Flex";

import H1 from "../components/Headings/H1";

import {
  formValidationSchema,
  stringSchema,
  validateString,
} from "../types/form";
import P from "../components/para/P";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stepAtom } from "../atoms/steps";
import { allPageDataAtom, page1DataAtom } from "../atoms/data";
import P1 from "./para/P1";
import Bold from "./utils/Bold";

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

  const router = useRouter();
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
    <div className="flex items-center md:flex-col flex-col-reverse text-center ">
      <div className="space-y-10 mt-10 md:mt-32 p-5">
        <P1 size="2xl">
          Clean Solutions is a bio-security company specializing in quickly
          identifying <Bold> economical and eco-friendly solutions </Bold>to
          micro-organic challenges.
        </P1>
        <P1>
          With our focus on <Bold> improving health </Bold> through innovative
          products and services, our solutions are incredibly versatile and
          typically <Bold> cost less than 80% </Bold>of what you’re paying now.
        </P1>
        <P1>
          We reduce our environmental footprint with unique eco-friendly
          solutions that <Bold> eliminate over 95%</Bold> of petroleum plastics
          used in conventional packaging.
        </P1>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="md:mt-20 mt-10 space-y-8"
      >
        <H1 Text={data[step].question} size="5xl" />
        <input
          type="text"
          name={data[step].data}
          id=""
          className="bg-green-1 outline-none py-5 max-w-xs  rounded-md placeholder:text-white text-white placeholder:text-center placeholder:text-3xl text-center text-xl md:text-3xl"
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
    </div>
  );
}

export default Page1;
