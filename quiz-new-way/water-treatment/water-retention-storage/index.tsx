const stenghtObject: any = {
    'Ponds, Reservoirs, and Retention Basins': {
        'light': 0.25,
        'moderate': 5,
    },
    'Once-through Water Cooling Systems': {
        'light': 0.25,
        'heavy': 2,
        'moderate': 1,
    },
    'Aircraft, RV, Boat Tanks and Lines': {
        'light': 5,
        'heavy': 25,
        'moderate': 15,
    },
    'Other Non-Potable Water Storage': {
        default: 4
    }
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

const WaterRetentionStorage = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [defaultStrenght, setDefaultStrenght] = useState(0)
    const [state, setState] = useState<any>({
        quantity: {
            selected: []
        },
        frequncy: {
            selected: []
        },
        strenght: {
            selected: []
        }
    })
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
                const q = converters.gallonsToPpm(state.quantity[key])
                const f = state.frequncy[key]
                const s = (defaultStrenght == 0)
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
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
                <Question name="How many gallons do each of your water retention or storage containment devices hold?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        placeholder="Quantity in numbers"
                        options={['Ponds, Reservoirs, and Retention Basins', 'Once-through Water Cooling Systems', 'Aircraft, RV, Boat Tanks and Lines', 'Other Non-Potable Water Storage']}
                    />
                </Question>

            )}

            {step == 2 && (

                <Question name="How many times per month do you want to sanitize water containment?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequncy"
                        placeholder="Quantity in numbers"
                        options={state.quantity.selected}
                    />
                </Question>

            )}

            {step == 3 && (

                <Question name="Select which strengths you will need to apply?" >
                    <>
                        <Strenght
                            state={state}
                            stepUp={stepUp}
                            name="strenght"
                            setState={setState}
                            options={stenghtObject}
                            filteredOption={state.quantity.selected}
                            setDefaultStrenght={() => { setDefaultStrenght(15) }}
                        />

                    </>
                </Question>

            )}


            {step == 4 && (
                <Question name='How long would you like a water storage sanitizer supply to last?'>
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

export default WaterRetentionStorage