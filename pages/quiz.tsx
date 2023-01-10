/** @format */

import React, { useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { stepAtom } from "../atoms/steps";
import Step from "../components/utils/Step";
import NextPrev from "../components/NextPrev";
import { deepStateAtom, innnerStagesAtom } from "../atoms/innterStages";
import AnimationLayout from "../components/utils/AnimationLayout";
import { page2DataAtom } from "../atoms/data";

type Props = {
  data: any;
  setData: any;
};

function Quiz({ data, setData }: Props) {
  const [step, setStep] = useRecoilState(stepAtom);
  const [innerStep, setInnerStep] = useRecoilState(innnerStagesAtom);
  const [deepStep, setDeepStep] = useRecoilState(deepStateAtom);
  const selectedIds = useRecoilValue(page2DataAtom);

  return (
    <AnimationLayout>
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
          } else {
            setInnerStep((prev) => prev + 1);
          }
        }}
        backClick={() => {
          innerStep === 0
            ? setStep((prev) => prev - 1)
            : setInnerStep((prev) => prev - 1);
        }}
      />
    </AnimationLayout>
  );
}

export default Quiz;
