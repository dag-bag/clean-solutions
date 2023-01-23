/** @format */

import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { disAbleAtom, stepAtom } from "../atoms/steps";
import Flex from "./utils/Flex";
import { GrNext, GrPrevious } from "react-icons/gr";
import { page2DataAtom, page3DataAtom } from "../atoms/data";
import { isEmpty } from "lodash";

type Props = {
  nextClick?: () => void;
  backClick?: () => void;
  state: "inner" | "outer" | "deep";
  deepClick?: () => void;
  deepBackClick?: () => void;
};

function NextPrev({
  state,
  nextClick,
  backClick,
  deepClick,
  deepBackClick,
}: Props) {
  const [disabled, setDisabled] = useRecoilState(disAbleAtom);
  const [step, setStep] = useRecoilState(stepAtom);
  const page2Data = useRecoilValue(page2DataAtom);
  const page3Data = useRecoilValue(page3DataAtom);
  const isDisabledPage2 = isEmpty(page2Data);
  const isDisabledPage3 = isEmpty(page3Data);

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
        className=" disabled:opacity-40 bg-green-1 px-2 py-4  fixed text-white rounded-md top-1/2 left-0 transform  translate-y-1/2 z-50"
        onClick={prev}
      >
        <GrPrevious className="text-2xl " color="white" />
      </button>
      <button
        className=" disabled:opacity-40 bg-green-1 px-2 py-4  fixed text-white rounded-md top-1/2 right-0 transform  translate-y-1/2 z-50"
        onClick={next}
        disabled={
          disabled ||
          (step === 1 && isDisabledPage2) ||
          (step === 2 && isDisabledPage3)
        }
      >
        <GrNext className="text-2xl " />
      </button>
    </>
  );
}

export default NextPrev;
