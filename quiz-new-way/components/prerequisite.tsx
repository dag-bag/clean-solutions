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
            <div className="m-2 p-5 bg-red-100 rounded-md max-w-[300px]">
                <h5 className="text-xl font-semibold text-red-500 py-1"> Prerequisite Data Error</h5>
                <p className="py-2 text-red-500 text-sm">We need categories before starting the quiz and we havent received any.</p>
                <button onClick={onClickHandler} className="btn btn-error w-full">go back</button>
            </div>
        )
    }
    return null

}
export default PrerequisiteDataError