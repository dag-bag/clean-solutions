import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../_____quiz-data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
import converters from '../../components/functions/convertors';
const DipEquipmentTools = ({ title, category, onComplete }: any) => {
    const Max = 3 // total number of question (start from 1)
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
        const months = (state?.duration.includes('month'))
            ? state?.duration.match(/(\d+)/)[0] :
            (state?.duration.match(/(\d+)/)[0] * 12)

        const WaterRequirementPerGallons: any = {
            'Sanitize tools and equipment': 20,
            'Disinfect tools and equipment': 30,
            'Kill viruses, fungi, or mold on tools and equipment': 100
        }
        const totalGallonRequire = state.waterRequire.selected.map((keyname: string) => {
            return converters.gallonsToPpm(state.waterRequire[keyname]) * WaterRequirementPerGallons[keyname]
        }).reduce((total: number, num: number) => total + num)

        return totalGallonRequire * state?.freq * 4.4 * months
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
                <Question name="On an average week, how much water in gallons do you require to… ?">
                    <AdvancedMultipleNested
                        setState={setState}
                        state={state}
                        name="waterRequire"
                        options={['Sanitize tools and equipment', 'Disinfect tools and equipment', 'Kill viruses, fungi, or mold on tools and equipment']}
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