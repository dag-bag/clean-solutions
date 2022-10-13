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
import { useRecoilState } from "recoil";
import { stepAtom } from "../atoms/steps";

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

  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  const onSubmit = (values: any, actions: any) => {
    setCompleted(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 3000);

    // router.push(`/quiz?question=${question + 1}`);
    // setQuestion((prev) => prev + 1);
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
      {!completed ? (
        <>
          <div className="space-y-4">
            <H1 Text={data[step].question} />

            <P className="" Text="We will use this personlize your experince" />
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name={data[step].data}
              id=""
              className="bg-green-1 outline-none py-5 rounded-md placeholder:text-white text-white placeholder:text-center placeholder:text-3xl text-center text-3xl"
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              onFocus={(e) => (e.target.placeholder = "")}
            />
            <p className="text-xs text-red-500">{errors.name}</p>
          </form>
        </>
      ) : (
        <>
          <div className="space-y-4 max-w-5xl m-auto">
            <H1
              Text={`Hi,${values.name}. Welcome to Clean Solutions.
 `}
            />

            <P
              className=""
              Text=" 
             
               
              We are a BioSecurity Company specializing in quickly identifying 
              economical solutions to micro-organic challenges. 
               
             
              "
            />
            <P
              className=""
              Text=" 
              
               
              Our focus is on improving health with innovative products and services. 
               
             
              "
            />
            <P
              className=""
              Text=" 
             
               
              We reduce our environmental footprint by offering unique custom solutions 
              that eliminate over 95% of petroleum plastics. 
              . 
              "
            />
          </div>
        </>
      )}

      {/* <H1 Text="What is your Name ?" /> */}
      {/* <WavyText text="What is your Name ?" replay={true} /> */}
      {/* <AnimatedTextWord text="Awesome Animated Text!" /> */}
      {/* <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex space-y-2 flex-col"
      >
        <InputField
          error={errors.name && touched.name ? errors.name : ""}
          name="name"
          onChange={handleChange}
          value={values.name}
          label="name"
          type="text"
          placeholder="First Name"
          onBlur={handleBlur}

          // error={errors.name}
        />
      </form> */}
    </>
  );
}

export default Page1;
