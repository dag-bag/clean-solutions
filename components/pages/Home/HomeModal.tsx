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
            99.99% of ALL germs known to humankind. Discover the many ways to
            use VeriSan to defeat bacteria, viruses, mold, and odor. Your
            responses will aid in the creation of a custom, economical,
            eco-friendly EPA, NSF, NFPA FDA, CDC & FTC Cleared Disinfecting
            Solution.
          </p>
        </label>
      </label>
    </>
  );
}

export default HomeModal;
