import { useState } from 'react'
import { useRecoilValue } from 'recoil';
import SkinInfaction from './skin-infactions'
import HandDisInfactant from './hand-disinfactant';
import DeodrantRepellent from './deodrant-repellent';
import DentalOralHygeine from './dental-oral-hygeine';
import LaundryDisinfection from './laundry-disinfection';
import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';
import findSimilarInArr from '../components/functions/findSimilarInArr';
import HairAndFurSanitizerForHuman from './hair-and-fur-sanitizer-humans';
import HairAndFurSanitizerForAnimals from './hair-and-for-sanitizer-animals';
const SkinContact = ({ title, onComplete }: any) => {
    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)
    const props = {
        category: title,
        onComplete: stepSubCategoriesCount
    }
    const renderObject: any = {
        'skin infections': <SkinInfaction title={'skin infections'} {...props} />,
        'hand disinfactant': <HandDisInfactant title={'hand disinfactant'} {...props} />,
        'deodrant & repellent': <DeodrantRepellent title={'deodrant & repellent'} {...props} />,
        'dental & oral hygiene': <DentalOralHygeine title={'dental & oral hygiene'} {...props} />,
        'laundry disinfection': <LaundryDisinfection title={'laundry disinfection'} {...props} />,
        'hair & fur sanitizer for humans': <HairAndFurSanitizerForHuman title='hair & fur sanitizer for humans' {...props} />,
        'hair & fur sanitizer for animals': <HairAndFurSanitizerForAnimals title='hair & fur sanitizer for animals' {...props} />
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