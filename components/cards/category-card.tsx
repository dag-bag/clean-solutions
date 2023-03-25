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

        // className="min-h-[250px] max-w-[450px]  "

        >

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`card  rounded-xl `}
                onClick={onClickHandler}>
                <div
                    className={` rounded-3xl front items-center justify-center flex-col  bg-white shadow-2xl    transition-all duration-200 ease-in-out z-50 ${isSelected ? "border-2 border-white !bg-blue-1" : ""
                        } `}>

                    <h3 className={`text-center text-3xl font-bold px-3 uppercase ${isSelected ? 'text-white' : 'text-blue-1'}`}>{name}</h3>

                    <div className="mt-3  space-x-5 flex p-1">

                        <div className={
                            `${isSelected ? " border-blue-1 bg-white" : "border-blue-1"
                            } rounded-full p-3 border-2 `
                        }>
                            <SkinContact color={'black'} className="w-10 h-10" />

                        </div>

                        <div className={
                            `${isSelected ? " border-blue-1 bg-white" : "border-blue-1"
                            } rounded-full p-3 border-2`
                        }>
                            <SkinContact color={'black'} className="w-10 h-10" />

                        </div>


                        <div className={
                            `${isSelected ? " border-blue-1 bg-white" : "border-blue-1"
                            } rounded-full p-3 border-2`
                        }>
                            <SkinContact color={'black'} className="w-10 h-10" />

                        </div>

                    </div>

                    <p className={` text-base text-center mt-4 font-normal  px-4 capitalize ${isSelected ? 'text-white' : 'text-black'}`}>{data[name].self.discription}</p>

                </div>
                <div
                    className={` back  shadow-lg rounded-3xl ${isSelected ? "border-4" : ""
                        } bg-white  `}>
                    <div className="flex  flex-col">
                        <p className="text-xl text-center font-medium capitalize ">{data[name].self.discription}</p>
                        <button
                            className={`bg-blue-1 text-white rounded-lg py-2 mt-4 w-1/3 m-auto `}>
                            {isSelected ? "Selected" : "Select"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div >





    )
}
export default CategoryCard



