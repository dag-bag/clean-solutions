
import meta from '../../meta';
import { useState } from 'react'
import { ChangeEvent } from 'react';
import Select from '../../components/select';

import categoryState from '../../state';
import { useRecoilState } from 'recoil';

const DeodrantRepellent = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)

    const [state, setState] = useState<any>({})

    console.log(data)



    function resetStep() {
        setStep(1)
    }

    function calculate() {
        return (((state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] * state?.freq :
            (state?.duration.match(/(\d+)/)[0] * 12) * state?.freq) * 4.4) * 50
    }

    function stepUp() {
        setStep(prev => prev + 1)
        console.log(title)
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
                <h1 ><b className='font-heading'>subCategory</b> : {title}</h1>
                <p className='py-2'>  <b className='font-heading'>discription</b> : {meta[category][title].discription}</p>

                <pre>{JSON.stringify(state)}</pre>
            </div>

            <div>

                {step}

                {step == 1 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How many times per week do you apply deodorant?</h1>
                        <input name="freq" onChange={numberInputOnChangeHandler} type="number" />
                    </div>
                )}

                {step == 2 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How long would you like a body deodorant to last?</h1>
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

export default DeodrantRepellent