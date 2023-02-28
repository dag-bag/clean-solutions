const stenghtObject: any = {
    'Seeds and Propagations Rooms': {
        default: 0.5
    }, 'Soil, Hydro and Aeroponic Grow Beds': {
        default: 0.25
    }, 'Plants and Perpetual Grow Rooms': {
        default: 1
    }, 'Trimming, Curing, Drying, Harvest Rooms, Tools, and Equipment': {
        'light': 20,
        'moderate': 50,
        heavy: 100
    },
    'Vase Water, Cuttings and Flowers': {
        'light': 0.5,
        'moderate': 2,
        heavy: 5
    },
}


import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import { useRecoilState, useResetRecoilState } from 'recoil';
import converters from '../../components/functions/convertors';
import Vector, { createBranch, componentStateAtom, vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Seeds and Propagations Rooms': [
        createBranch('What are you sanitizing and the maximum growing capacity of Seeds and Propagations Rooms?', 'quantity', 'number', 'palceholder', 1),
        createBranch('How many times would you sanitize Seeds and Propagations Rooms?', 'frequency', 'number', 'placeholder', 1)
    ],
    'Soil, Hydro and Aeroponic Grow Beds': [
        createBranch('What are you sanitizing and the maximum growing capacity of Soil, Hydro and Aeroponic Grow Beds?', 'quantity', 'number', 'palceholder', 1),
        createBranch('How many times would you sanitize Soil, Hydro and Aeroponic Grow Beds?', 'frequency', 'number', 'placeholder', 1)
    ],
    'Plants and Perpetual Grow Rooms': [
        createBranch('What are you sanitizing and the maximum growing capacity of Plants and Perpetual Grow Rooms?', 'quantity', 'number', 'palceholder', 1),
        createBranch('How many times would you sanitize Plants and Perpetual Grow Rooms?', 'frequency', 'number', 'placeholder', 1)
    ],
    'Trimming, Curing, Drying, Harvest Rooms, Tools, and Equipment': [
        createBranch('What are you sanitizing and the maximum growing capacity of Trimming, Curing, Drying, Harvest Rooms, Tools, and Equipment?', 'quantity', 'number', 'palceholder', 1),
        createBranch('How many times would you sanitize Trimming, Curing, Drying, Harvest Rooms, Tools, and Equipment?', 'frequency', 'number', 'placeholder', 1),
        createBranch('select which strenght you will need to apply in Trimming, Curing, Drying, Harvest Rooms, Tools, and Equipment?', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ],
    'Vase Water, Cuttings and Flowers': [
        createBranch('What are you sanitizing and the maximum growing capacity of Vase Water, Cuttings and Flowers ?', 'quantity', 'number', 'palceholder', 1),
        createBranch('How many times would you sanitize Vase Water, Cuttings and Flowers?', 'frequency', 'number', 'placeholder', 1),
        createBranch('select which strenght you will need to apply in Vase Water, Cuttings and Flowers', 'strenght', 'select', 'placeholder', undefined, undefined, ['light', 'moderate', 'heavy'])
    ]
}

const GreenHouseAndGarden = ({ title, category, onComplete }: any) => {
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
    })
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);


    function calculate() {

        const calcus: any = {
            'Seeds and Propagations Rooms': 3.78541,
            'Plants and Perpetual Grow Rooms': 1892.705,
            'Vase Water, Cuttings and Flowers': 37855.41,
            'Soil, Hydro and Aeroponic Grow Beds': 1892.705,
            'Trimming, Curing, Drying, Harvest Rooms, Tools, and Equipment': 3.78541,
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const quantity = converters.mlToPpm(state.quantity[key] * calcus[key])
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
            hideButton: step == 1,

        }}>

            {step == 1 && (<Vector data={vector} question="What are you sanitizing?" next={stepUp} />)}

            {
                step == 2 && (
                    <Question name='How long do you want a greenhouse sanitizer supply?'>
                        <Select
                            options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '5 year']}
                            selectedOption={state?.duration}
                            onClick={selectInputOnChangeHandler}
                            id="duration"
                        />
                    </Question>
                )
            }


        </Layout >
    )
}

export default GreenHouseAndGarden