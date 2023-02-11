import { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';
import findSimilarInArr from '../components/functions/findSimilarInArr';
import RawProduceEggAndMeat from './raw-produce-egg-and-meat';
import FugimentAndInsecticide from './fugiment-and-insecticide';
import HoticultureAndAgriculture from './horticulture-and-agriculture-tools';
import GreenHouseAndGarden from './greenhouse-and-garden';
import PortableWaterForAnimals from './portable-water-for-animals';
import LivestocksSanitizerAnsDeodorizer from './livestocks-sanitizer-and-deodorizer';
const FarmAndRanch = ({ title, onComplete }: any) => {
    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)
    const props = {
        category: title,
        onComplete: stepSubCategoriesCount
    }

    const renderObject: any = {
        'raw produce, egg and meat': <RawProduceEggAndMeat title={'raw produce, egg and meat'} {...props} />,
        'horticulture and agriculture tools': <HoticultureAndAgriculture title={'horticulture and agriculture tools'} {...props} />,
        'fugiment and insecticide': <FugimentAndInsecticide title="fugiment and insecticide" {...props} />,
        'green house and garden': <GreenHouseAndGarden title="green house and garden" {...props} />,
        'portable water for animals'
            : <PortableWaterForAnimals title="portable water for animals" {...props} />,
        'livestock sanitizer and deodorizer': <LivestocksSanitizerAnsDeodorizer title="livestock sanitizer and deodorizer" {...props} />
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

export default FarmAndRanch