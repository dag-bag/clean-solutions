/** @format */

import React from "react";

type Props = {};

function HomeModal({}: Props) {
  return (
    <>
      <label htmlFor="my-modal-4" className="btn mt-2 md:mt-0 md:ml-4 ">
        Learn More
      </label>

      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle md:!space-x-0"
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-black">
            Congratulations random Internet user!
          </h3>
          <p className="py-4 text-black">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </>
  );
}

export default HomeModal;
