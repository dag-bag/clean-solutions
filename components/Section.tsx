/** @format */
import { concat, merge, flattenDeep } from "lodash";
import { tmpdir } from "os";
import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { string } from "yup";
import { allPageDataAtom } from "../atoms/data";
import { deepStateAtom } from "../atoms/innterStages";
import { currentModalAtom, modalState } from "../atoms/modalAtom";
import { allQuestionsAtom } from "../atoms/quizData";
import { testArrayAtom } from "../atoms/test";
import { Page3 } from "../types/page";
import Card2 from "./cards/Card2";
import Flex from "./utils/Flex";
import Questions from "./utils/Questions";

type Props = {
  data: Page3[];
  slug?: string;
};
const page3Data = [
  {
    title: "HAND SANITIZER",
    description:
      "VeriSan can be used to deactivate germs on hands, or for use on lesions, scratches, and wound sites while protecting your cells and tissue.",
    modalText:
      "Use VeriSan for convenience, versatility, and to ensure sterility! ClO2 is a size-selective antimicrobial agent, which means it can not penetrate deeply into living tissues. Dermatologist-recommended, no chemical scents or harmful residue left behind leaving skin odor-free.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "BODY DEODORANT",
    description:
      "Our solutions meet USDA, EPA, and AMA standards as a sanitizer and can be used to kill germs, bacteria, and fungi on skin and eliminate odor at the source.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "HAIR AND FUR SANITIZER ",
    description:
      "Use ClO2 to rapidly eliminate microorganisms on hair. Spray or soak with our solution to eliminate strong odors like smoke, urine, and skunk.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "SKIN INFECTIONS",
    description:
      "Bacterial, fungal, and yeast infections on skin, and scalps, like ringworm, athlete’s foot, cold sores, or candida embedded in nail beds.",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "DENTAL & ORAL CARE",
    description:
      "Used in healthcare such as veterinary, hospital, and dental environments an oral rinse, to sterilize retainers and dentures, reduce plaque, and much",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
  {
    title: "HYGIENIC UTENSILS",
    description:
      "Sterilize personal items such as combs, toothbrushes, dental instruments, bottles, pacifiers, baby toys, respirators, or CPAP machines.      ",
    modalText:
      "Safely disinfect armpits, feet, and other regions with no harmful residue left behind. Chlorine dioxide leaves skin soft and fragrance-free. It can also repel insects like mosquitoes and sterilize insect bites.",
    svgs: [
      "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/daycare-center.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
      "https://cleansolutions.tech/wp-content/uploads/2022/03/computer.png",
    ],
  },
];

function Section({ data, slug }: Props) {
  const setCurrentModal = useSetRecoilState(currentModalAtom);
  const [Data, setAllData] = useRecoilState(allPageDataAtom);

  console.log("Data:", Data);

  const [currentData, setCurrentData] = useRecoilState(allQuestionsAtom);
  let [testArray, setTestArry] = useRecoilState(testArrayAtom);

  return (
    <Flex className="text-center px-4">
      <div className="mt-10 max-w-[85rem] z-40">
        <h4
          className=" mb-4 text-xl md:leading-10   md:mt-0 md:text-3xl bg-white text-green p-5 rounded-full border-green-1 border-2 font-bold
        max-w-6xl m-auto"
        >
          {"Please select all areas you disinfect, sanitize, or deodorize.".toUpperCase()}
        </h4>
        <div>
          <section className="text-gray-600 body-font">
            <div className="grid  md:grid-cols-3 gap-y-5 gap-x-3 h-[70vh] md:h-auto overflow-hidden overflow-y-scroll">
              {/* <div className="grid "> */}
              {data.map((item, index) => {
                return (
                  <Card2
                    Data={Data}
                    key={index}
                    {...item}
                    onClick={() => {
                      // setCurrentData([...currentData, item]);
                      setTestArry([...testArray, item]);

                      const newData = Data.page3.data;
                      if (newData.find((i) => i.title === item.title)) {
                        setAllData((prev) => {
                          return {
                            ...prev,
                            page3: {
                              ...prev.page3,
                              data: newData.filter(
                                (i) => i.title !== item.title
                              ),
                            },
                          };
                        });
                      } else {
                        setAllData((prev: any) => {
                          return {
                            ...prev,
                            page3: {
                              ...prev.page3,
                              data: [...newData, item],
                            },
                          };
                        });
                      }
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
              {/* </div> */}
            </div>
          </section>
        </div>
      </div>
    </Flex>
  );
}

export default Section;
