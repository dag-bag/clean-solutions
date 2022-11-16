/** @format */

import React, { useRef, useState } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { allPageDataAtom } from "../../atoms/data";
import { deepStateAtom } from "../../atoms/innterStages";
import { allQuestionsAtom, selectionDataAtom } from "../../atoms/quizData";
import { manuPulateSelector, testArrayAtom, testAtom } from "../../atoms/test";
import { MdOutlineSanitizer } from "react-icons/md";
import Flex from "./Flex";
import { validateNumber, validateString } from "../../types/form";
import { useFormik } from "formik";

type Props = {
  question: string;
  value?: string | number;
  options?: string[];
  type?: "input" | "select";
  setQuestion?: (value: any) => void;
  data: any;
  setData: any;
  deepCopy: any;
};

const stringAtom = atom({
  key: "stringAtom",
  default: [
    {
      question: "What is your name?",
      type: "input",
      value: "",
    },
  ],
});
function Questions({
  question,
  value,
  options,
  type,
  setQuestion,
  data,
  setData,
  deepCopy,
}: Props) {
  const [allQuestions, setAllQuestions] = useRecoilState(allQuestionsAtom);
  const [index, setDeepState] = useRecoilState(deepStateAtom);

  const [test, setTest] = useState(deepCopy);

  const onSubmit = (values: any, actions: any) => {
    actions.setSubmitting(false);
    setTest((prev: any) => {
      prev[index].value = values.value;
      prev[index].ml = parseInt(values.value) * prev[index].f;
      return prev;
    });
    setDeepState((prev) => prev + 1);
  };
  console.log(test);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    validateOnBlur,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: test[index],
    validationSchema: validateNumber("value"),
    onSubmit: onSubmit,
  });
  console.log("errors ", errors);
  console.log("values", values);
  // console.log("values", index);
  const [questionsData, setQuestionData] = useRecoilState(allQuestionsAtom);

  const handleBranchChange = (e: React.FormEvent<HTMLInputElement>) => {
    // setQuestionData([...questionsData, { question: e.currentTarget.value }]);
    // let newValue = [...currentData];
    // let newIngredients = [...questionsData];
    // newIngredients[0] = {
    //   ...newIngredients[0],
    //   question: e.currentTarget.value,
    // };
    // setQuestionData(newIngredients);
    // setString({
    //   ...string,
    //   [e.currentTarget.name]: e.currentTarget.value,
    // });
    // console.log(string);
    // manuPulation(e.currentTarget.value);
    // let temp = [...test2];
    // temp[0].data[0].questions[0].value = e.currentTarget.value;
    // setData(setTest2);
    // setTest2(temp);
    // temp[0].data[0].questions[0].question = e.target.value;
    // // setCurrentData(temp);
    // // temp.variant[i][e.target.name] = e.target.value;
    // console.log("currentData", temp[0].data[0].questions[0].value);
  };

  // console.log(Data);
  return (
    // <Flex className="flex-col">
    //   <div>{question}</div>
    //   {type === "input" ? (
    //     <input
    //       type="text"
    //       className="border border-black"
    //       // value={value}
    //       onChange={(e) => {
    //         handleBranchChange(e);
    //       }}
    //     />
    //   ) : (
    //     <select
    //       name=""
    //       id=""
    //       value={value}
    //       onChange={(e) => {
    //         setQuestion && setQuestion(e.target.value);
    //       }}
    //     >
    //       {options?.map((i) => {
    //         return <option value={i}>{i}</option>;
    //       })}
    //     </select>
    //   )}
    // </Flex>
    <div className="hero min-h-screen relative ">
      <div className="absolute hidden md:block h-screen w-1/2 bg-blue-1 right-0 top-0"></div>
      {/* <div className="absolute  md:hidden h-[50%] w-full bg-blue-1 bottom-0 "></div> */}
      <div className="hero-content flex-col lg:flex-row justify-between md:max-w-[96%] p-0 md:p-4">
        <div className="text-center md:w-1/2 md:pb-16 p-1 h-[50vh] md:h-auto">
          <Flex>
            <img src="./icons/5.png" alt="" className="md:h-60 h-40" />
          </Flex>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-1">
            {question}
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className={` flex-shrink-0 w-full m-auto gap-y-4 md:gap-y-14 md:w-1/2   bg-blue-1 
           ${
             type === "input"
               ? "flex  justify-center items-start md:items-center py-10"
               : " grid grid-cols-2 place-items-start"
           }  h-[50vh] md:h-auto`}
        >
          {type === "input" ? (
            <Flex className="flex-col">
              <input
                autoComplete="off"
                type="text"
                className={`bg-white border-4 placeholder:px-2  rounded-full  outline-none py-5
              px-5 ${errors.value ? "border-red-400" : "border-green-1"}`}
                id="value"
                name="value"
                placeholder="Enter your answer"
                onChange={handleChange}
                value={values.value}
              />
              <p className="text-red-500"></p>
              <button type="submit"></button>
            </Flex>
          ) : (
            <>
              <>
                {options?.map((item, index) => {
                  return (
                    <button
                      className="md:w-2/3 py-3 px-8 bg-white border-4 border-green-1 rounded-full text-blue-1 text-xl  m-auto md:text-2xl cursor-pointer"
                      value={index + 1}
                      key={index}
                      type="submit"
                      onClick={() => {
                        setFieldValue("value", index + 1);
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
              </>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Questions;
