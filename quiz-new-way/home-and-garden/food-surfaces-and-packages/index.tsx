
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import MultipleSelect from '../../components/multiple-select';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const FoodSurfacesAndPackages = ({ title, category, onComplete }: any) => {
    const Max = 4
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [state, setState] = useState<any>({
        food_surfaces: [],
        sanitize: {
            selected: []
        }
    })

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

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

    function multiSelectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const { id, innerHTML } = event.target
        if (!state[id].includes(innerHTML)) {
            setState({ ...state, [id]: [...state[id], innerHTML] })
        } else {
            const filterArrWithoutselectedOptionValue = state[id].filter((value: any) => value !== innerHTML)
            setState({ ...state, [id]: filterArrWithoutselectedOptionValue })
        }
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
                <Question name="Select food-contact surfaces to sanitize">
                    <MultipleSelect
                        options={['Counters', 'Tables', 'Cabinets', 'Refrigerators', 'Stoves', 'Utensils', 'Glassware', 'Pots and Pans', 'Gloves and Hands', ' Other Appliances and Surfaces']}
                        selectedOptions={state?.food_surfaces}
                        onClick={multiSelectInputOnChangeHandler}
                        id="food_surfaces"
                    />
                </Question>
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
                <Question name="How many times per month do you sanitize food contact surfaces?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="sanitize"
                        options={state.food_surfaces}
                        placeholder="Times"
                    />
                </Question>
            )}

            {step == 4 && (
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