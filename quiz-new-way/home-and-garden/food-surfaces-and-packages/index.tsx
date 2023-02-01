
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
    const Max = 3
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [state, setState] = useState<any>({
        multiselect: [],
        sanitize: {
            selected: []
        }
    })

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {

        const months = (state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] :
            (state?.duration.match(/(\d+)/)[0] * 12)

        const total = state.multiselect.map((keyname: string) => {
            return converters.gallonsToPpm(parseInt(state.sanitize[keyname]) * (1 / 4))
        }).reduce((total: number, num: number) => total + num)

        return total * 4.4 * months * 20
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            updateData({ ...data, [title]: calculate() })
            onComplete()
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
        const selectedOptionValue = event.target.innerHTML
        if (!state.multiselect.includes(selectedOptionValue)) {
            setState({ ...state, multiselect: [...state.multiselect, selectedOptionValue] })
        } else {
            const filterArrWithoutselectedOptionValue = state.multiselect.filter((value: any) => value !== selectedOptionValue)
            setState({ ...state, multiselect: filterArrWithoutselectedOptionValue })
        }
    }

    return (
        <Layout {...{
            title,
            stepUp,
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
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        id="multiselect"
                    />
                </Question>
            )}z

            {step == 2 && (
                <Question name="How many times per month do you sanitize food contact surfaces?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="sanitize"
                        options={state.multiselect}
                        placeholder="Times"
                    />
                </Question>
            )}

            {step == 3 && (
                <Question name="How long do you want to use a laundry disinfectant and deodorizer?">
                    <Select
                        options={['1 month', '2 month', '3 month', '6 month', '1 year']}
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