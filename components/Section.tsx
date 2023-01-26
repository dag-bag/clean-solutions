/** @format */
import Card2 from "./cards/Card2";
import { Page3 } from "../types/page";
import { flattenDeep, find } from "lodash";
import { Question } from "../atoms/quizData";
import { currentModalAtom } from "../atoms/modalAtom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { page3DataAtom, page4DataAtom } from "../atoms/data";

import Card2Element from "./cards/CardElement2";

type Props = {
  data: Page3[];
  slug?: string;
};

function Section({ data }: Props) {

  console.log(data)

  const [das, setDash] = useRecoilState(page4DataAtom);
  const setCurrentModal = useSetRecoilState(currentModalAtom);
  const [page3Data, setPage3Data] = useRecoilState(page3DataAtom);

  const handleClick = (item: Page3) => {
    let fin = find(das, { uni: item.title });
    let newQuestion = item.questions.map((question) => {
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
    <div className=" h-full">

      <header className=" h-[200px] flex items-center justify-center flex-col">
        <h1 className="text-center md:text-[50px] text-[35px] font-heading text-white font-semibold capitalize">
          Choose the sub-categories
        </h1>
        <p className="text-gray-200 text-center p-2">Select the sub-categories in which you are interested.</p>
      </header>

      <main className=" h-auto mt-5 px-5">
        <div className="grid max-w-[85rem] lg:grid-cols-3  md:grid-cols-2 gap-y-5 gap-x-3 overflow-hidden overflow-y-scroll scrollbar-hide md:overflow-visible">

          {data.map((item, index) => {
            return (
              <div className=" h-full w-full">
                <div className="md:hidden block h-full">
                  <Card2Element
                    {...item}
                    key={index}
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
                </div>
                <div className="md:block  hidden">
                  <Card2
                    {...item}
                    key={index}
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
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Section;
