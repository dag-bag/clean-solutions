
import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import NumberInput from '../../components/NumberInput';
import converters from '../../components/functions/convertors';

const SkinInfactions = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [data, updateData] = useRecoilState(categoryState)
    const [state, setState] = useState<any>({})

    function calculate() {
        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)
            const quantity = converters.mlToPpm(946.3525)
            const strenght = 10
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
        }}>

            {step == 1 && (
                <Question name='How many times a month do you spray or soak fungi, yeast, or bacteria that can cause contamination or infectious diseases on skin?'>
                    <NumberInput min={1} max={30} name='freq' state={state} setState={setState} placeholder='usage per day' />

                </Question>
            )}

            {step == 2 && (
                <Question name='How long would you like to have a disinfection supply?'>
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

export default SkinInfactions