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
import { useRecoilState } from "recoil";
import { stepAtom } from "../atoms/steps";
import Step from "../components/utils/Step";
import NextPrev from "../components/NextPrev";

type Props = {};

function Quiz({}: Props) {
  return (
    <div
      style={{
        backgroundImage: "url(/bg.png)",
      }}
    >
      {/* <div> */}
      <Step />
      {/* </div> */}
      <NextPrev />
    </div>
  );
}

export default Quiz;
