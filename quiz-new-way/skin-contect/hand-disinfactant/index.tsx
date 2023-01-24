// important :  please don't include special characters in options and optionObject of multiple select otherwise we need to 'convertHTMLEntities'
import Select from '../../components/select'
import { ChangeEvent, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import Question from '../../components/question-wrapper'
import MultipleSelect from '../../components/multiple-select'
import DurationBasedSelect from '../../components/duration-based-select'
import MultipleNestedSelect from '../../components/multiple-select-nested-input'

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



const HandDisinfactant = () => {
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

            {step}


            {step == 0 && (
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












            {step == 2 && (
                <Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='DEODORANT & REPELLENT'
                    value={parseInt(activeInputValue) * 4.4}
                    question="How many times per week do you apply deodorant?">
                    <input onChange={numberInputOnChangeHandler} type="number" />
                </Question>
            )
            }

            {
                step == 3 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='DEODORANT & REPELLENT'
                    value={activeInputValue}
                    question="How long would you like a body deodorant to last?">
                    <DurationBasedSelect onChange={(event: any) => {
                        setActiveInputValue(event.target.value)
                    }} />
                </Question>
                )
            }




            {
                step == 4 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAIR & FUR SANITIZER'
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



            {step == 5 && (
                <Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='DEODORANT & REPELLENT'
                    value={parseInt(activeInputValue) * 4.4}
                    question="How many times a week would you sanitize your hair?">
                    <input onChange={numberInputOnChangeHandler} type="number" />
                </Question>
            )
            }


            {
                step == 6 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAIR & FUR SANITIZER'
                    value={activeInputValueSpecialMultiSelectNestedInputs}
                    question="How many times a month would you sanitize animal hair?">

                    <>
                        <MultipleNestedSelect
                            onChangeNestedInputs={multiSelectNestedOnChnageHandler}
                            options={['cat', 'dog', 'other']}
                            selectedOptions={activeInputValueSpecialMultiSelect}
                            onClick={multipleSelectInputOnChangeHandler}
                            placeholder="How many times"
                            min={0}
                            max={30}
                        />

                    </>

                </Question>
                )
            }

            {
                step == 7 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='DEODORANT & REPELLENT'
                    value={activeInputValue}
                    question="How long would you like a hair sanitizing supply?">
                    <DurationBasedSelect onChange={(event: any) => {
                        setActiveInputValue(event.target.value)
                    }} />
                </Question>
                )
            }

            {
                step == 8 && (<Question
                    category='skin-content'
                    onNext={updateQuizDataFast}
                    subCategory='HAND DISINFECTANT'
                    value={activeInputValueSpecialMultiSelectNestedInputs}
                    question=" How many animals do you have?">

                    <>
                        <MultipleNestedSelect
                            placeholder='Quantity in Gallons'
                            onChangeNestedInputs={multiSelectNestedOnChnageHandler}
                            options={['Cats', 'Dogs', 'Other pets with dander, hair or fur']}
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
export default HandDisinfactant

