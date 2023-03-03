const stenghtObject: any = {
    'Spray': {
        'light': 20,
        'moderate': 100,
        'heavy': 200,
        'insecticide': 725
    },
    'Mop': {
        'light': 20,
        'moderate': 100,
        'heavy': 200,
        'insecticide': 725
    },
    'Soak': {
        'light': 20,
        'moderate': 100,
        'heavy': 200,
        'insecticide': 725
    },
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Strenght from '../../components/strenght';
import Layout from '../../components/quiz-layout';
import { useRecoilState, useResetRecoilState } from 'recoil';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

import Vector, { createBranch, componentStateAtom, vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Spray': [
        createBranch("What is the SQFT of home for Spray disinfection", "quantity", "number", "placeholder", 1),
        createBranch("How many times would you sanitize hard surfaces with Spray?", "frequency", "number", "placeholder", 0),
        createBranch("select which strenght you will need to apply with Spray", "additional", "select", "placeholder", undefined, undefined, ["light", "moderate", "heavy"])
    ],
    'Mop': [
        createBranch("What is the SQFT of home for Mop disinfection", "quantity", "number", "placeholder", 1),
        createBranch("How many times would you sanitize hard surfaces with Mop?", "frequency", "number", "placeholder", 0),
        createBranch("select which strenght you will need to apply with Mop", "additional", "select", "placeholder", undefined, undefined, ["light", "moderate", "heavy"])
    ],
    'Soak': [
        createBranch("What is the SQFT of home for Soak disinfection", "quantity", "number", "placeholder", 1),
        createBranch("How many times would you sanitize hard surfaces with Soak?", "frequency", "number", "placeholder", 0),
        createBranch("select which strenght you will need to apply with Soak", "additional", "select", "placeholder", undefined, undefined, ["light", "moderate", "heavy"])
    ]
}


const HardSurfaceAppliances = ({ title, category, onComplete }: any) => {
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
                const quantity = converters.gallonsToPpm(state.quantity[key] * 3.78541)
                const frequncy = state.frequency[key] * 4.4
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

            {step == 1 && (<Vector data={vector} question="Pick methods for preferred disinfection and deodorizing" next={stepUp} />
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

export default HardSurfaceAppliances