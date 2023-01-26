
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import MultipleSelect from '../../components/multiple-select';

const DentalOralHygeine = ({ title, category, onComplete }: any) => {
    const Max = 3
    const [step, setStep] = useState(1)
    const componentMeta = quizdata[category].categories[title]
    const [isReadMoreToggled, setReadMore] = useState(true)
    const [data, updateData] = useRecoilState(categoryState)

    const [state, setState] = useState<any>({
        multiselect: []
    })

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)


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

    function readMoreClickHandler() {
        setReadMore(p => !p)
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
        <Layout {...{
            title,
            stepUp,
            category,
            discription,
            isReadMoreToggled,
            readMoreClickHandler,
        }}>

            {step == 1 && (
                <Question name="Choose all that apply" >
                    <h1 className='text-2xl py-2 font-semibold'>Choose all that apply</h1>
                    <MultipleSelect
                        options={['Combs and Brushes', 'Nail Tech Tools', 'Respirators and CPAP Parts', ' Pacifiers and Bottles', 'Baby and Child Toys ', 'Toothbrushes', ' Retainers and Dentures', 'Other Dental Instruments', 'Mouth Rinse or Gargle']}
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        id="multiselect"
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name='>How long would you like to have a sanitizer for dental & oral care?'>
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

                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like to have a sanitizer for dental & oral care?'>
                    <Select
                        options={['1 month', '2 month', '3 month', '6 month', '1 year']}
                        selectedOption={state?.duration}
                        onClick={selectInputOnChangeHandler}
                        id="duration"
                    />
                </Question>
            )}

        </Layout>
    )
}

export default DentalOralHygeine