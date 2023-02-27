import Image from "next/image"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedSubCategoryAtom } from "../../pages/quiz/sub-category"
interface props {
    name: string,
    data: any
    disabled?: boolean
}

const icons = ['1.png', '2.png', '3.png']

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
        <>
            <motion.button
                whileTap={{ scale: .9 }}
                onClick={onClickHandler}
                whileFocus={{ scale: .9 }}
                whileHover={{ scale: 1.1 }}
                className=" p-5 rounded-lg overflow-y-hidden"
                style={isSelected ? { background: '#95D074' } : { background: 'white' }}>

                <motion.div
                    animate={{ y: 0 }}
                    initial={{ y: -50 }}
                    key={isSelected as any}>

                    <h1 className={`text-center text-[20px] md:text-[21px] py-2 font-semibold capitalize ${!isSelected ? 'text-blue-1' : 'text-white'}`}>{name}</h1>

                    <div className="flex items-center justify-center gap-5 py-2">
                        {icons.map((fileName) => <Image style={{ color: 'white' }} width={35} height={35} alt="icon" src={`/icons/${name}/${fileName}`} />)}
                    </div>

                    <p className={`text-center text-md font-[500] md:text-[16px] line-clamp`}>{data.discription}</p>

                </motion.div>
            </motion.button>
        </>
    )
}
export default CategoryCard


