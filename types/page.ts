/** @format */

import { Question } from "../atoms/quizData";

export interface Page2 {
  title: string;
  svgs: any;
  text: string;
  index: number;
  l?: boolean;
}

export interface Page3 {
  title: string;
  description: string;
  modalText: string;
  svgs: string[];
  questions: Question[];
}
