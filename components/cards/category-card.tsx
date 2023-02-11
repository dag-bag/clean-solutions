import Image from "next/image"
import { useRecoilState } from "recoil"
import data from "../../data"
import { selectedCategoryAtom } from "../../pages/quiz/categories"

const CategoryCard = ({ name }: any) => {
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
        <button onClick={onClickHandler}
            className={`w-full px-10 py-4 h-full rounded-md ${isSelected ? `bg-green-1` : `bg-blue-1`} select-none`} tabIndex={0}>
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-0">
                    <Image style={{ color: 'white' }} width={40} height={40} alt="none" src='/official/nails.svg' />
                </div>
                <h1 className={` text-left text-[20px] md:text-[21px] py-2 font-semibold capitalize ml-4  ${!isSelected ? `text-green-1` : `text-blue-1`} `}>{name}</h1>
            </div>
            <div className="mt-2">
                <p className="text-gray-200 text-left text-sm md:text-[16px]">{data[name].self.discription}</p>
            </div>
        </ button >)
}
export default CategoryCard