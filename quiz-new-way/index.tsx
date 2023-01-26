import { useState } from "react"
import Router from "next/router"
import { useRecoilValue } from 'recoil'
import SkinContact from "./skin-contact"
import WaterTreatment from "./water-treatment"
import PrerequisiteDataError from "./components/prerequisite"
import { selectedCategoryAtom } from "../pages/quiz/categories"

const QuizNewWay = () => {
    const [step, setStep] = useState(1)
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const Max = selectedCategories.length;
    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
        if (Max == step) {
            Router.push('result')
        }
    }

    const renderobject: any = {
        'skin contact': <SkinContact title="skin contact" onComplete={stepSubCategoriesCount} />,
        'water treatment': <WaterTreatment title="water treatment" onComplete={stepSubCategoriesCount} />
    }

    return (
        <div className="fixed w-full h-full flex items-center justify-center">
            {renderobject[selectedCategories[step - 1]]}
            <PrerequisiteDataError />
        </div >
    )
}
export default QuizNewWay