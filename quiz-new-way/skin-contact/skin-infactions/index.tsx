
import meta from '../../meta';
import { useState } from 'react'
import { ChangeEvent } from 'react';
import Select from '../../components/select';

import categoryState from '../../state';
import { useRecoilState } from 'recoil';

const SkinInfactions = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)

    const [state, setState] = useState<any>({})


    function resetStep() {
        setStep(1)
    }

    function calculate() {
        return (((state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] * state?.freq :
            (state?.duration.match(/(\d+)/)[0] * 12) * state?.freq) * 30) * 10
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            updateData({ ...data, [title]: calculate() })
            onComplete()
        }
    }

    function numberInputOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setState((prev: any) => { return { ...prev, [name]: parseInt(value) } })
    }

    function selectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const { id, innerHTML } = event.target
        setState((prev: any) => { return { ...prev, [id]: innerHTML } })
    }




    return (
        <div>

            <div>
                <h1 className='bg-gray-300'>{title}</h1>
                <p>{meta[category][title].discription}</p>

                <pre>{JSON.stringify(state)}</pre>
            </div>

            <div>


                {step == 1 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How many times a month do you spray or soak fungi, yeast, or bacteria that can cause contamination or infectious diseases on skin?</h1>
                        <input name="freq" onChange={numberInputOnChangeHandler} type="number" />
                    </div>
                )}

                {step == 2 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How long would you like to have a disinfection supply?</h1>
                        <Select
                            options={['1 month', '2 month', '3 month', '6 month', '1 year']}
                            selectedOption={state?.duration}
                            onClick={selectInputOnChangeHandler}
                            id="duration"
                        />
                    </div>
                )}



                <button onClick={stepUp} className=" m-2 btn-outline btn">Next step</button>

                <button onClick={resetStep} className=" m-2 btn-outline btn">reset state</button>

            </div>



        </div>
    )
}

export default SkinInfactions