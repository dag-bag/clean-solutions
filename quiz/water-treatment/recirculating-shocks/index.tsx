const stenghtObject: any = {
    'Pools, Hot tubs, and Spas': {
        light: 0.50,
        moderate: 1,
        heavy: 3,
        shock: 50
    },
    'Canning Retort, Pasteurizer, Hydrocoolers Autoclaves': {
        continous: 5,
        shock: 50

    },
    'Cooling Towers': {
        light: 0.1,
        moderate: 1,
        heavy: 5,
    },
    'Tanks, Transfer Lines & Recirculating Water Systems': {
        light: 5,
        moderate: 15,
        heavy: 20,
        shock: 50
    },

}

import Vector, { createBranch, type vectorPayload, componentStateAtom } from '../../components/Vector';

const vector: vectorPayload = {
    'Pools, Hot tubs, and Spas': [
        createBranch('How many gallons are in Pools, Hot tubs, and Spas?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Pools, Hot tubs, and Spas?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Pools, Hot tubs, and Spas?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],
    'Cooling Towers': [
        createBranch('How many gallons are in each Cooling Towers?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Cooling Towers?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Electronic Cooling Towers?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy',]),
    ],
    'Canning Retort, Pasteurizer, Hydrocoolers Autoclaves': [
        createBranch('How many gallons are in each Canning Retort, Pasteurizer, Hydrocoolers Autoclaves?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Canning Retort, Pasteurizer, Hydrocoolers Autoclaves?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Canning Retort, Pasteurizer, Hydrocoolers Autoclaves', 'strenght', 'select', 'placeholder', undefined, undefined, ['continous', 'shock']),
    ],
    'Tanks, Transfer Lines & Recirculating Water Systems': [
        createBranch('How many gallons are in each Tanks, Transfer Lines & Recirculating Water Systems?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Tanks, Transfer Lines & Recirculating Water Systems?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply inTanks, Transfer Lines & Recirculating Water Systems?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import calculateSanitizerConcentration from '../../components/functions/calculateSanitizerConcentration';

const RecirculatingShocks = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({}) // input data stored for calculation
    const vectorValues = useRecoilValue(componentStateAtom)
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);

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
                <Vector data={vector} question={'Choose your water retention or storage containment devices'} next={stepUp} />
            )}

            {step == 2 && (
                <Question name='How long would you like a recirculating water system disinfectant  supply?'>
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

export default RecirculatingShocks