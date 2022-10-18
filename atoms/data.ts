/** @format */

import { atom } from "recoil";
import { Page2 } from "../types/page";
interface Data {
  name: string;
}
interface DataState {
  page1: {
    name: string;
  };
  page2: {
    data: Page2[];
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
  },
});
