/** @format */
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/utils/Drawer";
import Loading from "../../components/Loading";
const DynamicBlogs = dynamic(() => import('../../components/blogs-section'), {
  loading: () => <Loading contain />
})
const ResultPage = () => {
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

