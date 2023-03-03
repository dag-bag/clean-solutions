const stenghtObject: any = {
    'Pools, Hot tubs and Spas': {
        Light: 0.50,
        Moderate: 1,
        Heavy: 3
    },
    'Recirculating and Cooling Towers': {
        Light: 0.1,
        Moderate: 1,
        Heavy: 5
    },
    'Non - Potable Transfer Lines and Tanks': {
        Light: 20,
        Shock: 50,
    },
    'Ponds, Reservoirs, and Retention Basins': {
        Light: 0.02,
        Moderate: 0.25,
        Heavy: 0.5
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

import Vector, { createBranch, type vectorPayload, componentStateAtom } from '../../components/Vector';

const vector: vectorPayload = {
    'Pools, Hot tubs, and Spas': [
        createBranch('How many gallons are in Pools, Hot tubs, and Spas?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Pools, Hot tubs, and Spas?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Pools, Hot tubs, and Spas?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],
    'Recirculating and Cooling Towers': [
        createBranch('How many gallons are in each Recirculating and Cooling Towers?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Recirculating and Cooling Towers?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Recirculating and Cooling Towers?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy',]),
    ],
    'Non - Potable Transfer Lines and Tanks': [
        createBranch('How many gallons are in each  Non - Potable Transfer Lines and Tanks?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize ?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Non - Potable Transfer Lines and Tanks?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],
    'Ponds, Reservoirs, and Retention Basins': [
        createBranch('How many gallons are in each Ponds, Reservoirs, and Retention Basins?', 'quantity', 'number', 'placeholder', 1),
        createBranch('How many times per month do you sanitize Ponds, Reservoirs, and Retention Basins?', 'frequency', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in Non - Potable Transfer Lines and Tanks?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy', 'shock']),
    ],

}

const WaterSystemBasinsAndStorage = ({ title, category, onComplete }: any) => {
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
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);


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
                <Question name='How long would you like a recirculating water system disinfectant supply?'>
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

export default WaterSystemBasinsAndStorage
