/** @format */

import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedCardIdsAtom } from "../Page2";
import { Page2 } from "../../types/page";
import { page2DataAtom } from "../../atoms/data";
import Svg from "../utils/Svg";
// type Page2 = {
//   title: string;
//   svgs: string[];
//   text: string;
//   index: number;
// };

function Card3({ title, svgs, text, index }: Page2) {
  const [selectedIds, setCardIds] = useRecoilState(selectedCardIdsAtom);
  const isSelected = selectedIds.includes(index);
  const setSelectedCardData = useSetRecoilState(page2DataAtom);
  const handleCardClick = () => {
    if (isSelected) {
      setCardIds(selectedIds.filter((id) => id !== index));
    } else {
      setCardIds((prev) => [...prev, index]);
      //   setSelectedCardData((prev:any) => [...prev,{title,svgs,text,index}]))
    }
  };

  return (
    <>
      <a className="card md:!w-[23rem] " href="#!">
        <div
          className={`front flex-col  bg-white sd  rounded-md ${
            isSelected ? "border-4 border-green-1" : ""
          }    `}
        >
          <h3 className="mt-4 text-3xl font-bold text-gray-900 ">{title}</h3>
          <div className="mt-3 space-x-8 flex p-1">
            {svgs.map((src, index) => {
              return <Svg src={src} key={index} select={isSelected} />;
            })}
          </div>
        </div>
        <div
          className={` back sd ${isSelected ? "border-4 border-green-1" : ""}`}
        >
          <div className="flex  flex-col">
            {/* <p>Consectetur adipisicing elit. Possimus, praesentium?</p> */}
            <p className="text-lg text-center font-medium">{text}</p>
            <button
              className={`${
                isSelected ? "bg-green-1" : "bg-blue-1"
              }  text-white rounded-md py-3 mt-4 w-1/3 m-auto`}
              onClick={handleCardClick}
            >
              {isSelected ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card3;
