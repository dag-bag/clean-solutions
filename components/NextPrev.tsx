/** @format */

import React from "react";
import { useRecoilState } from "recoil";
import { stepAtom } from "../atoms/steps";
import Flex from "./utils/Flex";

type Props = {
  nextClick?: () => void;
  backClick?: () => void;
  state: "inner" | "outer" | "deep";
  deepClick?: () => void;
};

function NextPrev({ state, nextClick, backClick, deepClick }: Props) {
  const [step, setStep] = useRecoilState(stepAtom);

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
      deepClick && deepClick();
    }
    if (state === "inner") {
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
        Back
      </button>
      <button
        className="disabled:opacity-40 bg-green-1 px-2 py-4  fixed text-white rounded-md top-1/2 right-0 transform  translate-y-1/2 z-50"
        onClick={next}
      >
        Next
      </button>
    </>
  );
}

export default NextPrev;
