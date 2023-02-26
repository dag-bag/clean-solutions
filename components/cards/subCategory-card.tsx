import Image from "next/image"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedSubCategoryAtom } from "../../pages/quiz/sub-category"
import { useState } from "react"
interface props {
    name: string,
    data: any
    disabled?: boolean
}

const icons = ['1.png', '2.png', '3.png']

const CategoryCard = ({ name, data, disabled }: props) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [state, setState] = useRecoilState(selectedSubCategoryAtom)
    const isSelected = state.includes(name)
    function onClickHandler() {
        if (!disabled) {
            if (state.includes(name)) {
                const filteredArr = state.filter((key) => key !== name)
                setState(filteredArr as any)
            } else {
                setState([...state, name])
            }
        }
    }
    return (
        <>
            <motion.div className=" flex items-center justify-center "
                onHoverStart={() => { setIsFlipped(true) }}
                onHoverEnd={() => { setIsFlipped(false) }}
                whileTap={{ scale: .8 }}>
                <motion.div
                    onClick={onClickHandler}
                    transition={{ duration: 0.6 }}
                    animate={{ rotateX: isFlipped ? 180 : 0 }}
                    className={`card-container  rounded-md overflow-hidden w-full h-full ${isSelected ? 'bg-blue-1 border' : 'bg-white'}`}>

                    <motion.button tabIndex={0}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isFlipped ? 0 : 1 }}
                        className={`w-full absolute px-10 py-4 h-[150px] select-none  z-40`}>
                        <div>

                            <div className="flex items-center justify-center gap-5 py-2">
                                {icons.map((fileName) => <Image style={{ color: 'white' }} width={35} height={35} alt="icon" src={`/icons/${name}/${fileName}`} />)}
                            </div>

                            <h1 className={` text-center text-[20px] md:text-[21px] py-2 font-semibold capitalize ml-4 ${!isSelected ? 'text-blue-1' : 'text-white'}`}>{name}</h1>

                        </div>
                    </ motion.button>
                    <motion.div initial={{ opacity: 0 }} style={{ rotateX: 180 }} className=" w-full h-full absolute flex items-center justify-center p-5 z-20 select-none" animate={{ opacity: isFlipped ? 1 : 0 }}  >
                        <p className={`${isSelected ? 'text-white' : 'text-black'} text-left text-md font-[600] md:text-[16px]`}>{data.discription}</p>
                    </motion.div>
                </motion.div>
            </motion.div>

        </>
    )
}
export default CategoryCard


