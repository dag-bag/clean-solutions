const stenghtObject: any = {
    'Spray': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }, 'Mop': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }, 'Soak': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import Strenght from '../../components/strenght';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const HoticultureAndAgriculture = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [defaultStrenght, setDefaultStrenght] = useState(0)
    const [state, setState] = useState<any>({
        quantity: {
            selected: []
        },
        frequency: {
            selected: []
        },
        strenght: {
            selected: []
        }
    })

    const [data, updateData] = useRecoilState(categoryState)

    function calculate() {

        const calcus: any = {
            'Spray': 3.78541, 'Mop': 3.78541, 'Soak': 3785.41
        }

        try {
            const months = (state?.duration?.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const quantity = converters.mlToPpm(calcus[key] * state.quantity[key])
                const frequncy = state.frequency[key]
                const strenght = defaultStrenght == 0
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
                return quantity * frequncy * strenght
            }).reduce((t: number, v: number) => t + v)
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
                <Question name="Pick methods for preferred disinfection and deodorizing.">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={['Spray', 'Mop', 'Soak']}
                        placeholder="Square Feet "
                        questions={['What is the SQ FT of home?', 'How many SQ FT in the home are hard-floors?', 'How many gallons do you typically use in a week for disinfecting hard, non-food contact surfaces?',]}
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per month do you sanitize hard surfaces?">
                    <AdvancedMultipleNested
                        state={state}
                        name="frequency"
                        setState={setState}
                        options={['Spray', 'Mop', 'Soak']}
                        placeholder="times "
                    />
                </Question>
            )}

            {step == 3 && (

                <Question name="Select which strengths you will need to apply?" >
                    <Strenght
                        state={state}
                        stepUp={stepUp}
                        name="strenght"
                        setState={setState}
                        options={stenghtObject}
                        filteredOption={state.quantity.selected}
                        setDefaultStrenght={() => { setDefaultStrenght(50) }}
                    />
                </Question>

            )}

            {step == 4 && (
                <Question name='How long would you like a hard surface sanitizer supply?'>
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

export default HoticultureAndAgriculture