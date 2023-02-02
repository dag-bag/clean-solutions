// !calculation
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
const BottlingEquimentAndFacilities = ({ title, category, onComplete }: any) => {
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

        const sum = state.quantity.selected.map((key: string) => {
            return converters.gallonsToPpm(state.quantity[key] * 3.78541) * state.frequency[key]
        }).reduce((t: number, v: number) => t + v)
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


            {step == 1 && (
                <Question name="Select applications and maximum holding size of equipment in gallons for the facility.">
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="quantity"
                        options={['Dairies', 'Breweries and Microbrewing', 'Wineries and Distilleries', 'Bottling and Canning']}
                        placeholder="Gallons"
                    />
                </Question>
            )
            }

            {
                step == 2 && (
                    <Question name="How many times per month do you sanitize equipment and machinery?">
                        <AdvancedMultipleNested
                            state={state}
                            setState={setState}
                            name="frequency"
                            options={state.quantity.selected}
                            placeholder="times "
                        />
                    </Question>
                )
            }

            {
                step == 3 && (
                    <Question name='How long would you like to keep this supply?'>
                        <Select
                            options={['1 month', '2 month', '3 month', '6 month', '1 year', '2 year', '3 year']}
                            selectedOption={state?.duration}
                            onClick={selectInputOnChangeHandler}
                            id="duration"
                        />
                    </Question>
                )
            }
        </Layout >
    )
}

export default BottlingEquimentAndFacilities