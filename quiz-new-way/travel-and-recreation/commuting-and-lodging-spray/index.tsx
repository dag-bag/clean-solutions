const stenghtObject: any = {
    'Hotel': {
        'fumigate': 725,
        'HVAC': 500,
        'moderate': 100,
    }, 'Hostel': {
        'fumigate': 725,
        'HVAC': 500,
        'moderate': 100,
    }, 'Camping': {
        'fumigate': 725,
        'HVAC': 500,
        'moderate': 100,
    }, "AirbNb": {
        'fumigate': 725,
        'HVAC': 500,
        'moderate': 100,
    }, 'Render Property': {
        'fumigate': 725,
        'HVAC': 500,
        'moderate': 100,
    }, 'Transportation': {
        'fumigate': 725,
        'HVAC': 500,
        'moderate': 100,
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

const CommutingAndLodgingSpray = ({ title, category, onComplete }: any) => {
    const Max = 4
    const [step, setStep] = useState(1)
    const componentMeta = quizdata[category].categories[title]
    const [isReadMoreToggled, setReadMore] = useState(true)
    const [defaultStrenght, setDefaultStrenght] = useState(0)
    const [data, updateData] = useRecoilState(categoryState)

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

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const q = converters.mlToPpm(state.quantity[key])
                const f = state.frequency[key]
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
                <>
                    <Question name="Select all that apply" >
                        <AdvancedMultipleNested
                            state={state}
                            setState={setState}
                            name="quantity"
                            placeholder="Quantity in numbers"
                            options={['Hotel', 'Hostel', 'Camping', "AirbNb", 'Render Property', 'Transportation']}
                            preDefineProperties={{
                                'Hotel': 3.78541,
                                'Hostel': 755,
                                'Camping': 1140,
                                'Transportation': 380
                            }}
                        />
                    </Question>
                </>

            )}

            {step == 2 && (
                <Question name="How many times per month do you travel and disinfect buildings or transportation?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequency"
                        placeholder="Frequncy"
                        options={state.quantity.selected}
                    />
                </Question>
            )}


            {step == 3 && (
                <Question name="Select which strengths you will need to apply" >
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
                <Question name='How long would you like a hair sanitizing ?'>
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

export default CommutingAndLodgingSpray