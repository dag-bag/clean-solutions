
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import MultipleSelect from '../../components/multiple-select';

const LaundryDisinfection = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [state, setState] = useState<any>({
        multiselect: []
    })

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

            {step == 1 && (
                <Question name="Choose all that apply">
                    <MultipleSelect
                        options={['Everyday, Bodily Fluids Sweat, and Urine', 'Soiled, Heavy Bacteria, & Activewear', 'Fungi, Mold, and Mildew', 'Lice, Ticks, and Bedbugs']}
                        selectedOptions={state.multiselect}
                        onClick={multiSelectInputOnChangeHandler}
                        id="multiselect"
                    />
                </Question>
            )}

            {step == 2 && (
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

export default LaundryDisinfection