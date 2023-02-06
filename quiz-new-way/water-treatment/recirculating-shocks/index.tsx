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

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import Strenght from '../../components/strenght';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const RecirculatingShocks = ({ title, category, onComplete }: any) => {
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

            {JSON.stringify(state)}

            {step == 1 && (

                <Question name="How many gallons are in each water system?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        placeholder="Quantity in numbers"
                        options={['Pools, Hot tubs, and Spas', 'Canning Retort and Pasteurizer Cooling Water', 'Electronic Cooling Towers', 'Stainless Steel Transfer Lines, and Hydrocoolers', 'Other Recirculating Water Systems']}
                    />
                </Question>

            )}

            {step == 2 && (
                <Question name="How many times per month do you sanitize water systems?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequncy"
                        placeholder="Times sanitization"
                        options={state.quantity.selected}
                    />
                </Question>

            )}

            {step == 3 && (

                <Question name="Select which strengths you will need to apply?" >
                    <>
                        <Strenght
                            state={state}
                            stepUp={stepUp}
                            name="strenght"
                            setState={setState}
                            options={stenghtObject}
                            filteredOption={state.quantity.selected}
                            setDefaultStrenght={() => { setDefaultStrenght(10) }}
                        />

                    </>
                </Question>

            )}


            {step == 4 && (
                <Question name='How long would you like a recirculating water system disinfectant  supply?'>
                    <Select
                        options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '3 year']}
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