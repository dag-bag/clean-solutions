/** @format */

import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  selectionDataAtom,
  singlePageDataSelector,
} from "../../atoms/quizData";
import Section from "../../components/Section";

type Props = {
  slug: string;
};

function Slug({ slug }: Props) {
  console.log({ slug });
  //   let slug = router.query.slug;
  const thisPageData = useRecoilValue(singlePageDataSelector(slug));
  if (!thisPageData) {
    return (
      <div className="flex justify-center items-center w-full h-[100vh]">
        NO Page Found
      </div>
    );
  }

  return <Section data={thisPageData.data} />;
}

export default Slug;
