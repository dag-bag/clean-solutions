import data from "../../data"
import Image from "next/image"
import { useState } from "react"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedCategoryAtom } from "../../pages/quiz/categories"

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
        <motion.div className=" flex items-center justify-center "
            onHoverStart={() => { setIsFlipped(true) }}
            onHoverEnd={() => { setIsFlipped(false) }}
            whileTap={{ scale: .8 }}>

            <motion.div
                onClick={onClickHandler}
                transition={{ duration: 0.6 }}
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                className={`card-container rounded-md overflow-hidden w-full h-full ${isSelected ? 'bg-blue-1 border' : 'bg-white'}`}>

                <motion.button tabIndex={0}
                    animate={{ opacity: isFlipped ? 0 : 1 }}
                    className={`w-full absolute px-10 py-4 h-[150px] select-none z-10`}>
                    <div className="flex items-center">
                        <div className="flex items-center justify-center gap-0">
                            <Image
                                alt="none"
                                width={40}
                                height={40}
                                src='/official/nails.svg'
                                style={{ color: 'white' }} />
                        </div>
                        <h1 className={` text-left text-[20px] md:text-[21px] py-2 font-semibold capitalize ml-4 ${!isSelected ? 'text-blue-1' : 'text-white'}`}>{name}</h1>
                    </div>
                </ motion.button>
                <motion.div style={{ rotateX: 180 }} className=" w-full h-full absolute flex items-center justify-center p-5 z-20" animate={{ opacity: isFlipped ? 1 : 0 }}  >
                    <p className={`${isSelected ? 'text-white' : 'text-black'} text-left text-md font-[600] md:text-[16px]`}>{data[name].self.discription}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default CategoryCard



