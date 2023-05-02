/** @format */

import * as yup from "yup";
import Router from "next/router";
import { useFormik } from "formik";
import { useRef, useEffect } from "react";
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import Spacing from "../../components/pages/layout/Spacing";
import setQueriesChangeRoutes from "../../components/functions/setQueriesChangeRoutes";
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
  const ref = useRef<any>(null);
  const [state, setState] = useRecoilState(emailAtom);

  function Next() {
    Router.push("/quiz");
  }
  function Prevous() {
    Router.push("welcome");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setQueriesChangeRoutes("welcome", { email: state as string });
    },
    validateOnMount: true,
  });
  const OnChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setState(value.target.value);
    formik.handleChange(value);
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Layout onNext={Next} onPrevious={Prevous} isEnabled={!formik.isValid}>
      <div
        style={{ backgroundImage: `url("./page1.png")` }}
        className="hero min-h-screen overflow-hidden bg-center bg-cover"
      >
        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        <div className="hero-content text-center text-neutral-content">
          <form onSubmit={formik.handleSubmit} className="max-w-4xl text-white">
            <div
              data-aos="fade-left"
              className=" pt-14 pb-4 my-5 rounded-md px-5"
            >
              <h1 className="text-5xl text-green-1-tt font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[3rem] mb-7">
                Your Email Address
              </h1>
              <Spacing spacing={2} className="mb-10">
                <input
                  ref={ref}
                  name="email"
                  value={formik.values.email}
                  onChange={OnChange}
                  placeholder="email goes here"
                  className={` ${
                    formik.errors.email
                      ? "border-red-400 focus:!border-red-400"
                      : "focus-within:!border-green-1"
                  } input input-bordered w-full max-w-xl  rounded-full text-center border-2  py-5  md:text-[18px] placeholder:text-gray-300  bg-transparent !bg-white !text-black `}
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
