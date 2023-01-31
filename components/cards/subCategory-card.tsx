import { selectedSubCategoryAtom } from "../../pages/quiz/sub-category"
import { useRecoilState } from "recoil"
import { dropOutVariant } from "../../animation/anime"
import { motion } from 'framer-motion'
import Image from "next/image"


interface props {
    name: string,
    data: any
    disabled?: boolean
}

const CategoryCard = ({ name, data, disabled }: props) => {

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
        <motion.div
            onClick={onClickHandler}
            variants={dropOutVariant({
                axis: "x",
                axisValue: -400,
            })}
            className={`w-full px-10 py-4 h-full rounded-md ${isSelected ? `bg-green-1` : `bg-blue-1`} ${disabled ? `opacity-50` : `opacity-100`} `}>
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-0">
                    <Image style={{ color: 'white' }} width={40} height={40} alt="none" src='/official/nails.svg' />
                </div>
                <h1 className={`text-[22px] py-2 font-semibold uppercase ml-4 ${!isSelected ? `text-green-1` : `text-blue-1`} `}>{name}</h1>
            </div>
            <div className="mt-2">
                <p className="text-gray-200 text-center--">{data[name].discription}</p>

            </div>
        </ motion.div >)
}
export default CategoryCard