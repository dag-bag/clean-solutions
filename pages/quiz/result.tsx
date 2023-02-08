/** @format */

import useSWR from "swr";
import Router from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/utils/Drawer";
import { PostsInterFace } from "../../types/blogs";
import categoryState from "../../quiz-new-way/state";
import { GetPostsFromNextJsApi } from "../../services/blogs";

const ResultPage = () => {
  const { data } = useSWR<PostsInterFace[]>(
    "/blogs",
    GetPostsFromNextJsApi
  );
  const state = useRecoilValue(categoryState);
  const [toggles, setToggles] = useState({
    categories: false,
  });

  if (!data) {
    return (
      <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center">


        <div className="inline-flex items-center px-4 py-2 font-[500] leading-6 text-2xl  transition ease-in-out duration-150 cursor-not-allowed">
          <svg className="animate-spin mr-5 h-10 w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg >
          Generating Your Report
        </div >

      </div >
    )

  }

  return (
    <>
      <Navbar />
      <Drawer />
      <main className=" bg-white max-w-7xl m-auto">
        <div>
          <h1 className=" text-blue-1 text-center md:text-5xl text-3xl  font-[500] md:leading-[60px] px-6 py-[5rem]">
            Congratulation, <br /> You have completed the quiz{" "}
          </h1>
        </div>

        {/* <section className="border rounded-md overflow-hidden m-5">
          <h3 className="py-2 text-lg font-[500] bg-blue-1 px-5 text-white" >
            Completed Categories
          </h3>
          <div>
            {Object.keys(state).map((name, index) => {
              return (
                <div
                  key={index}
                  className="px-5 even:bg-gray-50 py-1 capitalize  grid grid-cols-2">
                  <b className="font-[500] text-gray-600">{name}</b>
                  {state[name]
                    ? state[name] == '--skipped'
                      ? <span className="text-blue-500  px-2">{"Skipped"}</span>
                      : <span className="text-green-500  px-2">{"✓ Selected"}{" "}</span>
                    : <span className="text-red-500  px-2">{"× Unselected"}</span>}

                </div>
              );
            })}
          </div>
        </section> */}

        {/* <section className="border rounded-md overflow-hidden mt-5 m-5">
          <h3 className="py-2 text-lg font-[500] bg-blue-1 px-5 text-white ">
            {" "}
            Suggested Products
          </h3>
          <div className="px-5 py-20">
            <p className="text-center">products goes here......</p>
          </div>
        </section> */}
        {/* Create a Section for blogs According to selections  */}


        <section id="blog" className="blog">
          {data && data.map((blogData) => (
            <BlogTile {...blogData} />
          ))}
        </section>
      </main>
    </>
  );
};

export default ResultPage;

import BlogTile from "../../components/blogTile";