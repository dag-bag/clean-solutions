const stenghtObject: any = {
    'Subfloors': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Rugs and Carpenting': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    ' Bed Sets (Blankets, Mattress, Pillows)': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Animal Bedding and Kennels': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Drapes and Curtains': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Upholstered Furniture': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Vehicle Upholstery': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Footwear': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Luggage and Bags': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Toys': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    },
    'Laundry': {
        'light': 20,
        'heavy': 200,
        'moderate': 100,
        'insecticide': 725
    }
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Strenght from '../../components/strenght';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
const SoftSurfaceAndLaundry = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
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

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {
        const multipleObj: any = {
            'Subfloors': 0.001,
            'Rugs and Carpenting': 0.001,
            ' Bed Sets (Blankets, Mattress, Pillows)': 0.035,
            'Animal Bedding and Kennels': 0.020,
            'Drapes and Curtains': 0.035,
            'Upholstered Furniture': 0.100,
            'Vehicle Upholstery': 0.100,
            'Footwear': 0.002,
            'Luggage and Bags': 0.004,
            'Toys': 0.002,
            'Laundry': 20
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const q = multipleObj[key] * converters.gallonsToPpm(state.quantity[key])
                const f = state.frequncy[key]
                const s = defaultStrenght == 0
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
                return q * f * s
            }).reduce((t: number, k: number) => t + k)
            return sum * months
        }
        catch (err) {
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
        }}>

            {step == 1 && (
                <Question name="How many gallons are in each water system?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={['Subfloors', 'Rugs and Carpenting', ' Bed Sets (Blankets, Mattress, Pillows)', 'Animal Bedding and Kennels', 'Drapes and Curtains', 'Upholstered Furniture', 'Vehicle Upholstery', 'Footwear', 'Luggage and Bags', 'Toys', 'Laundry']}
                        placeholders={['SQ FT', 'SQ FT', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'Quantity', 'SQ FT', 'Gallons']}
                    />
                </Question>
            )}

            {step == 2 && (

                <Question name="How frequently do you sanitize or wash each month?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequncy"
                        options={state.quantity.selected}
                        placeholder="Times Wash"
                    />
                </Question>

            )}

            {step == 3 && (

                <Question name="Select which strengths you will need to apply?" >
                    <Strenght
                        state={state}
                        stepUp={stepUp}
                        name="strenght"
                        setState={setState}
                        options={stenghtObject}
                        filteredOption={state.quantity.selected}
                        setDefaultStrenght={() => { setDefaultStrenght(50) }}
                    />
                </Question>

            )}

            {step == 4 && (
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

export default SoftSurfaceAndLaundry