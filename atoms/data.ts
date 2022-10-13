/** @format */

import { atom } from "recoil";
interface Data {
  name: string;
}
export const page1DataAtom = atom<Data>({
  key: "page1dataAtomKey",
  default: {
    name: "",
  },
});
