import { selectedCategoryAtom } from "../../pages/quiz/categories"
import { useRecoilValue } from 'recoil'
import Router from "next/router"

const PrerequisiteDataError = () => {
    const categories = useRecoilValue(selectedCategoryAtom)
    function onClickHandler() {
        Router.push('/quiz/categories')
    }
    if (categories.length == 0) {
        return (
            <div className="m-2 p-10 bg-red-100 rounded-md max-w-[350px]">
                <h5 className="text-xl font-semibold text-red-500 ">Quiz data not found</h5>
                <p className="py-3 text-red-500 text-sm">We need categories before starting the quiz and we havent received any.</p>
                <button onClick={onClickHandler} className="btn btn-outline border-red-500 border-2 text-red-500 hover:bg-red-500 w-full">go back</button>
            </div>
        )
    }
    return null

}
export default PrerequisiteDataError