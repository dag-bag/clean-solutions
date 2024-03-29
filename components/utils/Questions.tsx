/** @format */

import React, { useRef, useState, useMemo, useEffect } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { allPageDataAtom, page4DataAtom } from "../../atoms/data";
import { deepStateAtom } from "../../atoms/innterStages";
import {
  allQuestionsAtom,
  dash,
  Question,
  selectionDataAtom,
} from "../../atoms/quizData";

import { MdOutlineSanitizer } from "react-icons/md";
import Flex from "./Flex";
import { validateNumber, validateString } from "../../types/form";
import { Form, Formik, useFormik } from "formik";
import { disAbleAtom } from "../../atoms/steps";
import { motion } from "framer-motion";
import { childVariants } from "../../animation/anime";
import Input from "../animation/Input";
import { filter, shuffle } from "lodash";
import NextPrev from "../NextPrev";
import {
  SkinContact,
  Washing,
  DrinkWater,
  River,
  WaterTank,
  Plants,
  Vegetables,
  KitchenWare,
  HotelRoom,
  Camping,
  Boat,
  ClassRoom,
  OfficeRoom,
  BioHazard,
  Gardening,
  Toilet,
  Pots,
} from "../Icons";

type Props = {
  question: string;
  value?: string | number;
  options?: string[];
  type?: "input" | "select" | "options" | "mix";
  setQuestion?: (value: any) => void;
  data: any;
  setData: any;
  deepCopy: any;
  q: any;
  Q?: string;
  max?: number;
  Icons: string[];
};

