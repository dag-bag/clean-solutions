import { useState } from 'react'
import { useRecoilValue } from 'recoil';

import OfficesAndInstitutes from './offices-and-institutes';
import WaterSystemBasinsAndStorage from './water-syestems-basins-and-storage'

import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';
import findSimilarInArr from '../components/functions/findSimilarInArr';
import BottlingEquimentAndFacilities from './bottling-equipment-and-facilities';
import FoodEstablishment from './food-establishment';

const ProfessionalEstablishment = ({ title, onComplete }: any) => {
    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)

    const props = {
        category: title,
        onComplete: stepSubCategoriesCount
    }

    const renderObject: any = {
        'food establishments': <FoodEstablishment title={'food establishments'} {...props} />,
        'office and institution': <OfficesAndInstitutes {...props} title='office and institution' />,
        'bottling equipment and facilities': <BottlingEquimentAndFacilities  {...props} title='bottling equipment and facilities' />,
        'water systems, basins and storage': <WaterSystemBasinsAndStorage {...props} title='water systems, basins and storage' />,
        // 'HVAC, fogging and transportation': <HVACFoggingAndTransportation title={'HVAC, fogging and transportation'} {...props} />

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
        <div>{renderObject[mySubCategories[step - 1]]}</div>
    )
}

export default ProfessionalEstablishment