import { useState } from "react"
import Router from "next/router"
import { useRecoilValue } from 'recoil'
import SkinContact from "./skin-contact"
import HomeAndGarden from "./home-and-garden"
import WaterTreatment from "./water-treatment"
import PrerequisiteDataError from "./components/prerequisite"
import { selectedCategoryAtom } from "../pages/quiz/categories"
import { selectedSubCategoryAtom } from "../pages/quiz/sub-category"
import TravelAndRecreation from "./travel-and-recreation"
import ProfessionalEstablishment from "./professional-establishment"

const QuizNewWay = () => {
    const [step, setStep] = useState(1)
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const selectedSubCategories = useRecoilValue(selectedSubCategoryAtom)

    const Max = selectedCategories.length;
    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
        if (Max == step) {
            Router.push('result')
        }
    }


    const renderobject: any = {
        'skin contact': <SkinContact title="skin contact" onComplete={stepSubCategoriesCount} />,
        'water treatment': <WaterTreatment title="water treatment" onComplete={stepSubCategoriesCount} />,
        'home and garden': <HomeAndGarden title="home and garden" onComplete={stepSubCategoriesCount} />,
        'travel and recreation': <TravelAndRecreation title="travel and recreation" onComplete={stepSubCategoriesCount} />,
        'professional establishments': <ProfessionalEstablishment title='professional establishments' onComplete={stepSubCategoriesCount} />

    }


    return (
        <div className="fixed w-full h-full flex items-center justify-center">

            {renderobject[selectedCategories[step - 1]]}
            <PrerequisiteDataError />
        </div >
    )
}
export default QuizNewWay