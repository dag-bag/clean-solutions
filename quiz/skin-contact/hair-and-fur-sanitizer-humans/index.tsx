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

const HairAndFurSanitizerForHuman = ({ title, category, onComplete }: any) => {
    const Max = 3
    const [step, setStep] = useState(1)
    const componentMeta = quizdata[category].categories[title]
    const [isReadMoreToggled, setReadMore] = useState(true)
    const [data, updateData] = useRecoilState(categoryState)

    const [state, setState] = useState<any>({
    })

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)


    function calculate() {
        const selectValues: any = {
            'Short': 10,
            'Medium': 15,
            'Long': 20,
            'Extra long': 25
        }
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)
            const quantity = converters.mlToPpm(selectValues[state.quan])
            const strenght = 80
            const frequency = state.freq * 4.4
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
                <Question name='What length is your hair?'>
                    <Select
                        options={['Short', 'Medium', 'Long', 'Extra long']}
                        selectedOption={state?.quan}
                        onClick={selectInputOnChangeHandler}
                        id="quan"
                    />

                </Question>
            )}

            {step == 2 && (
                <Question name="How many times a week would you sanitize your hair?">
                    <NumberInput min={1} name='freq' state={state} setState={setState} placeholder='usage per week' />
                </Question>
            )}


            {step == 3 && (
                <Question name='How long would you like a hair sanitizing ?'>
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

export default HairAndFurSanitizerForHuman