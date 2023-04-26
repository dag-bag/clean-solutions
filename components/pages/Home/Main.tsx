import Link from "next/link";
import Btn from "../../utils/Btn";
import Model from "../../modal/Modal";
import { useRecoilState } from "recoil";
import { ModelAtom } from "../../../pages/quiz/sub-category";

const TrustedIcons = [
  "bigstock-green-earth-and-leaves-14539535",
  "Non-Toxic-Icon",
  "pngguru.com",
  "pngwing.com",
  "SeekPng.com_support-our-troops-png_5841661",
];
const Main = () => {
  const [model, setModel] = useRecoilState(ModelAtom);
  function onViewMoreBtnHandler() {
    setModel({
      title: "Discription",
      discription:
        "Use it on hard and soft surfaces, food, plants, animals, skin, water, entire rooms, and much more. No organism tested has proven to be resilient. Kill 99.99% of ALL germs known to humankind Discover the many ways to use to defeat bacteria, viruses, mold, and odor.Your responses will aid in the creation of a custom, economical, eco-frienly EPA, NSF, NFPA FDA, CDC & FTC Cleared Disinfecting Solution",
    });
  }

  return (
    <>
      {model && <Model title={model.title} discription={model.discription} />}
      <div className="bg-blue-1 min-h-[calc(100vh-64px)]  lg:grid lg:grid-cols-[1.5fr_1fr] ">
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-0">
          <div className="xl:max-w-[700px] lg:max-w-[500px] max-w-[90%] mx-auto grid gap-10 lg:gap-[5vh] mb-5">
            <h1 className="hollow  text-center text-5xl md:text-[4rem] text-white  ">
              Clean Tech Solutions
            </h1>
            <h2 className="text-5xl  font-semibold sm:text-5xl lg:text-5xl xl:text-[4rem] text-center">
              Take Your Own Adventure Quiz
            </h2>
            <p className="text-[20px] text-center md:text-md   text-gray-200">
              Use it on hard and soft surfaces, food, plants, animals, skin,
              water, entire
              <span className="xl:block">
                rooms, and much more. No organism tested has proven to be
                resilient.{" "}
              </span>
              <span className="xl:block">
                Kill 99.99% of ALL germs known to humankind.
              </span>
            </p>
            <div className="flex flex-col items-center  md:flex-row justify-center">
              <Link href={"/quiz"} legacyBehavior>
                <Btn />
              </Link>
              <button
                onClick={onViewMoreBtnHandler}
                className=" lg:w-[200px] text-center w-[250px]  md:inline-flex block  items-center justify-center py-3 px-10 overflow-hidden font-semibold text-green-1 transition-all duration-150 ease-in-out rounded-full hover:pl-10  bg-none group border border-green-1  mx-5 my-4  md:my-0 "
              >
                Read More
              </button>
            </div>
          </div>

          <div className=" border-t border-gray-300 max-w-[700px] mx-auto pt-5 ">
            <div className="mt-2 flex gap-6 justify-center items-center">
              {TrustedIcons.map((icon) => (
                <div className="flex items-center">
                  <img
                    className=" w-20 h-auto "
                    src={`./label-icons/${icon}.png`}
                    width={50}
                    height={20}
                    alt="logo partener"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <img
            className="fixed right-0 
        xl:top-[15%] xl:w-[40%]
        lg:top-[20%] lg:w-[40%] lg:block
        md:hidden
        hidden"
            src="/sanitizer-quiz2.png"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};
export default Main;
