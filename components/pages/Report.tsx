/** @format */

import React from "react";

type Props = {};

function Report({}: Props) {
  const data = [
    {
      mainImage:
        "https://images.ctfassets.net/t9x0u6p47op0/1INiW0FYvAmHhFMjvd274S/97022a4bb468b9e3ac0f95d22da52cfd/recommendation-category-vitamins.svg?",
      name: "Vitamin pack",
      p: "Your 30-day supply of vitamin packs tailored to your unique needs.",
      images: [
        {
          name: "Energy",
          img: "https://images.ctfassets.net/t9x0u6p47op0/4995ELFtWVVeFbGMC7IaLH/ca2955c1891720fb22320093c2934ca1/energy.svg?h=200&w=200",
        },
        {
          name: "Diet",
          img: "https://images.ctfassets.net/t9x0u6p47op0/4dPn94emMnJPqntogNdx2L/fef3a4b495999a7b9b1befb890f55ec9/diet.svg?h=200&w=200",
        },
      ],
    },
    {
      mainImage:
        "https://images.ctfassets.net/t9x0u6p47op0/EBXmbmO7O5Q52z3j9nHEN/940c6952a51cd2f374c5d790ef02bea2/recommendation-category-powders.svg?",
      name: "Powder pack",
      p: "Nutrient-rich powders to target your health goals and diet gaps as needed.",
      images: [
        {
          name: "Hair",
          img: "https://images.ctfassets.net/t9x0u6p47op0/4995ELFtWVVeFbGMC7IaLH/ca2955c1891720fb22320093c2934ca1/energy.svg?h=200&w=200",
        },
        {
          name: "Fitness",
          img: "https://images.ctfassets.net/t9x0u6p47op0/4dPn94emMnJPqntogNdx2L/fef3a4b495999a7b9b1befb890f55ec9/diet.svg?h=200&w=200",
        },
        {
          name: "Diet",
          img: "https://images.ctfassets.net/t9x0u6p47op0/4dPn94emMnJPqntogNdx2L/fef3a4b495999a7b9b1befb890f55ec9/diet.svg?h=200&w=200",
        },
      ],
    },
  ];
  return (
    <div className="bg-green-50 h-screen py-16">
      <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-gray-900  font-bold text-4xl md:text-6xl lg:text-4xl xl:text-4xl uppercase">
          Your
          <span className="text-teal-600 dark:text-green-1 mx-4">
            recommendations
          </span>
          are ready
        </h1>
        <p className="mt-8 text-gray-700 ">
          Choose which you'd like to see (you can select more than one)
        </p>
        <div className="grid grid-cols-2 max-w-3xl  m-auto place-items-center">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center flex-col space-y-3 "
              >
                <img src={item.mainImage} alt="" className="w-40 h-40" />
                <h1 className="text-2xl font-medium">{item.name}</h1>
                <p className="">{item.p}</p>
                <div
                  className="bg-black h-[1px] w-full
                "
                />
                <div className=" flex justify-between space-x-10">
                  {item.images.map((img) => {
                    return (
                      <div className="">
                        <img src={img.img} alt="" className="w-10" />
                        <p>{img.name}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="btn btn-primary bg-green-1 border-none px-20">
                  Select
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Report;
