const stenghtObject = {
    'water retention': {
        'light': 5,
        'heavy': 5,
        'moderate': 5,
    },
    'continous': {
        'light': 5,
        'heavy': 5,
        'moderate': 5,
    },
    'slug dose': {
        'light': 5,
        'heavy': 5,
        'moderate': 5,
    },
    'tanks': {
        'light': 5,
        'heavy': 5,
        'moderate': 5,
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
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
import AdvancedMultipleNestedSelect from '../../components/advanced-multiple-nested-select';

const WaterRetentionStorage = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        quantity: {
            selected: []
        },
        frequncy: {
            selected: []
        }, strenght: {
            value: '',
            sub_value: ''
        }


    }) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {

        const months = (state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] :
            (state?.duration.match(/(\d+)/)[0] * 12)

        const sum = state.quantity.selected.map((value: string) => {
            return state.quantity[value] * state.frequncy[value]
        }).reduce((total: number, num: number) => total + num)

        const defaultStreght = 1
        return converters.gallonsToPpm(sum) * months * defaultStreght
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            updateData({ ...data, [title]: calculate() })
            onComplete()
            console.log(data)
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
                <Question name="How many gallons do each of your water retention or storage containment devices hold?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        placeholder="Quantity in numbers"
                        options={['Ponds, Reservoirs, and Retention Basins', 'Once-through Water Cooling Systems', 'Aircraft, RV, Boat Tanks and Lines', 'Other Non-Potable Water Storage']}
                    />
                </Question>

            )}

            {step == 2 && (

                <Question name="How many times per month do you want to sanitize water containment?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequncy"
                        placeholder="Quantity in numbers"
                        options={state.quantity.selected}
                    />
                </Question>

            )}

            {step == 3 && (

                <Question name="Select which strengths you will need to apply" >
                    <>
                        <AdvancedMultipleNestedSelect
                            state={state}
                            name="strenght"
                            setState={setState}
                            options={stenghtObject}
                        />

                    </>
                </Question>

            )}


            {step == 4 && (
                <Question name='How long would you like a water storage sanitizer supply to last?'>
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

export default WaterRetentionStorage