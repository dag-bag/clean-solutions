import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState, useRecoilValue } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import calculateSanitizerConcentration from '../../components/functions/calculateSanitizerConcentration';

import Vector, { createBranch, componentStateAtom, vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Everyday, Bodily Fluids Sweat, and Urine': [
        createBranch('How much Everyday, Bodily Fluids Sweat, and Urine laundry do you wash on an averag monthe?', 'frequency', 'number', 'placeholder', 1),
    ],
    'Soiled, Heavy Bacteria, and Activewear': [
        createBranch('How much Soiled, Heavy Bacteria, and Activewear laundry do you wash on an average month?', 'frequency', 'number', 'placeholder', 1),
    ],
    'Fungi, Mold, and Mildew': [
        createBranch('How much Fungi, Mold, and Mildew laundry do you wash on an average month?', 'frequency', 'number', 'placeholder', 1),
    ],
    'Lice, Ticks, and Bedbugs': [
        createBranch('How much Lice, Ticks, and Bedbugs laundry do you wash on an average month?', 'frequency', 'number', 'placeholder', 1),
    ]

}


const LaundryDisinfection = ({ title, category, onComplete }: any) => {
    const Max = 3
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const [state, setState] = useState<any>({
        multiselect: []
    })
    const vectorValues = useRecoilValue(componentStateAtom)

    function calculate() {
        const laundryWeight: any = {
            'everyday': 100, 'moderate': 200, 'heavy': 500, "insecticide": 725
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = vectorValues.input.selected.map((key: string) => {
                const { frequency } = vectorValues.input[key]
                return (3785.41 * 20) * parseFloat(frequency)
            }).reduce((t, k) => t + k)

            console.log(sum)

            return calculateSanitizerConcentration(laundryWeight[state.freq], 1, sum * months)
        } catch (err) {
            console.error('Question Skipped : cause --skipped flag in result/calculation')
        }
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
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
                <Question name="Which strenght do you prefer?">
                    <Select
                        options={['everyday', 'moderate', 'heavy', 'insecticide']}
                        selectedOption={state?.freq}
                        onClick={selectInputOnChangeHandler}
                        id="freq"
                    />
                </Question>
            )}

            {step == 3 && (
                <Question name="How long do you want to use a laundry disinfectant and deodorizer?">
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

export default LaundryDisinfection