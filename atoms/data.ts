/** @format */

import { selectorFamily } from "recoil";
/** @format */

import { atom } from "recoil";
import { string } from "yup";
import { Page2, Page3 } from "../types/page";
import { ALLData } from "./quizData";
interface Data {
  name: string;
}
interface AllData {
  title: string;
  svgs: string[];
  text: string;
  i: number;
}
interface DataState {
  page1: {
    name: string;
  };
  page2: {
    data: AllData[];
  };
  page3: {
    data: ALLData[];
  };
}
export const page1DataAtom = atom<Data>({
  key: "page1dataAtomKey",
  default: {
    name: "",
  },
});

export const page2DataAtom = atom<Page2[] | any>({
  key: "page2dataAtomKey",
  default: [],
});

export const allPageDataAtom = atom<DataState>({
  key: "allPageDataAtomKey",
  default: {
    page1: {
      name: "",
    },
    page2: {
      data: [],
    },
    page3: {
      data: [],
    },
  },
});
