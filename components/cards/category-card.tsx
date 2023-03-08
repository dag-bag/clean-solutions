import data from "../../data"
import { useState } from "react"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedCategoryAtom } from "../../pages/quiz/categories"
import Svg from "../utils/Svg";

import { SkinContact, SkinContact2 } from "../Icons"

let easing = [0.6, -0.05, 0.01, 0.99];

const dropOutVariant = ({ axis, axisValue, delay }: any) => {
    return {
        hidden: {
            [axis]: axisValue,
            opacity: 0,
            transition: { duration: 0.6, ease: easing },
        },
        visible: {
            [axis]: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing,
            },
        },
        exit: {
            opacity: 0,
        },
    };
};


const CategoryCard = ({ name }: any) => {
    const [state, setState] = useRecoilState(selectedCategoryAtom)
    const isSelected = state.includes(name)
    function onClickHandler() {
        if (state.includes(name)) {
            const filteredArr = state.filter((key) => key !== name)
            setState(filteredArr as any)
        } else {
            setState([...state, name])
        }
    }
    return (
        <motion.div
            variants={dropOutVariant({
                axis: "x",
                axisValue: -400,
            })}
            className="h-[285px] ">

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`card  rounded-3xl w-full   `}
                onClick={onClickHandler}>
                <div
                    className={` rounded-3xl front items-center justify-center flex-col  bg-white shadow-2xl    transition-all duration-200 ease-in-out z-50 ${isSelected ? "border-4 border-green-1" : ""
                        } `}>


                    <h3 className="text-center text-3xl font-bold text-blue-1 uppercase ">{name}</h3>

                    <p className="text-black text-base text-center mt-4 font-normal lowercase px-4">{data[name].self.discription}</p>
                    <div className="mt-3 space-x-8 flex p-1">

                        <div className={
                            `${isSelected ? " border-green-1" : "border-gray-200"
                            } rounded-full p-3 border-4`
                        }>
                            <SkinContact color={isSelected ? "#95D074" : "#518ca4"} className="w-10 h-10" />

                        </div>

                        <div className={
                            `${isSelected ? " border-green-1" : "border-gray-200"
                            } rounded-full p-3 border-4`
                        }>
                            <SkinContact color={isSelected ? "#95D074" : "#518ca4"} className="w-10 h-10" />

                        </div>


                        <div className={
                            `${isSelected ? " border-green-1" : "border-gray-200"
                            } rounded-full p-3 border-4`
                        }>
                            <SkinContact color={isSelected ? "#95D074" : "#518ca4"} className="w-10 h-10" />

                        </div>


                    </div>
                </div>
                <div
                    className={` back  shadow-lg rounded-3xl ${isSelected ? "border-4 border-green-1" : ""
                        } bg-white  `}>
                    <div className="flex  flex-col">
                        <p className="text-xl text-center font-medium capitalize ">{data[name].self.discription}</p>
                        <button
                            className={`${isSelected ? "bg-green-1" : "bg-blue-1"
                                }  text-white rounded-lg py-2 mt-4 w-1/3 m-auto `}
                        >
                            {isSelected ? "Selected" : "Select"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div >





    )
}
export default CategoryCard



