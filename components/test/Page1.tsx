/** @format */

import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { page1DataAtom } from "../../atoms/data";
import { stepAtom } from "../../atoms/steps";
import { validateString } from "../../types/form";

type Props = {};

function Page1({}: Props) {
  const [step, setStep] = useRecoilState(stepAtom);
  const setPage1Values = useSetRecoilState(page1DataAtom);

  const router = useRouter();

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
      {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
*/}
      <div className="bg-gray-50 h-[100vh] flex justify-center items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              What is your name?
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form
              action="#"
              className="sm:flex sm:gap-4"
              onSubmit={handleSubmit}
            >
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  onFocus={(e) => (e.target.placeholder = "")}
                />
              </div>
            </form>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Clean Solutions is a biosecurity company specializing in quickly{" "}
              <br />
              identifying economical and eco-friendly solutions to micro-organic
              challenges.
            </p>
            {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
              With our focus on improving health through innovative products and
              services, our solutions are incredibly versatile and typically
              cost less than 80% of what you’re paying now. We reduce our
              environmental footprint with our unique eco-friendly solutions
              that eliminate over 95% of petroleum plastics used in conventional
              packaging..
            </p> */}
          </div>
          <div className="mx-auto max-w-4xl text-center">
            {/* <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Clean Solutions is a biosecurity company specializing in quickly{" "}
              <br />
              identifying economical and eco-friendly solutions to micro-organic
              challenges.
            </p> */}
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              With our focus on improving health through innovative products and
              services, our solutions are incredibly versatile and typically
              cost less than 80% of what you’re paying now. We reduce our
              environmental footprint with our unique eco-friendly solutions
              that eliminate over 95% of petroleum plastics used in conventional
              packaging..
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
