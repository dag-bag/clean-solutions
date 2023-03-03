/** @format */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Loading from "../../components/Loading";
import Drawer from "../../components/utils/Drawer";
import setQueriesChangeRoutes from "../../components/functions/setQueriesChangeRoutes";
const DynamicBlogs = dynamic(() => import('../../components/blogs-section'), {
  loading: () => <Loading contain />
})

import categoryState from "../../quiz/state";
import { useRecoilState } from "recoil";

const ResultPage = () => {
  const Router = useRouter()
  const [data, updateData] = useRecoilState(categoryState)

  return (
    <>
      <Head>
        <title>Result</title>
      </Head>
      <Navbar />
      <Drawer />
      <section className=" bg-blue-1 bg-opacity-10 mb-5 relative">
        <div className="grid md:grid-cols-2 py-20 px-5 max-w-7xl m-auto">
          <div>
            <h1 className="text-[40px] text-blue-1 capitalize font-light text-center md:text-left mb-3"><b className="font-[600]">{Router?.query.name}'s</b> recommended daily supplements</h1>
            <p className="text-gray-500 text-md text-center md:text-left mb-3">We've curated a monthly supply of vitamins tailored to your unique needs based on the answers you've selected.</p>

            <div className="grid place-items-center md:hidden mb-3 ">
              <Image src={'/page.png'} alt="any" width={500} height={500} />
            </div>

            <div className="mb-3">
              <h3 className="text-[20px] font-semibold text-blue-1">Your personalized recommendations support:</h3>
              <div className="h-40 bg-gray-300 grid place-items-center my-2 animate-pulse rounded-md">icons goes here</div>
            </div>

            <div className="flex items-center justify-center flex-col md:flex-row md:justify-evenly ">
              <button className="bg-green-1 text-white font-semibold w-[200px] py-3 rounded-full">Continue ›</button>
              <button onClick={() => { setQueriesChangeRoutes('report') }} className=" mt-3 md:mt-0 border-2 border-green-1 text-green-1 font-semibold w-[200px] py-3 rounded-full ">View Report ›</button>
            </div>

          </div>
          <div className="md:grid md:place-items-center hidden ">
            <Image src={'/page.png'} alt="any" width={400} height={400} />
          </div>
        </div>
      </section >
      {JSON.stringify(data)}
      <DynamicBlogs />
    </>
  );
};

export default ResultPage;

