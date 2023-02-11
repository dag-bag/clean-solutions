import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import MultipleSelect from '../../components/multiple-select';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
import converters from '../../components/functions/convertors';

const BodySanitizerAndDeodrant = ({ title, category, onComplete }: any) => {
    const Max = 3 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        multiselect: [],
        frequncy: {
            selected: []
        }
    }) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {

        const valueObj: any = {
            'Skin Sanitizer': 2,
            'Body Deodorant': 5,
            'Insect Repellent': 10
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.multiselect.map((key: string) => {
                const q = converters.mlToPpm(valueObj[key])
                const f = state.frequncy[key]
                const s = 50
                return q * f * s
            }).reduce((t: number, k: number) => t + k)

            return sum * months
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
                <Question name="Select food-contact surfaces to sanitize">
                    <MultipleSelect
                        options={['Skin Sanitizer', 'Body Deodorant', 'Insect Repellent']}
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        id="multiselect"
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name=" While on the road how many times per day do you use skin sanitizer?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequncy"
                        options={state.multiselect}
                        questions={[
                            'How many times per month do you use insect repellent, or spray for bites?',
                            'While on the road how many times per day do you use skin sanitizer?',
                            'How many times per month do you apply deodorant?',
                        ]}
                        placeholder="Times in month"


                    />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like your hand sanitizer supply to last?'>
                    <Select
                        options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '5 year']}
                        selectedOption={state?.duration}
                        onClick={selectInputOnChangeHandler}
                        id="duration"
                    />
                </Question>
            )}

        </Layout>
    )
}

export default BodySanitizerAndDeodrant