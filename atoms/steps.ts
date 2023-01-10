/** @format */
import { atom } from "recoil";
export const stepAtom = atom({
  key: "stepAtom",
  default: 0,
});

export const disAbleAtom = atom<boolean>({
  key: "disAbleAtom",
  default: false,
});
