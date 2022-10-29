/** @format */

import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useRecoilValue } from "recoil";
import { selectionDataAtom } from "../../atoms/quizData";
import { stepAtom } from "../../atoms/steps";
import Slug from "../pages/Slug";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";
import Section from "../Section";
import { allPageDataAtom } from "../../atoms/data";
import { deepStateAtom, innnerStagesAtom } from "../../atoms/innterStages";
import Questions from "./Questions";
import { flattenDeep } from "lodash";
const page3Data = [
  {
    title: "SKIN CONTACT     ",
    description:
      "VeriSan can be used to deactivate germs on skin and eliminate odor. Our solutions meet USDA, EPA, and AMA approved standards as a sanitizer to  kill bacteria. Safe for use on lesions, scratches, and wound sites.  ",
    modalText:
      "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "BODY DEODORANT",
    description:
      "Our solutions meet USDA, EPA, and AMA standards as a sanitizer and can be used to kill germs, bacteria, and fungi on skin and eliminate odor at the source.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "HAIR AND FUR SANITIZER ",
    description:
      "Use ClO2 to rapidly eliminate microorganisms on hair. Spray or soak with our solution to eliminate strong odors like smoke, urine, and skunk.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "SKIN INFECTIONS",
    description:
      "Bacterial, fungal, and yeast infections on skin, and scalps, like ringworm, athlete’s foot, cold sores, or candida embedded in nail beds.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "DENTAL & ORAL CARE",
    description:
      "Used in healthcare such as veterinary, hospital, and dental environments an oral rinse, to sterilize retainers and dentures, reduce plaque, and much",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "HYGIENIC UTENSILS",
    description:
      "Sterilize personal items such as combs, toothbrushes, dental instruments, bottles, pacifiers, baby toys, respirators, or CPAP machines.      ",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
];
function Step() {
  const activeStepIndex = useRecoilValue(stepAtom);
  const selectedCards = useRecoilValue(allPageDataAtom);
  const innerState = useRecoilValue(innnerStagesAtom);
  const title = selectedCards?.page2?.data[innerState]?.title;
  const slug = title?.toLowerCase().replace(/ /g, "-");

  const deepState = useRecoilValue(deepStateAtom);
  const [questionState, setActiveState] = useState<number>(0);
  // console.log("totalQuestions", allQuestion[questionState].length);
  // console.log("CurrentQuestion", deepState);

  const getQuestions = () => {
    let q = selectedCards.page3.data.map((i) => {
      let question = i.questions;
      // return question;
      return question.map((i) => {
        return i;
      });
    });

    const questions = flattenDeep(q);
    // let length = questions.length;
    // console.log({
    //   length,
    //   deepState,
    // });

    // if (deepState > length - 2) {
    //   return [
    //     {
    //       question: "No more questions",
    //     },
    //   ];
    // }
    // if (allQuestion[questionState].length) {
    //   setActiveState((prev) => prev + 1);
    // }
    // else {
    let currentQuestion = questions[deepState].question;
    return currentQuestion;
    // }
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
      stepContent = <Slug slug={slug} />;
      break;
    case 3:
      stepContent = <Questions question={getQuestions()} />;
      break;

    default:
      stepContent = <div>NO page exist Now.</div>;
      break;
  }

  return stepContent;
}

export default Step;
