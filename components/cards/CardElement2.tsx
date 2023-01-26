/** @format */

import React from "react";
import A from "../animation/A";
import Svg from "../utils/Svg";
import Flex from "../utils/Flex";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import truncate from "../../libs/Truncate";
import { page3DataAtom } from "../../atoms/data";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { dropOutVariant } from "../../animation/anime";
import Image from "next/image";

type Props = {
    svgs: string[];
    title: string;
    description: string;
    modalText: string;
    onClick: () => void;
    buttonClick?: (e: any) => void;
};

function Card2Element({ svgs, title, description, onClick, buttonClick }: Props) {
    const data = useRecoilValue(page3DataAtom);
    const iAmSelected = data.find((i: any) => i.title === title);


    console.log('svgs')
    const svg = svgs[0]

    return (
        <div
            onClick={onClick}
            className={`w-full px-10 py-4 h-full rounded-md ${iAmSelected ? `bg-green-1` : `bg-blue-1`} `}>
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-0">
                    <span
                        className="!text-white">
                        <img style={{
                            filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(46deg) brightness(200%) contrast(103%)'
                        }} className="!text-white" src={svg} width={50} height={50} />
                    </span>

                </div>
                <h1 className={`text-[22px] py-2 font-semibold ml-4 ${!iAmSelected ? `text-green-1` : `text-blue-1`} `}>{title}</h1>
            </div>
            <div className="mt-2">
                <p className="text-gray-200 text-center--">{description}</p>

            </div>
        </ div >
    )
}

export default Card2Element;