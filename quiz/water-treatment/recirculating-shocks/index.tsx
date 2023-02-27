const stenghtObject: any = {
    'Pools, Hot tubs, and Spas': {
        Light: 0.25,
        Moderate: 5,
        Heavy: 3,
        Shock: 50
    },
    'Canning Retort and Pasteurizer Cooling Water': {
        default: 5
    },
    'Electronic Cooling Towers': {
        Light: 0.1,
        Moderate: 1,
        Heavy: 5,
    },
    'Stainless Steel Transfer Lines, and Hydrocoolers': {
        'Food Handling': 20,
        Shock: 50
    },
    'Other Recirculating Water Systems': {
        Light: 5,
        Moderate: 15,
        Heavy: 20,
        Shock: 50
    }
}

import Vector, { createBranch, type vectorPayload, componentStateAtom } from '../../components/Vector';

const vector: vectorPayload = {
    'Pools, Hot tubs, and Spas': [
        createBranch('How many gallons are in Pools, Hot tubs, and Spas?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Pools, Hot tubs, and Spas?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Pools, Hot tubs, and Spas?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],
    'Electronic Cooling Towers': [
        createBranch('How many gallons are in each Electronic Cooling Towers?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Electronic Cooling Towers?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Electronic Cooling Towers?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy',]),
    ],
    'Other Recirculating Water Systems': [
        createBranch('How many gallons are in each Other Recirculating Water Systems?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Other Recirculating Water Systems?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Other Recirculating Water Systems?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],
    'Canning Retort and Pasteurizer Cooling Water': [
        createBranch('How many gallons are in each Canning Retort and Pasteurizer Cooling Water?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Canning Retort and Pasteurizer Cooling Water?', 'frequency', 'number', 'placeholder', 1),
    ],
    'Stainless Steel Transfer Lines, and Hydrocoolers': [
        createBranch('How many gallons are in each Stainless Steel Transfer Lines, and Hydrocoolers?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Stainless Steel Transfer Lines, and Hydrocoolers?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Stainless Steel Transfer Lines, and Hydrocoolers?', 'strenght', 'select', 'placeholder', undefined, undefined, ['food handling', 'shock']),
    ],
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import { useRecoilState, useResetRecoilState } from 'recoil';
import converters from '../../components/functions/convertors';

const RecirculatingShocks = ({ title, category, onComplete }: any) => {
    const Max = 2
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


    }) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);

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