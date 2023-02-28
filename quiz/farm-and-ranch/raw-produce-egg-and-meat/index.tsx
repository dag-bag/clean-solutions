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
    'Produce, Fruits and Vegetable': [
        createBranch("Select foods preferred methods for produce, Fruits and Vegetable disinfection", "quantity", "select", "placeholder", undefined, undefined, ['Spray', 'Soak']),
        createBranch("How often is Produce, Fruits and Vegetable of food eaten in weeks?", "frequency", "number", "placeholder", 1)
    ],
    'Eggshells': [
        createBranch("Select foods preferred methods for Eggshells disinfection", "quantity", "select", "placeholder", undefined, undefined, ['Spray', 'Soak']),
        createBranch("How often is Eggshells of food eaten in weeks?", "frequency", "number", "placeholder", 1)
    ],
    'Raw Meat, Poultry and Seafood': [
        createBranch("Select foods preferred methods for Raw Meat, Poultry and Seafood disinfection", "quantity", "select", "placeholder", undefined, undefined, ['Spray', 'Soak']),
        createBranch("How often is Raw Meat, Poultry and Seafood of food eaten in weeks?", "frequency", "number", "placeholder", 1)
    ]
}


const RawProduceEggAndMeat = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        quantity: {
            selected: []
        },
        frequency: {
            selected: []
        }

    }) // input data stored for calculation
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);

    function calculate() {
        const ppmValueObject: any = {
            'Produce, Fruits, Vegetable': 5,
            'Eggshells': 5,
            'Raw Meat, Poultry, & Seafood': 70,
        }

        const valuesObject: any = {
            'Produce, Fruits, Vegetable': {
                'Spray': 945,
                'Soak': 3785
            },
            'Eggshells': {
                'Spray': 475,
                'Soak': 1892
            },
            'Raw Meat, Poultry, & Seafood': {
                'Spray': 945,
                'Soak': 3785
            },
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const q = converters.mlToPpm(valuesObject[key][state.quantity[key]])
                const f = state.frequency[key]
                const s = ppmValueObject[key]
                return q * f * s
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

            {step == 1 && (<Vector data={vector} question="Select Foods for Disinfectant" next={stepUp} />
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

export default RawProduceEggAndMeat