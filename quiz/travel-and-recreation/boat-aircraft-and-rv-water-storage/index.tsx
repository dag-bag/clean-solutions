const stenghtObject: any = {
    'Portable Water': {
        default: 0.8
    }, 'Waste Water': {
        'Light': 5,
        'Moderate': 50,
        'Heavy': 100
    }, 'Non-Potable Tanks and Lines': {
        'Light': 50,
        'Moderate': 100,
    }
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import Vector, { componentStateAtom, createBranch, type vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Portable Water': [
        createBranch('How many gallons are within the Portable Water storage system', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you want to sanitize Portable Water?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Portable Water?"', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ],
    'Waste Water': [
        createBranch('How many gallons are within the Waste Water storage system', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you want to sanitize Waste Water?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Waste Water?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ],
    'Non-Potable Tanks and Lines': [
        createBranch('How many gallons are within the Non-Potable Tanks and Lines storage system', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you want to sanitize Non-Potable Tanks and Lines?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Non-Potable Tanks and Lines?"', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ]

}

const BoatAircraftAndRVWaterStorage = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
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
    const resetVectorAtom = useResetRecoilState(componentStateAtom);
    const [data, updateData] = useRecoilState(categoryState)



    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const quantity = converters.gallonsToPpm(state.quantity[key])
                const frequncy = state.frequency[key]
                const strenght = defaultStrenght == 0
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
                return quantity * frequncy * strenght
            }).reduce((t: number, v: number) => t + v)
            return converters.gallonsToPpm(sum) * months
        }
        catch (err) {
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
                <Vector data={vector} question={'select water systems'} next={stepUp} />
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

export default BoatAircraftAndRVWaterStorage