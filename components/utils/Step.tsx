/** @format */

import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allQuestionsSelector, selectionDataAtom } from "../../atoms/quizData";
import { stepAtom } from "../../atoms/steps";
import Slug from "../pages/Slug";
import Page1 from "../pages/Page1";
import Page2 from "../pages/page2/Page2";

import {
  allPageDataAtom,
  page2DataAtom,
  page3DataAtom,
  page4DataAtom,
} from "../../atoms/data";
import { deepStateAtom, innnerStagesAtom } from "../../atoms/innterStages";
import Questions from "./Questions";
import Layout from "../Layout";
import { cloneDeep } from "lodash";
import AnimationLayout from "./AnimationLayout";
import Report from "../pages/Report";

//
function Step({ data, setData }: any) {
  const activeStepIndex = useRecoilValue(stepAtom);
  const selectedCards = useRecoilValue(allPageDataAtom);
  const innerState = useRecoilValue(innnerStagesAtom);
  const page2Data = useRecoilValue(page2DataAtom);
  const title = page2Data[innerState]?.title;
  const slug = title?.toLowerCase().replace(/ /g, "-");

  const deepState = useRecoilValue(deepStateAtom);
  const [step, setStep] = useRecoilState(stepAtom);
  const [questions, setQuestionData] = useRecoilState(page4DataAtom);
  let questinosDeepCoy = cloneDeep(questions);

  const getQuestions = () => {
    let currentQuestion = questions[deepState];

    if (!currentQuestion) {
      setStep((prev) => prev + 1);
    }

    return currentQuestion;
  };

  let stepContent: JSX.Element;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Page1 />;
      break;
    case 1:
      stepContent = (
        <AnimationLayout key={activeStepIndex}>
          <Page2 />
        </AnimationLayout>
      );
      break;
    case 2:
      stepContent = (
        <AnimationLayout key={innerState}>
          <Layout>
            <Slug slug={slug} />
          </Layout>
        </AnimationLayout>
      );
      break;
    case 3:
      stepContent = (
        <AnimationLayout key={deepState}>
          <Questions
            q={questions}
            {...getQuestions()}
            setQuestion={setQuestionData}
            data={data}
            setData={setData}
            deepCopy={questinosDeepCoy}
          />
        </AnimationLayout>
      );
      break;

    default:
      stepContent = <Report />;
      break;
  }

  return stepContent;
}

export default Step;