function Questions({
  question,
  value,
  options,
  type,
  setQuestion,
  data,
  setData,
  deepCopy,
  Q,
  max,
  Icons,
}: Props) {
  const [allQuestions, setAllQuestions] = useRecoilState(page4DataAtom);
  const [index, setDeepState] = useRecoilState(deepStateAtom);

  const onSubmit = (values: any, actions: any) => {
    actions.setSubmitting(false);

    setAllQuestions(
      allQuestions.map((i: Question) => {
        return i.question === question ? { ...i, value: values.value } : i;
      })
    );
    if (type !== "options") {
      setDeepState((prev) => prev + 1);
    }
  };
  const styles = {
    container: ` flex-shrink-0 w-full m-auto gap-y-4 md:gap-y-14 md:w-1/2   bg-blue-1
    ${
      type === "input"
        ? "flex  justify-center items-start md:items-center py-10"
        : ""
    } ${type === "options" ? " grid grid-cols-1 place-items-start" : ""} ${
      type === "select" ? " grid grid-cols-2 place-items-start" : ""
    } h-[50vh] md:h-auto ${type === "mix" ? "" : ""}`,
  };
  const [disabled, setDisabled] = useRecoilState(disAbleAtom);
  let icons = [
    SkinContact,
    Washing,
    DrinkWater,
    River,
    WaterTank,
    Plants,
    Vegetables,
    KitchenWare,
    HotelRoom,
    Camping,
    Boat,
    ClassRoom,
    OfficeRoom,
    BioHazard,
    Gardening,
    Toilet,
    Pots,
  ];
  let CurrentIcon = shuffle(icons)[0];
  return (
    <motion.div
      variants={childVariants(0.4)}
      initial="hidden"
      animate="visible"
      className="hero min-h-screen relative "
    >
      <NextPrev disabled={disabled} />

      <div className="absolute hidden md:block h-screen w-1/2 bg-blue-1 right-0 top-0"></div>

      <div className="hero-content flex-col lg:flex-row justify-between md:max-w-[96%] p-0 md:p-4">
        <div className="absolute top-0 w-full text-center flex justify-between mix-blend-difference ">
          <div></div>
          <h1 className="uppercase z-50 ml-8 ">
            {allQuestions[index].r.split("-").join(" ")}
          </h1>
          <h1 className="uppercase z-50">{allQuestions[index].uni} </h1>
        </div>
        <div className="text-center md:w-1/2 md:pb-16 p-1 h-[50vh] md:h-auto space-y-6">
          <Flex>
            <CurrentIcon color="#95D074" className="w-60 h-40" />
            {/* <img src={shuffle(Icons)[0]} alt="" className="md:h-60 h-40" /> */}
          </Flex>

          <h1 className="text-3xl md:text-5xl font-bold text-blue-1">
            {allQuestions[index].question}
          </h1>
        </div>

        <Formik
          // validationSchema={
          //   max ? validateNumber("value", max) : validateNumber("value")
          // }
          initialValues={allQuestions[index]}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            isSubmitting,
            validateOnBlur,
            values,
            setFieldValue,
          }) => {
            // let isEmptyOrNot = values.value.length;
            useEffect(() => {
              if (errors.value || values.value === 0) {
                setDisabled(true);
              } else {
                setDisabled(false);
              }
            }, [errors, values]);

            return (
              <Form onSubmit={handleSubmit} className={styles.container}>
                {type === "input" ? (
                  <Flex className="flex-col items-center">
                    <Input
                      autoComplete="off"
                      type="text"
                      id="value"
                      name="value"
                      placeholder="Enter your answer"
                      onChange={handleChange}
                      value={values.value}
                      error={errors.value}
                    />

                    {errors.value && (
                      <p className="text-red-500">{`${errors.value}`}</p>
                    )}

                    <button type="submit"></button>
                  </Flex>
                ) : null}
                {type === "select" ? (
                  <>
                    <>
                      {options?.map((item, index) => {
                        return (
                          <motion.button
                            className={`md:w-2/3 py-3 px-8  border-4   text-xl  m-auto md:text-2xl cursor-pointer ${
                              values.value === item
                                ? "bg-green-1 border-white text-white"
                                : "bg-white border-green-1 text-blue-1"
                            } `}
                            whileHover={{
                              scale: 1.1,
                            }}
                            value={item}
                            key={index}
                            type="submit"
                            onClick={() => {
                              setFieldValue("value", item);
                            }}
                          >
                            {item}
                          </motion.button>
                        );
                      })}
                    </>
                  </>
                ) : null}
                {type === "options" ? (
                  <div className="h-[90vh] overflow-y-scroll w-full flex  justify-center items-center flex-col py-4 space-y-4 pt-52 scrollbar-hide">
                    <h2 className=" text-green-1 text-2xl">{Q}</h2>
                    {options?.map((item, index) => {
                      let isSelected = values.value.includes(item);
                      return (
                        <motion.button
                          className={`md:w-2/3 py-3 px-8  border-4 rounded-full  text-xl  m-auto md:text-2xl cursor-pointer ${
                            isSelected
                              ? "bg-green-1 border-white text-white"
                              : "bg-white border-green-1 text-blue-1"
                          } `}
                          whileHover={{
                            scale: 1.1,
                          }}
                          value={index + 1}
                          key={index}
                          onClick={() => {
                            let Soptions = [...values.value, item];

                            if (!isSelected) {
                              setFieldValue("value", Soptions);
                            } else {
                              let deletedValue = filter(values.value, item);
                              setFieldValue("value", deletedValue);
                            }
                          }}
                        >
                          {item}
                        </motion.button>
                      );
                    })}
                  </div>
                ) : null}
                {type === "mix" ? (
                  <div className="h-[90vh] overflow-y-scroll w-full flex  justify-center items-center flex-col py-4 space-y-4 pt-52 scrollbar-hide">
                    <h2 className=" text-green-1 text-2xl">{Q}</h2>
                    {options?.map((item, index) => {
                      const itemArray = item.split(".");
                      console.log({ itemArray });
                      let isSelected = values.value.includes(item);
                      return (
                        <motion.div
                          className={`md:w-11/12 py-6 px-8  border-4   text-xl  m-auto md:text-2xl cursor-pointer 
                          ${
                            isSelected
                              ? "bg-green-1 border-white text-white"
                              : "bg-white border-green-1 text-blue-1"
                          }
                          hover:bg-green-1 hover:border-white hover:text-white
                           `}
                          whileHover={{
                            scale: 1.1,
                          }}
                          onClick={() => {
                            setFieldValue("value", item);
                          }}
                        >
                          {itemArray[0]}
                          <br />
                          {isSelected ? itemArray[1] && itemArray[1] : null}
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className={`${
                              isSelected ? "block" : "hidden"
                            }  w-full border-0 border-b 
                            border-green-1 border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm text-blue-1 `}
                            placeholder="Ans"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </motion.div>
  );
}

export default Questions;
