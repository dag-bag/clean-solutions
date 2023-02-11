
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import NumberInput from '../../components/NumberInput';
import MultipleSelect from '../../components/multiple-select';
import converters from '../../components/functions/convertors';

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
        const strenghtObj: any = {
            'Combs and Brushes': 100,
            'Nail Tech Tools': 500,
            'Respirators and CPAP Parts': 5,
            ' Pacifiers and Bottles': 25,
            'Baby and Child Toys ': 100,
            'Toothbrushes': 100,
            ' Retainers and Dentures': 1000,
            'Other Dental Instruments': 1000,
            'Mouth Rinse or Gargle': 4
        }
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const quantity = converters.quartsToPpm(state.multiselect.length)
            const strenght = state.multiselect.map((key: string) => strenghtObj[key]).reduce((t: number, k: number) => t + k)
            const frequency = state.freq * 4.4
            return quantity * frequency * strenght * months
        } catch (err) {
            console.error('Question Skipped : cause --skipped flag in result/calculation')
        }
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            const calculation = calculate()
            updateData({ ...data, [title]: calculation ? calculation : '--skipped' })
            onComplete()
        }
    }

    function stepDown() {
        if (step > 1) {
            setStep(prev => prev - 1)
        }
    }

    function readMoreClickHandler() {
        setReadMore(p => !p)
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
            stepDown,
            category,
            discription,
            isReadMoreToggled,
            readMoreClickHandler,
        }}>

            {step == 1 && (
                <Question name="Choose all that apply" >
                    <MultipleSelect
                        id="multiselect"
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        options={['Combs and Brushes', 'Nail Tech Tools', 'Respirators and CPAP Parts', ' Pacifiers and Bottles', 'Baby and Child Toys ', 'Toothbrushes', ' Retainers and Dentures', 'Other Dental Instruments', 'Mouth Rinse or Gargle']}
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How frequently do you sanitize hygienic utensils or perform an oral routine on weekly basis?">
                    <NumberInput min={1} max={30} name='freq' state={state} setState={setState} placeholder='1-30' />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like to have a sanitizer for dental & oral care?'>
                    <Select
                        id="duration"
                        selectedOption={state?.duration}
                        onClick={selectInputOnChangeHandler}
                        options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '5 year']} />
                </Question>
            )}

        </Layout>
    )
}

export default DentalOralHygeine