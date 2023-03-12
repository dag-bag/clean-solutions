const stenghtObject: any = {
    'Residential': {
        'light': 5,
        'moderate': 50,
        heavy: 500
    },
    'Commercial': {
        'light': 5,
        'moderate': 50,
        heavy: 500
    },
    'RV Tanks': {
        'light': 5,
        'moderate': 50,
        heavy: 500
    },
}

import Vector, { createBranch, componentStateAtom, vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Residential': [
        createBranch("How much gallons water Residential wastewater system hold?", 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times per month do you sanitize Commercial water systems?", 'frequency', 'number', 'placeholder', 1, 30),
        createBranch('Select which strengths you will need to apply in Residential water system?', 'strenght', 'select', "placeholder", undefined, undefined, ['light', 'moderate'])
    ],
    "Commercial": [
        createBranch("How much gallons water Commercial wastewater system hold?", 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times per month do you sanitize Commercial water systems?", 'frequency', 'number', 'placeholder', 1, 30),
        createBranch('Select which strengths you will need to apply in Commercial water sytems?', 'strenght', 'select', "placeholder", undefined, undefined, ['light', 'moderate'])
    ],
    "RV Tanks": [
        createBranch("How much gallons water Rv Tanks wastewater system hold?", 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times per month do you sanitize RV Tanks water systems?", 'frequency', 'number', 'placeholder', 1, 30),
        createBranch('Select which strengths you will need to apply in RV Tanks water sytems?', 'strenght', 'select', "placeholder", undefined, undefined, ['light', 'moderate'])
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


const WasteWaterTreatment = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
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
            console.log(err)
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
                <Vector data={vector} question="Choose Water System" next={stepUp} />
            )}

            {step == 2 && (
                <Question name='How long would you like a wastewater disinfectant supply to last?'>
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

export default WasteWaterTreatment