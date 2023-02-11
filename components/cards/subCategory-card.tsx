import Image from "next/image"
import { useRecoilState } from "recoil"
import { selectedSubCategoryAtom } from "../../pages/quiz/sub-category"

interface props {
    name: string,
    data: any
    disabled?: boolean
}

const CategoryCard = ({ name, data, disabled }: props) => {

    const icons = ['1.png', '2.png', '3.png']

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
        <button style={disabled ? { opacity: .5 } : undefined} onClick={onClickHandler}
            className={`w-full px-5 py-2  h-full rounded-md ${isSelected ? 'border-2 border-blue-1 bg-blue-50' : 'border-2'} select-none bg-gray-50 `} tabIndex={0}>
            <div className="flex items-center flex-col">
                <h1 className={`  text-[20px] md:text-[21px] py-2 font-semibold capitalize ml-4 text-center ${!isSelected ? `text-green-1` : `text-blue-1`} `}>{name}</h1>
                <div className="flex items-center justify-center gap-5 py-2">
                    {icons.map((fileName) => <Image style={{ color: 'white' }} width={35} height={35} alt="icon" src={`/icons/${name}/${fileName}`} />)}
                </div>
            </div>
            <div className="mt-2">
                <p className="text-gray-500 text-sm md:text-[16px] text-center">{data[name].discription}</p>
            </div>
        </ button >)
}
export default CategoryCard