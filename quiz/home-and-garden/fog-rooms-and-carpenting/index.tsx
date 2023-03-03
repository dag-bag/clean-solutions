const stenghtObject: any = {
    'Building': {
        Light: 50,
        Moderate: 100,
        Heavy: 300,
        HVAC: 500,
        Fugiment: 725
    }, 'Carpet': {
        Light: 50,
        Moderate: 100,
        Heavy: 300,
        HVAC: 500,
        Fugiment: 725
    }, 'Turf': {
        Light: 50,
        Moderate: 100,
        Heavy: 300,
        HVAC: 500,
        Fugiment: 725
    }
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Vector, { createBranch, componentStateAtom, vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Building': [
        createBranch('How many SQFT Building?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times would you sanitize Building?', 'frequency', 'number', 'placeholder', 1),
        createBranch('which strenght is you will need to apply in Building?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'HVAC', 'fugiment'])
    ],
    'Carpet': [
        createBranch('How many SQFT Carpet?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times would you sanitize Carpet?', 'frequency', 'number', 'placeholder', 1),
        createBranch('which strenght is you will need to apply in Carpet?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'HVAC', 'fugiment'])
    ],
    'Turf': [
        createBranch('How many SQFT Turf?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times would you sanitize Turf?', 'frequency', 'number', 'placeholder', 1),
        createBranch('which strenght is you will need to apply in Turf?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'HVAC', 'fugiment'])
    ]
}

const FogRoomsAndCarpenting = ({ title, category, onComplete }: any) => {
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
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const quantity = converters.gallonsToPpm(state.quantity[key] / 2)
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
                <Question name='How long would you like to keep this supply?'>
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

export default FogRoomsAndCarpenting 