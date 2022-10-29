/** @format */

import React from "react";
import { useRecoilValue } from "recoil";
import { currentModalAtom } from "../../atoms/modalAtom";
import Svg from "../utils/Svg";

function Modal() {
  const { title, text, svgs } = useRecoilValue(currentModalAtom);
  return (
    <>
      {/* <!-- The button to open modal --> */}

      <div
        className="modal "
        id="my-modal-3"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{text}</p>
          <div className="modal-action ">
            <div className="flex mr-12 space-x-4">
              {svgs.map((src, index) => {
                return <Svg src={src} h="h-10" w="w-10" />;
              })}
            </div>
            <a href="#" className="btn bg-red-500 text-white border-none ">
              Close
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
