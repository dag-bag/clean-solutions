/** @format */

import Router from "next/router";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import Spacing from "../../components/pages/layout/Spacing";
import * as yup from "yup";

type emailAtomType = string | undefined;
const emailAtom = atom<emailAtomType>({
  key: "user-email",
  default: undefined,
});

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const GetEmailPage = () => {
  const [state, setState] = useRecoilState(emailAtom);
  const [isEnabled, setEnable] = useState(false);

  function Next() {
    Router.back();
  }
  function Prevous() {
    Router.push(`welcome`);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Router.push(`welcome`);
    },
  });
  const OnChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setState(value.target.value);
    formik.handleChange(value);
  };

  return (
    <Layout onNext={Next} onPrevious={Prevous} isEnabled={isEnabled}>
      <div style={{ backgroundImage: `url("./page1.png")` }}
        className="hero min-h-screen overflow-hidden bg-center bg-cover">
        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        <div className="hero-content text-center text-neutral-content">
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-4xl text-white">
            <div className=" pt-14 pb-4 my-5 rounded-md px-5">
              <h1 className="text-5xl text-green-1-tt font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[3rem] mb-7">
                Your Email Address
              </h1>
              <Spacing spacing={2} className="mb-10">
                <input
                  name="email"
                  value={formik.values.email}
                  onChange={OnChange}
                  placeholder="email goes here"
                  className={` ${formik.errors.email
                    ? "border-red-400 focus:!border-red-400"
                    : "focus-within:!border-green-1"
                    } input input-bordered w-full max-w-xl  rounded-full text-center border-2  py-5  md:text-[20px] placeholder:text-gray-300  bg-transparent !bg-white !text-black `}
                />
                {formik.errors && (
                  <div>
                    <span>
                      {" "}
                      <i className="text-red-500">●</i> {formik.errors.email}
                    </span>
                  </div>
                )}
              </Spacing>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default GetEmailPage;
