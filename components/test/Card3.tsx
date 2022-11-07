/** @format */

import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedCardIdsAtom } from "../pages/Page2";
import { Page2 } from "../../types/page";
import { allPageDataAtom, page2DataAtom } from "../../atoms/data";
import Svg from "../utils/Svg";

function Card3({ title, svgs, text, index }: Page2) {
  const [selectedIds, setCardIds] = useRecoilState(selectedCardIdsAtom);
  const isSelected = selectedIds.includes(index);
  const [data, setAllData] = useRecoilState(allPageDataAtom);
  const handleCardClick = () => {
    if (isSelected) {
      setCardIds(selectedIds.filter((id) => id !== index));
      let newData = data.page2.data;

      setAllData((prev) => {
        return {
          ...prev,
          page2: {
            ...prev.page2,
            data: newData.filter((item) => item.i !== index),
          },
        };
      });
    } else {
      setCardIds((prev) => [...prev, index]);
      let newData = data.page2.data;
      setAllData((prev) => {
        return {
          ...prev,
          page2: {
            ...prev.page2,
            data: [...newData, { title, svgs, text, i: index }],
          },
        };
      });
    }
  };

  return (
    <>
      <a
        className="card h-[15rem] md:!w-[23rem] 
     rounded-3xl "
        onClick={handleCardClick}
      >
        <div
          className={`front flex-col  bg-white shadow-2xl rounded-3xl ${
            isSelected ? "border-4 border-green-1" : ""
          }   transition-all duration-200 ease-in-out z-50  border-4 border-green-1`}
        >
          <h3 className="mt-4 text-3xl font-bold text-blue-1 ">{title}</h3>
          <p className="text-green-1 text-sm text-center mt-4">
            HAND SANITIZER BODY DEODORANT HAIR OR FUR SANITIZER SKIN INFECTIONS
            DENTAL & ORAL HYGIENE LAUNDRY DISINFECTION
          </p>
          <div className="mt-3 space-x-8 flex p-1">
            {svgs.map((src, index) => {
              return (
                <Svg
                  src={src}
                  key={index}
                  select={isSelected}
                  h={"h-14"}
                  w="w-14"
                />
              );
            })}
          </div>
        </div>
        <div
          className={` back sd shadow-lg rounded-3xl ${
            isSelected ? "border-4 border-green-1" : ""
          } border-4 border-green-1  `}
        >
          <div className="flex  flex-col">
            {/* <p>Consectetur adipisicing elit. Possimus, praesentium?</p> */}
            <p className="text-xl text-center font-medium ">{text}</p>
            <button
              className={`${
                isSelected ? "bg-green-1" : "bg-blue-1"
              }  text-white rounded-md py-2 mt-4 w-1/3 m-auto `}
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
