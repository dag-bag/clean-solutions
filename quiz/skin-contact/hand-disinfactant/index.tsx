import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import NumberInput from '../../components/NumberInput';
import converters from '../../components/functions/convertors';

const HandDisInfactant = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({})
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
            const quantity = converters.mlToPpm(2) * 30
            const strenght = 50
            const frequency = state.freq
            return quantity * frequency * strenght * months
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
                <Question name="How many times per day do you apply skin sanitizer?">
                    <NumberInput min={1} name='freq' state={state} setState={setState} placeholder='usage per day' />
                </Question>
            )}

            {step == 2 && (
                <Question name='How long would you like your hand sanitizer supply to last?'>
                    <Select
                        id="duration"
                        selectedOption={state?.duration}
                        onClick={selectInputOnChangeHandler}
                        options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '5 year']}
                    />
                </Question>
            )}

        </Layout>
    )
}

export default HandDisInfactant