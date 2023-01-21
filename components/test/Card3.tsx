/** @format */

import React from "react";
import { useRecoilState } from "recoil";

import { Page2 } from "../../types/page";
import { page2DataAtom } from "../../atoms/data";

import { motion } from "framer-motion";
import A from "../animation/A";
import { dropOutVariant } from "../../animation/anime";

import CardFront from "../pages/page2/CardFront";
import CardBack from "../pages/page2/CardBack";

function Card3({ title, svgs, text, index, l }: Page2) {
  const [page2Selected, setPage2Selected] = useRecoilState(page2DataAtom);
  const isSelected = page2Selected.find((i: any) => i.title === title);

  const handleCardClick = () => {
    if (isSelected) {
      const newPage2Selected = page2Selected.filter(
        (i: any) => i.title !== title
      );
      setPage2Selected(newPage2Selected);
    } else {
      setPage2Selected([
        ...page2Selected,
        {
          title,
          svgs,
          text,
          index,
        },
      ]);
    }
  };

  return (
    <motion.div
      variants={dropOutVariant({
        axis: "x",
        axisValue: -400,
      })}
      className="w-full flex items-center justify-center">
      <A className="card h-[17rem]  md:!w-[28rem] rounded-3xl !w-[100%]" onClick={handleCardClick}>
        <CardFront
          title={title}
          svgs={svgs}
          text={text}
          l={l ? l : false}
          isSelected={isSelected} />
        <CardBack title={title} text={text} isSelected={isSelected} />
      </A>
    </motion.div>
  );
}

export default Card3;
