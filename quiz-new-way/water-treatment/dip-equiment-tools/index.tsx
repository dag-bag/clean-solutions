import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
const DipEquipmentTools = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        waterRequire: {
            selected: []
        },
    }) // input data stored for calculation
    const [isReadMoreToggled, setReadMore] = useState(true)
    const componentMeta = quizdata[category].categories[title]
    const [data, updateData] = useRecoilState(categoryState)

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)

    function calculate() {

        const WaterRequirementPerGallons: any = {
            'Sanitize tools and equipment?': 20,
            'Disinfect tools and equipment?': 30,
            'Kill viruses, fungi, or mold on tools and equipment?': 100
        }

        const QuntityOfWaterUse = state.animalQuantity.selected.map((key: string) => {
            const k1 = state.waterRequire[key] * WaterRequirementPerGallons[key]
            return k1
        }).reduce((total: number, num: number) => total + num)

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

            {JSON.stringify(state)}

            {step == 1 && (
                <Question name="On an average week, how much water do you require to… ?">
                    <AdvancedMultipleNested
                        setState={setState}
                        state={state}
                        name="waterRequire"
                        options={['Sanitize tools and equipment?', ' Disinfect tools and equipment?', 'Kill viruses, fungi, or mold on tools and equipment?']}
                        placeholder="In Gallons"
                    />
                </Question>
            )}

            {step == 2 && (
                <Question name="How many times per week do you sanitize tools equipment?">
                    <input name="freq" onChange={numberInputOnChangeHandler} type="number" placeholder='Times per day' />
                </Question>
            )}

            {step == 3 && (
                <Question name='How long would you like a tools & equipment sanitizer supply?'>
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

export default DipEquipmentTools