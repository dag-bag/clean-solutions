import Image from "next/image"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedSubCategoryAtom } from "../../pages/quiz/sub-category"
import { ModelAtom } from "../../pages/quiz/sub-category"
import { HiArrowRight } from 'react-icons/hi'
interface props {
    name: string,
    data: any
    disabled?: boolean
}

const icons = ['1.png', '2.png', '3.png']

const CategoryCard = ({ name, data, disabled }: props) => {
    const [model, setModel] = useRecoilState(ModelAtom)
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

    function onReadMoreClickHandler(event: any) {
        event.stopPropagation()
        setModel({
            title: name,
            discription: data.discription.concat(data.discription_more)
        })
    }
    return (
        <>
            <motion.button
                whileTap={{ scale: .9 }}
                onClick={onClickHandler}
                whileFocus={{ scale: .9 }}
                whileHover={{ scale: 1.1 }}
                className=" p-5 rounded-3xl overflow-y-hidden border-4  border-green-1"
                style={isSelected ? { background: '#95D074' } : { background: 'white' }}>

                <motion.div
                    animate={{ y: 0 }}
                    initial={{ y: -50 }}
                    key={isSelected as any}>
                    <h1 className={` text-left text-[20px] md:text-[21px] py-1 font-semibold  uppercase ${!isSelected ? 'text-black' : 'text-white'}`}>{name}</h1>
                    <p className={`text-left mt-2 text-md font-[400] md:text-[16px] ${!isSelected ? 'text-black' : 'text-white'}`}>{data.discription}</p>

                    <div className="flex items-center justify-between gap-5 py-3">
                        <div role={'button'} onClick={onReadMoreClickHandler} className={`md:btn-md btn-sm w-20 md:w-auto p-2  h-auto  px-5 btn btn-secondary ${!isSelected ? 'bg-green-1' : 'bg-white text-green-1'} border-none text-white font-[500] capitalize  md:inline-flex`}>Read more <HiArrowRight className="ml-2" /> </div>

                        <div className="grid grid-cols-3 md:gap-x-5 gap-x-1 w-full md:w-auto place-items-center ">
                            {icons.map((fileName) => <Image className={`border-4 rounded-full border-gray-300 ${isSelected ? 'filter brightness-0 invert hue-rotate-180' : ''}  `} style={{ color: 'white', padding: '10px' }} width={70} height={70} alt="icon" src={`/icons/${name}/${fileName}`} />)}
                        </div>
                    </div>
                </motion.div>
            </motion.button>
        </>
    )
}
export default CategoryCard

