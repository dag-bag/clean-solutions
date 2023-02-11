import { useState } from 'react'
import { useRecoilValue } from 'recoil';
import DrinkingWater from './drinking-water';
import DipEquipmentTools from './dip-equiment-tools';
import RecirculatingShocks from './recirculating-shocks';
import WasteWaterTreatment from './waste-water-treatment';
import LivestockPetsAnimals from './livestocks-pets-animals';
import WaterRetentionStorage from './water-retention-storage';
import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';
import findSimilarInArr from '../components/functions/findSimilarInArr';

const SkinContact = ({ title, onComplete }: any) => {
    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)

    const props = {
        category: title,
        onComplete: stepSubCategoriesCount
    }

    const renderObject: any = {
        'drinking water': <DrinkingWater title={"drinking water"} {...props} />,
        'livestocks, pets & animals': <LivestockPetsAnimals title={"livestocks, pets & animals"} {...props} />,
        'water retention & storage': <WaterRetentionStorage title={"water retention & storage"} {...props} />,
        'recirculating & shocks': <RecirculatingShocks title={"recirculating & shocks"} {...props} />,
        'wastewater treatment': <WasteWaterTreatment title={"wastewater treatment"} {...props} />,
        'dip tools and equipment': <DipEquipmentTools title={"dip tools and equipment"} {...props} />,
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

export default SkinContact