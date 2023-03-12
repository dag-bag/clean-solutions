import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import NumberInput from '../../components/NumberInput';
import calculateSanitizerConcentration from '../../components/functions/calculateSanitizerConcentration';

const DrinkingWater = ({ title, category, onComplete }: any) => {
    const Max = 3 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({}) // input data stored for calculation
    const [data, updateData] = useRecoilState(categoryState)

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const totalUsageInMl = months * (((state.quantity * 3785.41) * state.freq) * 30)
            return calculateSanitizerConcentration(0.8, 1, totalUsageInMl)

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

    function selectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const { id, innerHTML } = event.target
        setState((prev: any) => { return { ...prev, [id]: innerHTML } })
    }

    return (
        <Layout {...{
            title,
            stepUp,
            stepDown,
            category,

        }}>

            {step == 1 && (
                <Question name="How many gallons of drinking water do you want to have disinfected on an average day?">
                    <NumberInput min={1} name='quantity' state={state} setState={setState} placeholder='gallons usage per day' />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times a month do you want to be prepared with safe drinking water?">
                    <NumberInput min={1} max={30} name='freq' state={state} setState={setState} placeholder='1-30' />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like to have a drinking water supply?'>
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

export default DrinkingWater