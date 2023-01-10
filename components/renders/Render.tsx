/** @format */

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { renderPageAtom } from "../../atoms/renders";
import Div from "../animation/Div";
import AnimationHeading from "../Headings/AniamtedHeading";
import MainLayout from "../pages/layout/MainLayout";

type Props = {};

function Render({}: Props) {
  return (
    <MainLayout>
      <Div className="page2 h-screen w-full justify-center items-center flex">
        <AnimationHeading />
      </Div>
    </MainLayout>
  );
}

export default Render;
