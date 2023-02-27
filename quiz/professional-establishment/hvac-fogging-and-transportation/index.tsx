const stenghtObject: any = {
    'Home and Building': {
        Light: 50,
        Moderate: 100,
        Heavy: 200,
        HVAC: 500,
        Fugiment: 725

    }, 'Transport Vehicale': {
        Light: 50,
        Moderate: 100,
        Heavy: 200,
        HVAC: 500,
        Fugiment: 725

    }, 'Transport RV, Bus, Fleets, Boats': {
        Light: 50,
        Moderate: 100,
        Heavy: 200,
        HVAC: 500,
        Fugiment: 725

    }

}
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Strenght from '../../components/strenght';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';


const HVACFoggingAndTransportation = ({ title, category, onComplete }: any) => {
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
        },
        values: [],
    }) // input data stored for calculation
    const [data, updateData] = useRecoilState(categoryState)

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.quantity.selected.map((key: string) => {
                const q = converters.mlToPpm(state.quantity[key] * 3.78541)
                const f = state.frequency[key]
                const s = defaultStrenght == 0
                    ? stenghtObject[key][state.strenght[key]]
                    : defaultStrenght
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
        }}>


            {step == 1 && (
                <Question name="How many SQ FT are in your home or vehicle?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={['Home and Building', 'Transport Vehicale', 'Transport RV, Bus, Fleets, Boats']}
                        preDefineProperties={{ 'Transport Vehicale': 100, 'Transport RV, Bus, Fleets, Boats': 300 }}
                        placeholder="SQFT "
                    />

                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per month do you want to fog buildings or transportation?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequency"
                        options={state.quantity.selected}
                        placeholder="Times "
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
                <Question name='How long would you like a recirculating water system disinfectant supply?'>
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

export default HVACFoggingAndTransportation