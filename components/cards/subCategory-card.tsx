import Image from "next/image"
import { motion } from 'framer-motion'
import { useRecoilState } from "recoil"
import { selectedSubCategoryAtom } from "../../pages/quiz/sub-category"
import { ModelAtom } from "../../pages/quiz/sub-category"

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
    function onReadMoreClickHandler() {
        setModel({
            title: name,
            discription: data.discription
        })
    }
    return (
        <>
            <motion.button
                whileTap={{ scale: .9 }}
                onClick={onClickHandler}
                whileFocus={{ scale: .9 }}
                whileHover={{ scale: 1.1 }}
                className=" p-5 rounded-lg overflow-y-hidden border-2  border-blue-1"
                style={isSelected ? { background: '#95D074' } : { background: 'white' }}>

                <motion.div
                    animate={{ y: 0 }}
                    initial={{ y: -50 }}
                    key={isSelected as any}>
                    <h1 className={` text-left text-[20px] md:text-[21px] py-1 font-semibold capitalize ${!isSelected ? 'text-blue-1' : 'text-white'}`}>{name}</h1>
                    <div className="flex items-center justify-center gap-5 py-2">
                        <div role={'button'} onClick={onReadMoreClickHandler} className="btn-sm btn btn-secondary text-white font-[500] capitalize hidden md:inline-flex">Read more </div>
                        {icons.map((fileName) => <Image className="border-2 rounded-md border-blue-1" style={{ color: 'white', padding: '5px' }} width={40} height={40} alt="icon" src={`/icons/${name}/${fileName}`} />)}
                    </div>

                    <p className={`text-left text-md font-[500] md:text-[16px] line-clamp`}>{data.discription}</p>
                    <div role={'button'} onClick={onReadMoreClickHandler} className="my-3 btn-sm btn btn-secondary text-white font-[500] capitalize flex  md:hidden">Read more </div>

                </motion.div>
            </motion.button>
        </>
    )
}
export default CategoryCard


