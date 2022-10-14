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
import { page1DataAtom } from "../atoms/data";
import P1 from "./para/P1";

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

  const router = useRouter();
  // const [completed, setCompleted] = useState(false);

  const onSubmit = (values: any, actions: any) => {
    setPage1Values(values);
    setStep((prev) => prev + 1);
    // setCompleted(true);
    // setStep((prev) => prev + 1);
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
    <div className="flex items-center flex-col text-center ">
      <div className="space-y-4 mt-40">
        <P1>
          Your responses will aid in the creation of a custom, economical,
          eco-friendly EPA, NSF, NFPA FDA, CDC & FTC Cleared Solution containing
          OMRI Listed Ingredients.
        </P1>
        <P1>
          With our focus on improving health through innovative products and
          services, our solutions are incredibly versatile and typically cost
          less than 80% of what you’re paying now.
        </P1>
        <P1>
          We reduce our environmental footprint with unique eco-friendly
          solutions that eliminate over 95% of petroleum plastics used in
          conventional packaging.
        </P1>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="mt-20 space-y-8"
      >
        <H1 Text={data[step].question} />
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
      {/* {!completed ? (
       
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
      )} */}

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
    </div>
  );
}

export default Page1;
