import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';

const HVACFoggingAndTransportation = ({ title, category, onComplete }: any) => {
    const Max = 3 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        quanity: {
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
        const sum = state.quanity.selected.map((key: string) => {
            return converters.mlToPpm(state.quanity[key] * 3.78541) * state.frequency[key]
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



            {JSON.stringify(state)}

            {step == 1 && (
                <Question name="How many SQ FT are in your home or vehicle?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quanity"
                        options={['Home and Building', 'Vehicals and Transportation']}
                        placeholder="SQFT "
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per month do you want to fog buildings or transportation?">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="frequency"
                        options={state.quanity.selected}
                        placeholder="Times "
                    />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like a recirculating water system disinfectant supply?'>
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

export default HVACFoggingAndTransportation