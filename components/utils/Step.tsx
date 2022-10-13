/** @format */

import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { stepAtom } from "../../atoms/steps";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";

function Step() {
  const activeStepIndex = useRecoilValue(stepAtom);
  let stepContent: JSX.Element;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Page1 />;
      break;
    case 1:
      stepContent = <Page2 />;
      break;
    case 2:
      stepContent = <Page3 />;
      break;
    default:
      stepContent = <div>jello</div>;
      break;
  }

  return stepContent;
}

export default Step;
