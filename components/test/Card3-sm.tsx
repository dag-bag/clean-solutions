/** @format */

import React from "react";
import { useRecoilState } from "recoil";

import { Page2 } from "../../types/page";
import { page2DataAtom } from "../../atoms/data";

import { motion } from "framer-motion";
import A from "../animation/A";
import { dropOutVariant } from "../../animation/anime";

import CardFront from "../pages/page2/CardFront";
import CardBack from "../pages/page2/CardBack";

function Card3SM({ title, svgs, text, index, l }: Page2) {
    const [page2Selected, setPage2Selected] = useRecoilState(page2DataAtom);
    const isSelected = page2Selected.find((i: any) => i.title === title);

    const handleCardClick = () => {
        if (isSelected) {
            const newPage2Selected = page2Selected.filter(
                (i: any) => i.title !== title
            );
            setPage2Selected(newPage2Selected);
        } else {
            setPage2Selected([
                ...page2Selected,
                {
                    title,
                    svgs,
                    text,
                    index,
                },
            ]);
        }
    };

    const Icon = svgs[0]
    const iAmSelected = isSelected?.title == title;

    return (
        <motion.div
            onClick={handleCardClick}
            variants={dropOutVariant({
                axis: "x",
                axisValue: -400,
            })}
            className={`w-full px-10 py-4 h-full rounded-md ${iAmSelected ? `bg-green-1` : `bg-blue-1`} `}>
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-0">
                    <span
                        className="text-white">
                        <Icon
                            key={index}
                            color="white"
                            className={` ${l ? "w-16" : "w-10"} ${l ? "h-16" : "h-10"}  bg-transparent flex justify-center items-center`} />
                    </span>

                </div>
                <h1 className={`text-[22px] py-2 font-semibold ml-4 ${!iAmSelected ? `text-green-1` : `text-blue-1`} `}>{title}</h1>
            </div>
            <div className="mt-2">
                <p className="text-gray-200 text-center--">{text}</p>

            </div>
        </ motion.div >
    );
}

export default Card3SM;
