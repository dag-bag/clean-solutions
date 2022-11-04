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
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { stepAtom } from "../atoms/steps";
import Step from "../components/utils/Step";
import NextPrev from "../components/NextPrev";
import { deepStateAtom, innnerStagesAtom } from "../atoms/innterStages";
import { selectedCardIdsAtom } from "../components/pages/Page2";

type Props = {
  data: any;
  setData: any;
};

function Quiz({ data, setData }: Props) {
  const [step, setStep] = useRecoilState(stepAtom);
  const [innerStep, setInnerStep] = useRecoilState(innnerStagesAtom);
  const [deepStep, setDeepStep] = useRecoilState(deepStateAtom);
  const [selectedIds, setCardIds] = useRecoilState(selectedCardIdsAtom);
  console.log("selectedIds:", selectedIds);

  console.log({
    deepStep,
    step,
    innerStep,
  });

  return (
    <div>
      {/* <div> */}
      <Step data={data} setData={setData} />
      {/* </div> */}
      <NextPrev
        state={
          step === 0
            ? "outer"
            : step === 1
            ? "outer"
            : step === 2
            ? "inner"
            : step === 3
            ? "deep"
            : "outer"
        }
        deepClick={() => {
          setDeepStep((prev) => prev + 1);
        }}
        deepBackClick={() => {
          deepStep === 0
            ? setStep((prev) => prev - 1)
            : setDeepStep((prev) => prev - 1);
        }}
        nextClick={() => {
          if (innerStep === selectedIds.length - 1) {
            setStep((prev) => prev + 1);
            // setInnerStep(0);
          } else {
            setInnerStep((prev) => prev + 1);
          }
          // setInnerStep((prev) => prev + 1);
          // setStep((prev) => prev + 1);
        }}
        backClick={() => {
          innerStep === 0
            ? setStep((prev) => prev - 1)
            : setInnerStep((prev) => prev - 1);
        }}
      />
    </div>
  );
}

export default Quiz;
