import { useState } from 'react'
import { useRecoilValue } from 'recoil';
import SkinInfaction from './skin-infactions'
import HandDisInfactant from './hand-disinfactant';
import DeodrantRepellent from './deodrant-repellent';
import DentalOralHygeine from './dental-oral-hygeine';
import LaundryDisinfection from './laundry-disinfection';
import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';

const SkinContact = ({ title, onComplete }: any) => {
    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)
    const Max = subCategories.length; // it represent total count of selected categories

    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
        if (Max == step) {
            onComplete()
        }
    }

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
    }

    return (
        <div>{renderObject[subCategories[step - 1]]}</div>
    )
}

export default SkinContact