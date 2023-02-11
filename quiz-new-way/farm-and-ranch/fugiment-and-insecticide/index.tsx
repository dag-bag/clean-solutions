import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import NumberInput from '../../components/NumberInput';


const FugimentAndInsecticide = ({ title, category, onComplete }: any) => {
    const Max = 4 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({}) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {

        const laundryWeight: any = {
            'moderate': 100, 'heavy': 200, 'HVAC': 500, "Fumigate ": 725
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)
            const q = converters.mlToPpm(state.quantity * 3.78541)
            const f = state.freq
            const s = laundryWeight[state.strenght]
            return q * f * s * months
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
                <Question name="How much area do you need to keep disinfected? ">
                    <NumberInput name="quantity" placeholder='SQFT' state={state} setState={setState} />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per month do you want to fog buildings or transportation?">
                    <NumberInput name="freq" placeholder='usage per month' state={state} setState={setState} />
                </Question>
            )}
            {step == 3 && (
                <Question name="How many loads of laundry (linens and clothes) do you wash on an average month?">
                    <Select
                        options={['moderate', 'heavy', 'HVAC', 'Fumigate']}
                        selectedOption={state?.strenght}
                        onClick={selectInputOnChangeHandler}
                        id="strenght"
                    />
                </Question>
            )}

            {step == 4 && (
                <Question name='How long would you like a room or facility fogging supply?'>
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

export default FugimentAndInsecticide