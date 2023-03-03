
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
    'Counters': [createBranch('How many times per month do you sanitize food Counters?', 'frequency', 'number', 'placeholder', 1)],
    'Tables': [createBranch('How many times per month do you sanitize Tables?', 'frequency', 'number', 'placeholder', 1)],
    'Cabinets': [createBranch('How many times per month do you sanitize Cabinets?', 'frequency', 'number', 'placeholder', 1)],
    'Stoves': [createBranch('How many times per month do you sanitize Stoves?', 'frequency', 'number', 'placeholder', 1)],
    'Utensils': [createBranch('How many times per month do you sanitize Utensils?', 'frequency', 'number', 'placeholder', 1)],
    'Glassware': [createBranch('How many times per month do you sanitize Glassware?', 'frequency', 'number', 'placeholder', 1)],
    'Pots and Pans': [createBranch('How many times per month do you sanitize Pots and Pans?', 'frequency', 'number', 'placeholder', 1)],
    'Gloves and Hands': [createBranch('How many times per month do you sanitize Gloves and Hands?', 'frequency', 'number', 'placeholder', 1)],
    'Refrigerators': [createBranch('How many times per month do you sanitize Refrigerators?', 'frequency', 'number', 'placeholder', 1)],
    ' Other Appliances and Surfaces': [createBranch('How many times per month do you sanitize Other Appliances and Surfaces? ', 'frequency', 'number', 'placeholder', 1)]
}

const FoodSurfacesAndPackages = ({ title, category, onComplete }: any) => {
    const Max = 3
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);
    const [state, setState] = useState<any>({
        food_surfaces: [],
        sanitize: {
            selected: []
        }
    })

    function calculate() {

        const buyObject: any = {
            'small': 100, 'medium': 300, 'large': 500
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.food_surfaces.map((key: string) => {
                const q = converters.mlToPpm(state.food_surfaces.length * 1000)
                const f = state.sanitize[key]
                return q * f
            }).reduce((t: number, v: number) => t + v)
            const q2 = buyObject[state.shopping_trip]
            const s = 20
            return (sum * s) * q2 * months
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
                <Question name="When it comes to an average shopping trip, how much do you buy?">
                    <Select
                        options={['small', 'medium', 'large']}
                        selectedOption={state?.shopping_trip}
                        onClick={selectInputOnChangeHandler}
                        id="shopping_trip"
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

export default FoodSurfacesAndPackages