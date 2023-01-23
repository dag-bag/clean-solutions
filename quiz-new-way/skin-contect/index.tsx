// important :  please don't include special characters in options and optionObject of multiple select otherwise we need to 'convertHTMLEntities'

import { atom, useRecoilState } from 'recoil'
import { ChangeEvent, useState } from 'react'
import DurationBasedSelect from '../duration-based-select'
import Question from './question-wrapper'
import MultipleSelect from './multiple-select'
import MultipleNestedSelect from './multiple-select-nested-input'
import Select from './select'
const state = atom({
    key: 'anythingggg',
    default: 0
})

const initialValue: {
    'sub-category': string,
    question: string,
    value: any
    valueObject?: {} | undefined // this is only for select &  multiple select
}[] = []

const quizState = atom({
    key: 'quiz-state',
    default: initialValue
})




const SkinContact = () => {
    const [step, setStep] = useRecoilState(state)
    const [Quizdata, setQuizdata] = useRecoilState(quizState)
    const [activeInputValue, setActiveInputValue] = useState<string>('')
    const [activeInputValueSpecialMultiSelectNestedInputs, setActiveInputValueSpecialMultiSelectNestedInputs] = useState({})
    const [activeInputValueSpecialMultiSelect, setActiveInputValueSpecialMultiSelect] = useState<string[]>([])


    console.log(Quizdata)

    function resetState() {
        setStep(0)
    }

    function numberInputOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setActiveInputValue(event.target.value)
    }

    function multipleSelectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const selectedOptionValue = event.target.innerHTML
        if (!activeInputValueSpecialMultiSelect.includes(selectedOptionValue)) {
            setActiveInputValueSpecialMultiSelect(p => [...p, selectedOptionValue])
        } else {
            const filterArrWithoutselectedOptionValue = activeInputValueSpecialMultiSelect.filter((value) => value !== selectedOptionValue)
            setActiveInputValueSpecialMultiSelect(filterArrWithoutselectedOptionValue)
        }
    }

    function selectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const selectedOptionValue = event.target.innerHTML
        console.log(selectedOptionValue)
        setActiveInputValue(selectedOptionValue)
    }

    function multiSelectNestedOnChnageHandler(event: ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;
        setActiveInputValueSpecialMultiSelectNestedInputs(prev => {
            return { ...prev, [name]: value }
        })

    }

    function updateQuizDataFast(subCategory: string, question: string, value: any, valueObject?: object) {
        // step up to next question 
        setStep(p => p + 1)
        const payload = {
            'sub-category': subCategory,
            question,
            value,
            valueObject: valueObject ?? undefined
        }

        setQuizdata(prev => [...prev, payload])
        // clear activeInputValue (state)
        setActiveInputValue('')
    }

    return (
        <div>


            {step == 10 && (
                <Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={parseInt(activeInputValue) * 30}
                    question="How many times per day do you apply skin sanitizer?">
                    <input onChange={numberInputOnChangeHandler} type="number" />
                </Question>
            )
            }


            {
                step == 1 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValue}
                    question="How long would you like your hand sanitizer supply to last?">
                    <DurationBasedSelect onChange={(event: any) => {
                        setActiveInputValue(event.target.value)
                    }} />
                </Question>
                )
            }


            {
                step == 2 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValueSpecialMultiSelect}
                    valueObject={{
                        'Combs and Brushes': "100 ppm",
                        'Nail Tech Tools': "500 ppm",
                        'Respirators and CPAP Parts': "25 ppm,",
                        'Pacifiers and Bottles': "10 ppm"
                    }}
                    question="Choose all that apply">
                    <MultipleSelect
                        options={['Combs and Brushes', 'Nail Tech Tools', 'Respirators and CPAP Parts', 'Pacifiers and Bottles']}
                        selectedOptions={activeInputValueSpecialMultiSelect}
                        onClick={multipleSelectInputOnChangeHandler} />

                </Question>
                )
            }

            {
                step == 3 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValue}
                    valueObject={{
                        'short': "10 ml",
                        'medium': "10 ml",
                        'long': "10 ml",
                        'extra long': "10 ml"
                    }}
                    question="What length is your hair?">
                    <Select
                        options={['short', 'medium', 'long', 'extra long']}
                        selectedOption={activeInputValue}
                        onClick={selectInputOnChangeHandler} />

                </Question>
                )
            }

            {
                step == 0 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValueSpecialMultiSelectNestedInputs}
                    question="How many gallons do each of your water retention or storage containment devices hold? ?">

                    <>
                        <MultipleNestedSelect
                            onChangeNestedInputs={multiSelectNestedOnChnageHandler}
                            options={['Pools, Hot tubs and Spas ', 'Canning Retort and Pasteurizer Cooling Water', 'Electronic Cooling Towers ', 'Stainless Steel Transfer Lines and Hydrocoolers', 'Other Recirculating Water Systems ']}
                            selectedOptions={activeInputValueSpecialMultiSelect}
                            onClick={multipleSelectInputOnChangeHandler} />

                    </>

                </Question>
                )
            }

            <button onClick={resetState} className=" btn-outline btn">reset state</button>


        </div >
    )
}
export default SkinContact

