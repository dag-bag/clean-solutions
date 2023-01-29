import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import MultipleNestedSelect from '../../components/multiple-select-nested-input';

const GreenHouseGarden = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        multiselect: []
    }) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {
        return 0
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            updateData({ ...data, [title]: calculate() })
            onComplete()
            console.log(data)
        }
    }

    function readMoreClickHandler() {
        setReadMore(p => !p)
    }

    function numberInputOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setState((prev: any) => { return { ...prev, [name ?? 'm']: parseInt(value) } })
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

    function selectInputOnChangeHandler(event: ChangeEvent<HTMLDivElement>) {
        const { id, innerHTML } = event.target
        setState((prev: any) => { return { ...prev, [id]: innerHTML } })
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

            {step == 1 && (
                <Question name="What are you sanitizing and the maximum growing capacity?">
                    <MultipleNestedSelect
                        options={['Seeds and Propagations Rooms', ' Soil, Hydro and Aeroponic Grow Beds', ' Plants and Perpetual Grow Rooms', 'Mushrooms,  Substrates and Fruiting Chamber', 'Trimming, Curing, Drying, and Harvest Rooms']}
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        onChangeNestedInputs={numberInputOnChangeHandler}
                        placeholder="Square Feet "

                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per month do you sanitize in greenhouses?">
                    <MultipleNestedSelect
                        options={['Seeds', 'Soil', 'Plants', 'Mushrooms', 'Work Rooms']}
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        onChangeNestedInputs={numberInputOnChangeHandler}
                        placeholder="Times sanitizing "

                    />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long do you want a greenhouse sanitizer supply?'>
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

export default GreenHouseGarden