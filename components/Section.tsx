/** @format */
import { concat, merge, flattenDeep, find } from "lodash";
import { tmpdir } from "os";
import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { string } from "yup";
import { allPageDataAtom, page3DataAtom, page4DataAtom } from "../atoms/data";

import { currentModalAtom, modalState } from "../atoms/modalAtom";
import { Question } from "../atoms/quizData";

import { Page3 } from "../types/page";
import Card2 from "./cards/Card2";
import Modal from "./modal/Modal";
import Flex from "./utils/Flex";
import Info from "./utils/Info";
import Questions from "./utils/Questions";

type Props = {
  data: Page3[];
  slug?: string;
};

function Section({ data, slug }: Props) {
  const setCurrentModal = useSetRecoilState(currentModalAtom);

  const [das, setDash] = useRecoilState(page4DataAtom);

  const [page3Data, setPage3Data] = useRecoilState(page3DataAtom);
  const handleClick = (item: Page3) => {
    let fin = find(das, { uni: item.title });

    let newQuestion = item.questions.map((question, i) => {
      return { ...question, uni: item.title };
    });
    fin
      ? setDash(das.filter((i: Question) => i.uni !== item.title))
      : setDash(flattenDeep([...das, newQuestion]));

    const isSelected = find(page3Data, { title: item.title });
    isSelected
      ? setPage3Data(page3Data.filter((i: any) => i.title !== item.title))
      : setPage3Data([...page3Data, item]);
  };

  return (
    <Flex className="text-center px-4">
      <div className="mt-10 md:mt-0 max-w-[85rem] z-40 ">
        <Info Text="Please select all that interest you" />
        <div>
          <Modal />
          <section className="text-gray-600 body-font">
            <div className="grid  md:grid-cols-3 gap-y-5 gap-x-3 h-[70vh]   overflow-hidden overflow-y-scroll scrollbar-hide md:overflow-visible">
              {data.map((item, index) => {
                return (
                  <Card2
                    key={index}
                    {...item}
                    onClick={() => {
                      handleClick(item);
                    }}
                    buttonClick={(e: any) => {
                      e.stopPropagation();
                      setCurrentModal({
                        title: item.title,
                        text: item.modalText,
                        svgs: item.svgs,
                      });
                    }}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </Flex>
  );
}

export default Section;
