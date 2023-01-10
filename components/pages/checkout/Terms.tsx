/** @format */

import { Disclosure } from "@headlessui/react";
// import { ChevronUpIcon } from "@heroicons/react/20/solid";
const lisData = [
  "This website’s content is provided for informational purposes only. It can be changed at any time without notice.",
  "We and third parties do not provide any warranties or guarantees as to the accuracy or timeliness of, performance, completeness, or suitability for any purpose of the information and materials found on this website. These materials and information may be incomplete or inaccurate. We expressly disclaim liability for such errors or inaccuracies to the maximum extent allowed by law.",
  "You assume all risks when you use any information or materials from this website. We are not responsible for it. You are responsible for ensuring that the products, information and services available through this site meet personal, state and federal requirements.",
  "This website contains material that we own or have licensed. This includes the design, layout and appearance of this material. Copyright notice is part of these terms & conditions.",
  "All trademarks used in this website are acknowledged by the operator.",
  "Unauthorized use of this site may result in a claim for damages or even a criminal offense.",
  "This website may contain links to other websites from time to time. These links are provided to make it easier for you to find more information. These links do not imply endorsement of the website(s). We are not responsible for the content of linked websites.",
  "Any dispute that may arise from your use of this website or any other use of it is subject to the New Mexico Laws, USA",
  "To the extent consistent with applicable law, the seller makes no other warranties, either express or implied, including but not limited to the warranties of merchantability or fitness for a particular purpose or use that extends beyond the statements made on this website. Our statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Please educate yourself. ",
];
export default function Terms() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 ml-5 font-medium">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-bale-1 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-1 focus-visible:ring-opacity-75">
              <span> terms and conditions*</span>
              {/* <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                /> */}
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-800 max-h-60 overflow-scroll space-y-4">
              <h1 className="text-3xl">TERMS AND CONDITIONS</h1>
              <p>
                {" "}
                We are pleased to welcome you to our website. By clicking the
                box you agree to the following terms and conditions of your use
                of this website. These, along with our privacy policies, govern
                Mind Science Labs LLC DBA Clean Solutions relationship to you
                regarding this website. Please do not use this website if you
                disagree with any of these terms.
              </p>
              <p>
                The owner of this website is Clean Solutions LLC DBA. Their
                registered office address is 1200 Dickerson ABQ, NM. Our website
                is viewed by you, the user. These terms govern your use of the
                website and our products:
              </p>
              {lisData.map((li, index) => {
                return <li key={index}>{li}</li>;
              })}
              <h2 className="text-2xl">Transaction charges</h2>
              <p>
                All transactions made through this site will be reflected on
                your credit card statement, as charged by Mind Science Labs LLC.
              </p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
