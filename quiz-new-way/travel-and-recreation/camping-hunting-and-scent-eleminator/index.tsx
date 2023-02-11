import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
import MultipleSelectInsertedSelect from '../../components/multipe-select-inserted-select';

const FoodEstablishment = ({ title, category, onComplete }: any) => {
    const Max = 3 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        quantity: {
            selected: []
        },
        frequency: {
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

        const ppmValueObject: any = {
            'Produce, Fruits, Vegetable': 5,
            'Eggshells': 5,
            'Raw Meat, Poultry, & Seafood': 70,
            'Food Contact Surfaces': 20
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
            'Food Contact Surfaces': {
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
                <Question name="Enter how many pounds of goods and commodities are processed on average and select the preferred method for disinfection.">
                    <MultipleSelectInsertedSelect
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={{
                            'Produce, Fruits, Vegetable': ['Spray', 'Soak'],
                            'Eggshells': ['Spray', 'Soak'],
                            'Raw Meat, Poultry, & Seafood': ['Spray', 'Soak'],
                            'Food Contact Surfaces': ['Spray', 'Soak'],
                        }}
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How often is each type of food eaten in weeks?">
                    <AdvancedMultipleNested
                        state={state}
                        name="frequency"
                        setState={setState}
                        options={state.quantity.selected}
                        placeholder="Times per week"
                    />
                </Question>
            )}

            {step == 3 && (
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

export default FoodEstablishment