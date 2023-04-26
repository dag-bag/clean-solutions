import { useState } from "react";
import quizdata from "../../data";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";

interface NavigationButtonGroup {
  onLeft: any;
  onRight: any;
}

interface props {
  title: string;
  children: any;
  hideButton?: boolean | undefined;
  category: string;
  stepUp: () => void;
  stepDown?: () => void;
}

export const NavigationButtonGroup: React.FC<NavigationButtonGroup> = ({
  onLeft,
  onRight,
}) => {
  return (
    <div className="flex items-center justify-between px-5">
      <button onClick={onLeft} className="bg-blue-1 p-4 rounded-full">
        <ArrowLeftIcon width={20} color="white" />
      </button>

      <button onClick={onRight} className="bg-blue-1 p-4 rounded-full">
        <ArrowRightIcon width={20} color="white" />
      </button>
    </div>
  );
};
const Layout: React.FC<props> = ({
  children,
  category,
  title,
  stepUp,
  stepDown,
  hideButton,
}) => {
  const { discription, discription_more } =
    quizdata[category].categories[title];

  const [enabled, setEnabled] = useState(false);

  const hidePopup = () => {
    setEnabled(false);
  };

  const showPopup = () => {
    setEnabled(true);
  };

  const closePopup = () => {
    setEnabled(false);
  };

  return (
    <>
      {enabled && (
        <div
          onClick={closePopup}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 grid place-items-center"
        >
          <div className="max-w-[500px] bg-white px-10 py-10 text-xl rounded-md flex items-center flex-col">
            <p className="mb-5">{discription.concat(discription_more)}</p>
            <button
              onClick={hidePopup}
              className="text-md bg-red-100 text-red-500   px-10 h-[50px] rounded-md "
            >
              {" "}
              Close
            </button>
          </div>
        </div>
      )}

      <div className="md:grid md:gap-2 md:grid-cols-2 xl:max-w-screen-xl w-screen h-screen overflow-aut borderr-red-500 overflow-y-auto md:overflow-y-none ">
        <div className="bg-blue-1 grid md:grid-rows-[200px_auto_100px] grid-rows-[100px_auto_20px]">
          <div className="flex items-center">
            <div className="bg-white py-5 px-10 rounded-md rounded-l-none ">
              <h1 className="text-green-1 md:text-3xl font-semibold capitalize">
                {category}
              </h1>
            </div>
          </div>

          <div className=" text-white flex my-auto flex-col px-7">
            <h2 className="text-[25px] md:text-[30px] font-semibold mb-4  flex  capitalize">
              {title}
            </h2>

            <p className="text-xl mb-4 hidden md:block">{discription}</p>
            <button
              onClick={showPopup}
              className="border border-white w-1/4  px-5 py-2 rounded-md"
            >
              Read More
            </button>
          </div>

          <div></div>
        </div>

        <div className=" grid md:grid-rows-[200px_auto_100px] grid-rows-[auto_150px] mt-2 md:mt-0 ">
          <div className="hidden md:flex  items-center">
            <div className="  py-5 pl-5 rounded-md rounded-l-none ">
              <img
                alt="logo"
                className="h-10"
                src="https://cleansolutions.tech/wp-content/uploads/2022/09/clean-solution-logo-1024x337-1-2.png"
              />
            </div>
          </div>
          {children}
          {!hideButton && (
            <NavigationButtonGroup onLeft={stepDown} onRight={stepUp} />
          )}
        </div>
      </div>
    </>
  );
};
export default Layout;
