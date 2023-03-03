const stenghtObject: any = {
    'Spray': {
        'moderate': 100,
        heavy: 200
    },
    'Mop': {
        'moderate': 100,
        heavy: 200
    },
    'Soak': {
        'moderate': 100,
        heavy: 200
    },
    'Pools, Hot tubs, and Spas': {
        'light': 0.25,
        'moderate': 1,
        heavy: 3
    }, 'Athletic Synthetic Turf.': {
        default: 200
    },
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
    'Spray': [
        createBranch('What are the SQFT of your home for spray disinfection and deodorinzing?', 'quantity', 'number', 'placeholder', 1),
        createBranch('On an average week, how much water do you require to for spray disinfection and deodorinzing?', 'additional', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in  spray disinfection and deodorinzing?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])

    ], 'Mop': [
        createBranch('What are the SQFT of your home for Mop disinfection and deodorinzing?', 'quantity', 'number', 'placeholder', 1),
        createBranch('On an average week, how much water do you require to for Mop disinfection and deodorinzing?', 'additional', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in  Mop disinfection and deodorinzing?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ], 'Soak': [
        createBranch('What are the SQFT of your home for Soak disinfection and deodorinzing?', 'quantity', 'number', 'placeholder', 1),
        createBranch('On an average week, how much water do you require to for Soak disinfection and deodorinzing?', 'additional', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in  Soak disinfection and deodorinzing?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ], 'Pools, Hot tubs, and Spas': [
        createBranch('What are the SQFT of your home for Pools, Hot tubs, and Spas disinfection and deodorinzing?', 'quantity', 'number', 'placeholder', 1),
        createBranch('On an average week, how much water do you require to for Pools, Hot tubs, and Spas disinfection and deodorinzing?', 'additional', 'number', 'placeholder', 1),
        createBranch('Select which strengths you will need to apply in  Pools, Hot tubs, and Spas disinfection and deodorinzing?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ], 'Athletic Synthetic Turf.': [
        createBranch('What are the SQFT of your home for Pools, Hot tubs, and Spas disinfection and deodorinzing?', 'quantity', 'number', 'placeholder', 1),
        createBranch('On an average week, how much water do you require to for Pools, Hot tubs, and Spas disinfection and deodorinzing?', 'additional', 'number', 'placeholder', 1),
    ]
}


const GymSpasClubsAndLockerRooms = ({ title, category, onComplete }: any) => {
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

        const Calcus: any = {
            'Spray': 3.78541,
            'Mop': 3.78541,
            'Soak': 3785.41,
            'Pools, Hot tubs, and Spas': 3785.41,
            'Athletic Synthetic Turf.': 3.78541
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)
            const sum = state.quantity.selected.map((key: string) => {
                const quantity = converters.mlToPpm(Calcus[key] * state.quantity[key])
                const frequncy = state.frequency[key]
                const strenght = defaultStrenght == 0
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
                return quantity * frequncy * strenght
            }).reduce((t: number, v: number) => t + v)

            return sum * months
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
                <Vector data={vector} question={'select disinfection and deodorinzing'} next={stepUp} />
            )}

            {step == 2 && (
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

export default GymSpasClubsAndLockerRooms