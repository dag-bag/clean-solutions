const stenghtObject: any = {
    'Blood and Blood Products': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }, 'Waste, Feces and Urine': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }, 'Viral Infections': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }, 'Airborne Pollutants': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    },
    'Personal Protective Equipment': {
        Light: 50,
        Moderate: 100,
        Heavy: 500
    }
}
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Strenght from '../../components/strenght';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import BioTraumaQuantity from '../../components/specials/bio-trauma-quantity';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const BioTraumaRemedation = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [defaultStrenght, setDefaultStrenght] = useState(0)
    const [state, setState] = useState<any>({
        frequency: {
            selected: []
        },
        strenght: {
            selected: []
        },
        first: {
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

            const sum = state.first.selected.map((key: string) => {
                const quantity = converters.mlToPpm(Object.values(state.first[key]).reduce((t: any, k: any) => parseInt(t) + parseInt(k)) as any * 3.78541)
                const frequency = state.frequency[key]
                const strenght = defaultStrenght == 0
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
                return quantity * frequency * strenght
            }).reduce((t: number, k: number) => t + k)

            return sum * months
        } catch (err) {
            console.error('Question Skipped : cause --skipped flag in result/calculation')
            console.error(err)
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
                <Question name="Select applications and maximum holding size of equipment in gallons for the facility.">
                    <BioTraumaQuantity {...{ state, setState, name: 'first' }} />
                </Question>
            )
            }

            {
                step == 2 && (
                    <Question name="How many times per month do you sanitize equipment and machinery?">
                        <AdvancedMultipleNested
                            state={state}
                            setState={setState}
                            name="frequency"
                            options={state.first.selected}
                            placeholder="times "
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
                        filteredOption={state.first.selected}
                        setDefaultStrenght={() => { setDefaultStrenght(50) }}
                    />
                </Question>

            )}

            {
                step == 4 && (
                    <Question name='How long would you like to keep this supply?'>
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

export default BioTraumaRemedation