/** @format */

const data = [
  {
    question: "What  Should  I  Call  You?",
    data: "name",
    case: 1,
  },
];

export const quizPage = atom({
  key: "user-name",
  default: "",
});

import Router from "next/router";
import { useRef, useEffect } from "react";
import { useFormik } from "formik";
import { useRecoilState, atom } from "recoil";
import { validateString } from "../../types/form";
import Layout from "../../components/quiz-btn-layout";
import Spacing from "../../components/pages/layout/Spacing";
function Quiz() {
  const [state, setState] = useRecoilState(quizPage);
  const ref = useRef<any>(null);
  const onSubmit = (values: any) => {
    setState(values.name);
    Prevous();
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  const { handleChange, handleSubmit, errors, values, isValid } = useFormik({
    onSubmit: onSubmit,
    initialValues: {
      name: state,
    },
    validationSchema: validateString("name"),
  });

  function Next() {
    Router.push("/");
  }
  function Prevous() {
    Router.push(`${Router.asPath}/get-email`);
  }
  const OnChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    setState(value.target.value);
    handleChange(value);
  };
  return (
    <Layout onNext={Next} onPrevious={Prevous} isEnabled={!isValid}>
      <div
        style={{ backgroundImage: `url("./page1.png")` }}
        className="hero min-h-screen overflow-hidden bg-center bg-cover"
      >
        <div className="hero-overlay bg-opacity-80 bg-blue-1"></div>
        <div className="hero-content text-center text-neutral-content">
          <form onSubmit={handleSubmit} className="max-w-4xl text-white">
            <div className=" pt-14 pb-4 my-5 rounded-md px-5">
              <h1 className="md:text-5xl text-[35px]  text-white font-semibold sm:text-5xl sm:leading-none lg:text-5xl xl:text-[3rem] mb-7">
                {" "}
                {data[0].question}{" "}
              </h1>

              <Spacing spacing={2} className="mb-2">
                <input
                  ref={ref}
                  type="text"
                  value={values.name}
                  name={data[0].data}
                  placeholder="your name"
                  onChange={(e) => OnChange(e)}
                  className={` ${
                    errors.name
                      ? "border-red-400 focus:!border-red-400"
                      : "focus-within:!border-green-1"
                  } input input-bordered w-full max-w-md rounded-full text-center border-2  py-5  md:text-[20px] placeholder:text-gray-400   !text-black  `}
                />

                {errors.name && (
                  <div>
                    <span>
                      {" "}
                      <i className="text-red-500">●</i> {errors.name}
                    </span>
                  </div>
                )}
              </Spacing>
            </div>

            <p className="mb-5 md:text-2xl text-[22px] font-[400] text-white font-[roboto] ">
              Clean Solutions is a bio-security company specializing in quickly
              identifying economical and eco-friendly solutions to micro-organic
              challenges. With our focus on safety and improving health through
              innovative products and services, our formulas are incredibly
              versatile and typically cost less than 80% of what you’re paying
              now. We reduce our environmental footprint with unique products
              that eliminate over 95% of petroleum plastics used in conventional
              packaging.
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Quiz;
