import { useState } from 'react'
import { useRecoilState } from 'recoil';
import d1 from '../state';

import DrinkingWater from './drinking-water';
import LivestockPetsAnimals from './livestocks-pets-animals';
import WaterRetentionStorage from './water-retention-storage';


const WaterTreatment = ({ title, onComplete }: any) => {
    const [data, updateData] = useRecoilState(d1)
    const Max = 3;
    const [step, setStep] = useState(1)

    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
        if (Max == step) {
            onComplete()
        }
    }

    return (
        <div>



            <pre className='text-blue-300'>
                {JSON.stringify(data)}
            </pre>

            <h1 className='text-xl font-heading py-2'>
                <b>category</b> :   {title}

            </h1>


            {step == 1 && (
                <DrinkingWater title="drinking-water"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}


            {step == 2 && (
                <LivestockPetsAnimals title="livestocks-pets-animals"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}

            {step == 3 && (
                <WaterRetentionStorage title="water-retention-storage"
                    category={title}
                    onComplete={stepSubCategoriesCount}
                />
            )}


        </div>
    )
}

export default WaterTreatment