import { useState } from "react"
import { useRecoilValue } from 'recoil'
import SkinContact from "./skin-contact"
import FarmAndRanch from "./farm-and-ranch"
import HomeAndGarden from "./home-and-garden"
import WaterTreatment from "./water-treatment"
import TravelAndRecreation from "./travel-and-recreation"
import PrerequisiteDataError from "./components/prerequisite"
import { selectedCategoryAtom } from "../pages/quiz/categories"
import ProfessionalEstablishment from "./professional-establishment"
import setQueriesChangeRoutes from "../components/functions/setQueriesChangeRoutes"

const QuizNewWay = () => {
    const [step, setStep] = useState(1)
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const Max = selectedCategories.length;
    function stepSubCategoriesCount() {

        setStep(prev => prev + 1)
        console.log(Max, step)
        if (Max == step) {
            setQueriesChangeRoutes('result')
        }

    }
    const renderobject: any = {
        'skin contact': <SkinContact title="skin contact" onComplete={stepSubCategoriesCount} />,
        'farm and ranch': <FarmAndRanch title='farm and ranch' onComplete={stepSubCategoriesCount} />,
        'home and garden': <HomeAndGarden title="home and garden" onComplete={stepSubCategoriesCount} />,
        'water treatment': <WaterTreatment title="water treatment" onComplete={stepSubCategoriesCount} />,
        'travel and recreation': <TravelAndRecreation title="travel and recreation" onComplete={stepSubCategoriesCount} />,
        'professional establishments': <ProfessionalEstablishment title='professional establishments' onComplete={stepSubCategoriesCount} />,
    }

    return (
        <div className="fixed w-full h-full flex items-center justify-center ">
            {renderobject[selectedCategories[step - 1]]}
            <PrerequisiteDataError />
        </div >
    )
}
export default QuizNewWay