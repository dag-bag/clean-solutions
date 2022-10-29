/** @format */

import { atom } from "recoil";
export const modalState = atom({
  key: "modalState",
  default: false,
});
interface Modal {
  title: string;
  text: string;
  svgs: string[];
}
export const currentModalAtom = atom<Modal>({
  key: "currentModalAtom",
  default: {
    title: "",
    text: "",
    svgs: [],
  },
});
