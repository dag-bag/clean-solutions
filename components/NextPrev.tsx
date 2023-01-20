/** @format */

import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { disAbleAtom, stepAtom, stepSelector } from "../atoms/steps";
import { GrNext, GrPrevious } from "react-icons/gr";
import { page2DataAtom, page3DataAtom } from "../atoms/data";
import { isEmpty, keys } from "lodash";
import { deepStateAtom, innnerStagesAtom } from "../atoms/innterStages";

type Props = {
  // nextClick?: () => void;
  // backClick?: () => void;
  // state: "inner" | "outer" | "deep";
  disabled: boolean;

  // deepBackClick?: () => void;
};

function NextPrev({
  // state,
  disabled,
}: // nextClick,
// backClick,
// deepBackClick,
Props) {
  // const [disabled, setDisabled] = useRecoilState(disAbleAtom);

  const page2Data = useRecoilValue(page2DataAtom);
  const page3Data = useRecoilValue(page3DataAtom);
  const [step, setStep] = useRecoilState(stepAtom);
  const [innerStep, setInnerStep] = useRecoilState(innnerStagesAtom);
  const [deepStep, setDeepStep] = useRecoilState(deepStateAtom);
  const selectedIds = useRecoilValue(page2DataAtom);
  const deepClick = () => {
    setDeepStep((prev) => prev + 1);
  };
  const deepBackClick = () => {
    deepStep === 0
      ? setStep((prev) => prev - 1)
      : setDeepStep((prev) => prev - 1);
  };
  const nextClick = () => {
    if (innerStep === selectedIds.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setInnerStep((prev) => prev + 1);
    }
  };
  const backClick = () => {
    innerStep === 0
      ? setStep((prev) => prev - 1)
      : setInnerStep((prev) => prev - 1);
  };
  const state = useRecoilValue(stepSelector);
  // const isDisabledPage2 = isEmpty(page2Data);
  // const isDisabledPage3 = isEmpty(page3Data);

  const next = () => {
    if (state === "deep") {
      deepClick && deepClick();
    } else if (state === "inner") {
      nextClick && nextClick();
    } else {
      setStep((prev) => prev + 1);
    }
  };
  const prev = () => {
    if (state === "deep") {
      deepBackClick && deepBackClick();
    } else if (state === "inner") {
      backClick && backClick();
    } else {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <>
      <button
        disabled={step === 0}
        className="disabled:opacity-40 bg-green-1 px-2 py-4  fixed text-white rounded-md top-1/2 left-0 transform  translate-y-1/2 z-50"
        onClick={prev}
      >
        <GrPrevious className="text-2xl " color="white" />
      </button>
      <button
        className="disabled:opacity-40 bg-green-1 px-2 py-4  fixed text-white rounded-md top-1/2 right-0 transform  translate-y-1/2 z-50"
        onClick={next}
        disabled={disabled}
      >
        <GrNext className="text-2xl " />
      </button>
    </>
  );
}

export default NextPrev;
