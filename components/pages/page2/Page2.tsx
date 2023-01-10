/** @format */

import React, { useEffect, useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { page1DataAtom } from "../../../atoms/data";

import { renderPageAtom } from "../../../atoms/renders";
import Render from "../../renders/Render";
import Page2Component from "./Page2Component";

export const selectedCardIdsAtom = atom<number[]>({
  key: "selectedCardIdsAtom",
  default: [],
});

type Props = {};

function Page2({}: Props) {
  const name = useRecoilValue(page1DataAtom);

  const [render, setRender] = useRecoilState(renderPageAtom);
  // let render = true;
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 3000);
  }, [render]);

  return (
    <>
      {!render && <Render />}
      {render && <Page2Component />}
    </>
  );
}

export default Page2;
