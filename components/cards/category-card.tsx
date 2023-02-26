import data from "../../data"
import { useState } from "react"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedCategoryAtom } from "../../pages/quiz/categories"
import Svg from "../utils/Svg";

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
    const [isFlipped, setIsFlipped] = useState(false);
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
        // <motion.div className=" flex items-center justify-center "
        //     onHoverStart={() => { setIsFlipped(true) }}
        //     onHoverEnd={() => { setIsFlipped(false) }}
        //     whileTap={{ scale: .8 }}>
        //     <motion.div
        //         onClick={onClickHandler}
        //         transition={{ duration: 0.6 }}
        //         animate={{ rotateX: isFlipped ? 180 : 0 }}
        //         className={`card-container rounded-md overflow-hidden w-full h-full ${isSelected ? 'bg-blue-1 border' : 'bg-white'}`}>

        //         <motion.button tabIndex={0}
        //             initial={{ opacity: 1 }}
        //             animate={{ opacity: isFlipped ? 0 : 1 }}
        //             className={`w-full absolute px-10 py-4 h-[150px] select-none  z-40`}>
        //             <div className="flex items-center">
        //                 <div className="flex items-center justify-center gap-0">
        //                     <Image
        //                         alt="none"
        //                         width={40}
        //                         height={40}
        //                         src='/official/nails.svg'
        //                         style={{ color: 'white' }} />
        //                 </div>
        //                 <h1 className={` text-left text-[20px] md:text-[21px] py-2 font-semibold capitalize ml-4 ${!isSelected ? 'text-blue-1' : 'text-white'}`}>{name}</h1>
        //             </div>
        //         </ motion.button>
        //         <motion.div initial={{ opacity: 0 }} style={{ rotateX: 180 }} className=" w-full h-full absolute flex items-center justify-center p-5 z-20 select-none" animate={{ opacity: isFlipped ? 1 : 0 }}  >
        //             <p className={`${isSelected ? 'text-white' : 'text-black'} text-left text-md font-[600] md:text-[16px]`}>{data[name].self.discription}</p>
        //         </motion.div>
        //     </motion.div>
        // </motion.div>


        <motion.div
            variants={dropOutVariant({
                axis: "x",
                axisValue: -400,
            })}
            className="h-[250px] ">

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="card  rounded-lg w-full"
                onClick={onClickHandler}>
                <div
                    className={`front flex-col  bg-white shadow-2xl rounded-lg ${isSelected ? "border-4 border-green-1" : ""
                        }   transition-all duration-200 ease-in-out z-50 `}>

                    <h3 className="mt-4 text-center text-2xl font-semibold text-blue-1  uppercase">{name}</h3>
                    <p className="text-black text-base text-center mt-4 font-normal lowercase px-4">{data[name].self.discription}</p>
                    <div className="mt-3 space-x-8 flex p-1">
                        {[
                            "https://cleansolutions.tech/wp-content/uploads/2022/03/long-wavy-hair-variant.png",
                            "https://cleansolutions.tech/wp-content/uploads/2022/03/skincare-1.png",
                            "https://cleansolutions.tech/wp-content/uploads/2022/03/washing-hands.png",
                        ].map((src, index) => {
                            return (
                                <Svg
                                    src={src}
                                    key={index}
                                    select={isSelected}
                                    h={"h-14"}
                                    w="w-14"
                                />
                            );
                        })}
                    </div>
                </div>
                <div
                    className={` back sd shadow-lg rounded-lg ${isSelected ? "border-4 border-green-1" : ""
                        } bg-white  `}>
                    <div className="flex  flex-col">
                        <p className="text-xl text-center font-medium ">{data[name].self.discription}</p>
                        <button
                            className={`${isSelected ? "bg-green-1" : "bg-blue-1"
                                }  text-white rounded-lg py-2 mt-4 w-1/3 m-auto `}
                        >
                            {isSelected ? "Selected" : "Select"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>



    )
}
export default CategoryCard



