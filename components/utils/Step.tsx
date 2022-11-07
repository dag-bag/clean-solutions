/** @format */

import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allQuestionsSelector, selectionDataAtom } from "../../atoms/quizData";
import { stepAtom } from "../../atoms/steps";
import Slug from "../pages/Slug";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

import { allPageDataAtom } from "../../atoms/data";
import { deepStateAtom, innnerStagesAtom } from "../../atoms/innterStages";
import Questions from "./Questions";
import Layout from "../Layout";

//
function Step({ data, setData }: any) {
  const activeStepIndex = useRecoilValue(stepAtom);
  const selectedCards = useRecoilValue(allPageDataAtom);
  const innerState = useRecoilValue(innnerStagesAtom);
  const title = selectedCards?.page2?.data[innerState]?.title;
  const slug = title?.toLowerCase().replace(/ /g, "-");

  const deepState = useRecoilValue(deepStateAtom);
  const [step, setStep] = useRecoilState(stepAtom);
  const [questions, setQuestionData] = useRecoilState(allQuestionsSelector);

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
      stepContent = <Page2 />;
      break;
    case 2:
      stepContent = (
        <Layout>
          {" "}
          <Slug slug={slug} />
        </Layout>
      );
      break;
    case 3:
      stepContent = (
        <Questions
          {...getQuestions()}
          setQuestion={setQuestionData}
          data={data}
          setData={setData}
        />
      );
      break;

    default:
      stepContent = <div>Thanks For it.</div>;
      break;
  }

  return stepContent;
}

export default Step;
