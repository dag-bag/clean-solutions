
import meta from '../../meta';
import { useState } from 'react'
import { ChangeEvent } from 'react';
import Select from '../../components/select';

import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import MultipleSelect from '../../components/multiple-select';

const LaundryDisinfection = ({ title, category, onComplete }: any) => {

    const Max = 2
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)

    const [state, setState] = useState<any>({
        multiselect: []
    })


    function resetStep() {
        setStep(1)
    }

    function calculate() {
        return 0
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

    function multiSelectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const selectedOptionValue = event.target.innerHTML
        if (!state.multiselect.includes(selectedOptionValue)) {
            setState({ ...state, multiselect: [...state.multiselect, selectedOptionValue] })
        } else {
            const filterArrWithoutselectedOptionValue = state.multiselect.filter((value: any) => value !== selectedOptionValue)
            setState({ ...state, multiselect: filterArrWithoutselectedOptionValue })
        }
    }

    return (
        <div>

            <div>
                <h1 ><b className='font-heading'>subCategory</b> : {title}</h1>
                <p className='py-2'>  <b className='font-heading'>discription</b> : {meta[category][title].discription}</p>

                <pre>{JSON.stringify(state)}</pre>
            </div>

            <div>



                {step == 1 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>Choose all that apply</h1>
                        <MultipleSelect
                            options={['Everyday, Bodily Fluids Sweat, and Urine', 'Soiled, Heavy Bacteria, & Activewear', 'Fungi, Mold, and Mildew', 'Lice, Ticks, and Bedbugs']}
                            selectedOptions={state.multiselect}
                            onClick={multiSelectInputOnChangeHandler}
                            id="multiselect"
                        />
                    </div>
                )}



                {step == 2 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How long do you want to use a laundry disinfectant and deodorizer?</h1>
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

export default LaundryDisinfection