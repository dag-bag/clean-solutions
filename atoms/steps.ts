/** @format */
import { atom, selector } from "recoil";
export const stepAtom = atom({
  key: "stepAtom",
  default: 0,
});

export const disAbleAtom = atom<boolean>({
  key: "disAbleAtom",
  default: false,
});

export const stepSelector = selector({
  key: "stepSelector",
  get: ({ get }) => {
    const step = get(stepAtom);
    return step === 0
      ? "outer"
      : step === 1
      ? "outer"
      : step === 2
      ? "inner"
      : step === 3
      ? "deep"
      : "outer";
  },
});
