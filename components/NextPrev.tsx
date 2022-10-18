/** @format */

import React from "react";
import { useRecoilState } from "recoil";
import { stepAtom } from "../atoms/steps";
import Flex from "./utils/Flex";

type Props = {};

function NextPrev({}: Props) {
  const [step, setStep] = useRecoilState(stepAtom);
  const next = () => {
    setStep((prev) => prev + 1);
  };
  const prev = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <Flex className="justify-between max-w-[85rem] m-auto py-5">
      <button
        disabled={step === 0}
        className="disabled:opacity-40 bg-green-1 px-3 py-2 text-white rounded-md"
        onClick={prev}
      >
        Back
      </button>
      <button
        className="disabled:opacity-40 bg-green-1 px-3 py-2 text-white rounded-md"
        onClick={next}
      >
        Next
      </button>
    </Flex>
  );
}

export default NextPrev;
