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

import Vector, { createBranch, componentStateAtom, type vectorPayload } from '../../components/Vector';

const vector: vectorPayload = {
    'Ponds, Reservoirs, and Retention Basins': [
        createBranch('How many times per month do you want to sanitize Ponds, Reservoirs, and Retention Basins?', 'frequency', 'number', "placeholder", 1),
        createBranch('How many gallons Ponds, Reservoirs, and Retention Basins hold?', 'quantity', 'number', "placeholder", 1),
        createBranch('Select which strengths you will need to apply in Ponds, Reservoirs, and Retention Basins?', 'strenght', 'select', "placeholder", undefined, undefined, ['light', 'moderate'])
    ],
    'Once-through Water Cooling Systems': [
        createBranch('How many times per month do you want to sanitize Once-through Water Cooling Systems?', 'frequency', 'number', "placeholder", 1),
        createBranch('How many gallons Once-through Water Cooling Systems hold?', 'quantity', 'number', "placeholder", 1),
        createBranch('Select which strengths you will need to apply in Once-through Water Cooling Systems?', 'strenght', 'select', "placeholder", undefined, undefined, ['light', 'moderate', 'heavy'])
    ],
    'Aircraft, RV, Boat Tanks and Lines': [
        createBranch('How many times per month do you want to sanitize Aircraft, RV, Boat Tanks and Lines?', 'frequency', 'number', "placeholder", 1),
        createBranch('How many gallonsAircraft, RV, Boat Tanks and Lines hold?', 'quantity', 'number', "placeholder", 1),
        createBranch('Select which strengths you will need to apply in Once-through Water Cooling Systems?', 'strenght', 'select', "placeholder", undefined, undefined, ['light', 'moderate', 'heavy'])
    ],
    'Other Non-Potable Water Storage': [
        createBranch('How many times per month do you want to sanitize Other Non-Potable Water Storage?', 'frequency', 'number', "placeholder", 1),
        createBranch('How many gallons Other Non-Potable Water Storage hold?', 'quantity', 'number', "placeholder", 1)
    ]
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import calculateSanitizerConcentration from '../../components/functions/calculateSanitizerConcentration';

const WaterRetentionStorage = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({})
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);
    const vectorValues = useRecoilValue(componentStateAtom)

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = vectorValues.input.selected.map((key: string) => {
                const { frequency, quantity, strenght } = vectorValues.input[key]
                const strenghtNumberValue = stenghtObject[key][strenght] as any
                const preventDefaultValuesError = isNaN(strenghtNumberValue)
                    ? stenghtObject[key].default
                    : strenghtNumberValue
                return calculateSanitizerConcentration(preventDefaultValuesError, 1, parseFloat(frequency) * (parseFloat(quantity) * 3785.41))
            }).reduce((t, k) => t + k)

            return sum * months
        } catch (err) {
            console.error('Question Skipped : cause --skipped flag in result/calculation')
        }
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            resetVectorAtom()
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
            hideButton: step == 1
        }}>

            {step == 1 && (
                <Vector data={vector} question={'Choose your water retention or storage containment devices'} next={stepUp} />
            )}

            {step == 2 && (
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