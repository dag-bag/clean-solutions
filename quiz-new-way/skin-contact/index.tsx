import { useState } from 'react'
import { useRecoilState } from 'recoil';
import d1 from '../state';

import HandDisInfactant from './hand-disinfactant';
import DeodrantRepellent from './deodrant-repellent';
import SkinInfaction from './skin-infactions'

import DentalOralHygeine from './dental-oral-hygeine';
import LaundryDisinfection from './laundry-disinfection';

const SkinContact = ({ title }: any) => {
    const [data, updateData] = useRecoilState(d1)
    const Max = 5;
    const [step, setStep] = useState(1)

    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
    }

    return (
        <div>


            <pre className='text-blue-300'>
                {JSON.stringify(data)}

            </pre>


            {step == 1 && (
                <HandDisInfactant title="hand-disinfactant"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}

            {step == 2 && (
                <DeodrantRepellent title="deodrant-repellent"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}
            {step == 3 && (
                <SkinInfaction title="skin-infactions"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}

            {step == 4 && (
                <DentalOralHygeine title="dental-oral-hygeine"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}


            {step == 5 && (
                <LaundryDisinfection title="laundry-disinfection"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}

        </div>
    )
}

export default SkinContact