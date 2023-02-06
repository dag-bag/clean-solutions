const stenghtObject: any = {
    'Spray': {
        'light': 20,
        'moderate': 100,
        'heavy': 200,
        'insecticide': 725
    },
    'Mop': {
        'light': 20,
        'moderate': 100,
        'heavy': 200,
        'insecticide': 725
    },
    'Soak': {
        'light': 20,
        'moderate': 100,
        'heavy': 200,
        'insecticide': 725
    },
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Strenght from '../../components/strenght';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const HardSurfaceAppliances = ({ title, category, onComplete }: any) => {
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
    }) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const quantity = converters.gallonsToPpm(state.quantity[key] * 3.78541)
                const frequncy = state.frequency[key] * 4.4
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

    function readMoreClickHandler() {
        setReadMore(p => !p)
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
            discription,
            isReadMoreToggled,
            readMoreClickHandler,
        }}>

            {step == 1 && (
                <Question name="Which methods are preferred for disinfection and deodorizing at home?">
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
                <Question name="How many times per week do you sanitize hard surfaces?">
                    <AdvancedMultipleNested
                        state={state}
                        name="frequency"
                        setState={setState}
                        options={state.quantity.selected}
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
                        options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '3 year']}
                        selectedOption={state?.duration}
                        onClick={selectInputOnChangeHandler}
                        id="duration"
                    />
                </Question>
            )}
        </Layout>
    )
}

export default HardSurfaceAppliances