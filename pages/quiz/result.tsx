/** @format */
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Navbar from "../../components/Navbar";
import categoryState from "../../quiz/state";
import Drawer from "../../components/utils/Drawer";
import { PostsInterFace } from "../../types/blogs";
import { GetPostsFromNextJsApi } from "../../services/blogs";
import Loading from "../../components/Loading";

import dynamic from "next/dynamic";

const DynamicBlogs = dynamic(() => import('../../components/blogs-section'), {
  loading: () => <Loading />
})



const ResultPage = () => {
  // const { data } = useSWR<PostsInterFace[]>(
  //   "/blogs",
  //   GetPostsFromNextJsApi
  // );
  const state = useRecoilValue(categoryState);
  const [toggles, setToggles] = useState({
    categories: false,
  });

  // if (!data) {
  //   return (
  //     <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center">
  //       <div className="inline-flex items-center px-4 py-2 font-[500] leading-6 text-2xl  transition ease-in-out duration-150 cursor-not-allowed">
  //         <svg className="animate-spin mr-5 h-10 w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  //           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  //           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  //         </svg >
  //         Generating Your Report
  //       </div >
  //     </div >
  //   )
  // }

  return (
    <>
      <Navbar />
      <Drawer />
      <section className=" bg-blue-1 bg-opacity-10 mb-5 ">
        <div className="grid md:grid-cols-2 py-20 px-5 max-w-7xl m-auto">

          <div>
            <h1 className="text-[40px] text-blue-1 capitalize font-light text-center md:text-left mb-3"><b className="font-[600]">deepka's</b> recommended daily supplements</h1>
            <p className="text-gray-500 text-md text-center md:text-left mb-3">We've curated a monthly supply of vitamins tailored to your unique needs based on the answers you've selected.</p>

            <div className="grid place-items-center md:hidden mb-3 ">
              <Image src={'/page.png'} alt="any" width={500} height={500} />
            </div>

            <div className="mb-3">
              <h3 className="text-[20px] font-semibold text-blue-1">Your personalized recommendations support:</h3>
              <div className="h-40 bg-gray-300 grid place-items-center my-2 animate-pulse rounded-md">icons goes here</div>
            </div>

            <button className="bg-green-1 text-white font-light w-[200px] py-3 rounded-full">Continue ›</button>

          </div>
          <div className="md:grid md:place-items-center hidden ">
            <Image src={'/page.png'} alt="any" width={400} height={400} />
          </div>

        </div>
      </section >

      <DynamicBlogs />

    </>
  );
};

export default ResultPage;

