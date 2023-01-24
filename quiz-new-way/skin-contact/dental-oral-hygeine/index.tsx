
import meta from '../../meta';
import { useState } from 'react'
import { ChangeEvent } from 'react';
import Select from '../../components/select';

import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import MultipleSelect from '../../components/multiple-select';

const DentalOralHygeine = ({ title, category, onComplete }: any) => {
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
                <h1 className='bg-gray-300'>{title}</h1>
                <p>{meta[category][title].discription}</p>

                <pre>{JSON.stringify(state)}</pre>
            </div>

            <div>



                {step == 1 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>Choose all that apply</h1>
                        <MultipleSelect
                            options={['Combs and Brushes', 'Nail Tech Tools', 'Respirators and CPAP Parts', ' Pacifiers and Bottles', 'Baby and Child Toys ', 'Toothbrushes', ' Retainers and Dentures', 'Other Dental Instruments', 'Mouth Rinse or Gargle']}
                            selectedOptions={state.multiselect}
                            onClick={multiSelectInputOnChangeHandler}
                            id="multiselect"
                        />
                    </div>
                )}


                {step == 2 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How long would you like to have a sanitizer for dental & oral care?</h1>
                        <Select
                            options={['Twice a day ', 'Daily ', 'Twice a week', 'Weekly ', 'Monthly']}
                            selectedOption={state?.duration}
                            onClick={selectInputOnChangeHandler}
                            id="duration"
                        />

                        <div style={state?.duration?.includes('Other') ? { color: 'red' } : undefined} className="p-2 border border-black" onClick={selectInputOnChangeHandler as any} id="duration"  >
                            Other
                        </div>

                        <div className='my-5'>
                            {state?.duration?.includes('Other') && <input name="freq" onChange={numberInputOnChangeHandler} placeholder=" 1 to 30 days " type="number" />}
                        </div>



                    </div>
                )}




                {step == 3 && (
                    <div>
                        <h1 className='text-2xl py-2 font-semibold'>How long would you like to have a sanitizer for dental & oral care?</h1>
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

export default DentalOralHygeine