import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const HoticultureAndAgriculture = ({ title, category, onComplete }: any) => {
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
        const months = (state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] :
            (state?.duration.match(/(\d+)/)[0] * 12)

        const sum = state.quantity.selected.map((value: string) => {
            return state.quantity[value] * state.frequency[value]
        }).reduce((total: number, num: number) => total + num)
        return sum * months * 100
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
                <Question name="Pick methods for preferred disinfection and deodorizing.">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={['Spray', 'Mop', 'Soak']}
                        placeholder="Square Feet "
                        questions={['What is the SQ FT of home?', 'How many SQ FT in the home are hard-floors?', 'How many gallons do you typically use in a week for disinfecting hard, non-food contact surfaces?',]}
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per month do you sanitize hard surfaces?">
                    <AdvancedMultipleNested
                        state={state}
                        name="frequency"
                        setState={setState}
                        options={['Spray', 'Mop', 'Soak']}
                        placeholder="times "
                    />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like a hard surface sanitizer supply?'>
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

export default HoticultureAndAgriculture