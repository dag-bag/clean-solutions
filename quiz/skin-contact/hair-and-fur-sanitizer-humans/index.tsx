import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import NumberInput from '../../components/NumberInput';
import calculateSanitizerConcentration from '../../components/functions/calculateSanitizerConcentration';

const HairAndFurSanitizerForHuman = ({ title, category, onComplete }: any) => {
    const Max = 3
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const [state, setState] = useState<any>({})

    function calculate() {
        const selectValues: any = {
            'Short': 10,
            'Medium': 15,
            'Long': 20,
            'Extra long': 25
        }
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const totalUsageInMl = months * ((selectValues[state.quan] * state.freq) * 4.4)
            return calculateSanitizerConcentration(80, 1, totalUsageInMl)

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
                <Question name='What length is your hair?'>
                    <Select
                        options={['Short', 'Medium', 'Long', 'Extra long']}
                        selectedOption={state?.quan}
                        onClick={selectInputOnChangeHandler}
                        id="quan"
                    />

                </Question>
            )}

            {step == 2 && (
                <Question name="How many times a week would you sanitize your hair?">
                    <NumberInput min={1} name='freq' state={state} setState={setState} placeholder='usage per week' />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like a hair sanitizing ?'>
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

export default HairAndFurSanitizerForHuman