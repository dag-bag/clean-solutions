const stenghtObject: any = {
    'Seeds and Propagations Rooms': {
        default: 0.5
    }, 'Soil, Hydro and Aeroponic Grow Beds': {
        default: 0.25
    }, 'Plants and Perpetual Grow Rooms': {
        default: 1
    }, 'Facilities, Tools and Equipment': {
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
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
import Strenght from '../../components/strenght';
import converters from '../../components/functions/convertors';

const GreenHouseAndGarden = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
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
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {
        const calcus: any = {
            'Seeds and Propagations Rooms': 3.78541,
            'Plants and Perpetual Grow Rooms': 1892.705,
            'Vase Water, Cuttings and Flowers': 37855.41,
            'Facilities, Tools and Equipment': 3.78541,
            'Soil, Hydro and Aeroponic Grow Beds': 1892.705,
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
                <Question name="What are you sanitizing and the maximum growing capacity?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={['Seeds and Propagations Rooms', 'Soil, Hydro and Aeroponic Grow Beds', 'Plants and Perpetual Grow Rooms', 'Facilities, Tools and Equipment', 'Vase Water, Cuttings and Flowers']}
                        placeholder="Square Feet "
                    />
                </Question>
            )
            }

            {
                step == 2 && (
                    <Question name="How many times per month do you sanitize in greenhouses?">
                        <AdvancedMultipleNested
                            state={state}
                            setState={setState}
                            name="frequency"
                            options={state.quantity.selected}
                            placeholder="times"
                        />
                    </Question>
                )
            }

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

            {
                step == 4 && (
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