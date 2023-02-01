import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';

const DeodrantRepellent = ({ title, category, onComplete }: any) => {
    const Max = 2 // how much question is in this subcategory (count start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({}) // input data stored for calculation
    const componentMeta = quizdata[category].categories[title]
    const [isReadMoreToggled, setReadMore] = useState(true)
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {

        const months = (state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] :
            (state?.duration.match(/(\d+)/)[0] * 12)

        return converters.mlToPpm(5) * (state?.freq * 4.4) * months * 50

    }

    function stepUp() {
        setStep(prev => prev + 1)
        console.log(title)
        if (Max == step) {
            updateData({ ...data, [title]: calculate() })
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

    function numberInputOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setState((prev: any) => { return { ...prev, [name]: parseInt(value) } })
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
        }} >

            {step == 1 && (
                <Question name='How many times per week do you apply deodorant?'>
                    <input name="freq" onChange={numberInputOnChangeHandler} type="number" placeholder='Count Usage' />
                </Question>
            )}

            {step == 2 && (
                <Question name='How long would you like a body deodorant to last?'>
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

export default DeodrantRepellent