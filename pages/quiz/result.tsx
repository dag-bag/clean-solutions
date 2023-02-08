/** @format */

import Router from "next/router";
import { useState } from "react";
import categoryState from "../../quiz-new-way/state";
import { useRecoilValue } from "recoil";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/utils/Drawer";
import { GetStaticProps } from "next";
import { GetAllBlogs } from "../../services/blogs";
import { PostsInterFace } from "../../types/blogs";
import useSWR from "swr";
import { GetPostsFromNextJsApi } from "../../services/blogs";


const ResultPage = () => {

  const { data } = useSWR<{ posts: PostsInterFace[] }>(
    "/blogs",
    GetPostsFromNextJsApi
  );


  console.log(data)

  const state = useRecoilValue(categoryState);
  const [toggles, setToggles] = useState({
    categories: false,
  });
  const BlogLink = (id: number) => {
    const { push } = Router;
    push({
      pathname: `/blog/${id}`,
    });
  };
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

        <section className="border rounded-md overflow-hidden mt-5 m-5">
          <h3 className="py-2 text-lg font-[500] bg-blue-1 px-5 text-white ">
            {" "}
            Suggested Products
          </h3>
          <div className="px-5 py-20">
            <p className="text-center">products goes here......</p>
          </div>
        </section>
        {/* Create a Section for blogs According to selections  */}
        <section id="blog" className="blog">
          {/* {posts?.map(({ title, id }) => (
            <li className="container list-decimal" onClick={() => BlogLink(id)}>
              <h1>{title.rendered}</h1>
            </li>
          ))} */}
        </section>
      </main>
    </>
  );
};

export default ResultPage;

