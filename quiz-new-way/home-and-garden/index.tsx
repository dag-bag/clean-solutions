import { useState } from 'react'
import { useRecoilValue } from 'recoil';

import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';
import findSimilarInArr from '../components/functions/findSimilarInArr';
import GreenHouseGarden from './green-house-garden';
import HardSurfacesAppliances from './hard-surfaces-appliaces';

const HomeAndGarden = ({ title, onComplete }: any) => {
    console.log(' Home and garden component is rendered')

    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)

    const props = {
        category: title,
        onComplete: stepSubCategoriesCount
    }

    const renderObject: any = {
        'hard surfaces and appliances': <HardSurfacesAppliances title={'hard surfaces and appliances'} {...props} />,
        'greenhouse and garden': <GreenHouseGarden title={'greenhouse and garden'}  {...props} />,
    }

    const mySubCategories = findSimilarInArr(Object.keys(renderObject), subCategories)
    const Max = mySubCategories.length; // it represent total count of selected categories

    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
        if (Max == step) {
            onComplete()
        }
    }

    return (
        <div>
            {renderObject[mySubCategories[step - 1]]}
        </div>
    )
}

export default HomeAndGarden