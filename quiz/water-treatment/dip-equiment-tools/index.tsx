const defaultStrenght: any = {
    'Sanitize tools and equipment': 20,
    'Disinfect tools and equipment': 30,
    'Kill viruses, fungi, or mold on tools and equipment': 100
}

import Vector, { createBranch, vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'Sanitize tools and equipment': [
        createBranch('on an average week, how much water in gallons do you require to sanitize tools and equipment?', 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times per week do you sanitize tools and equipment", 'frequency', 'number', 'placeholder')
    ],
    'Disinfect tools and equipment': [
        createBranch('on an average week, how much water in gallons do you require to Disinfect tools and equipment ?', 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times per week do you disinfect tools and equipment", 'frequency', 'number', 'placeholder')
    ],
    'Kill viruses, fungi, or mold on tools and equipment': [
        createBranch('on an average week, how much water in gallons do you require to kill viruses, fungi, or mold on tools and equipment ?', 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times per week do you kill viruses, fungi, or mold on tools and equipment", 'frequency', 'number', 'placeholder')
    ]
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';

const DipEquipmentTools = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        waterRequire: {
            selected: []
        },
    })
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
            const sum = state.waterRequire.selected.map((keyname: string) => {
                return converters.gallonsToPpm(state.waterRequire[keyname]) * defaultStrenght[keyname]
            }).reduce((total: number, num: number) => total + num)

            return sum * (state?.freq * 4.4) * months
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
            hideButton: step == 1
        }}>

            {step == 1 && (
                <Vector data={vector} question="Choose Water System" next={stepUp} />
            )}

            {step == 2 && (
                <Question name='How long would you like a tools & equipment sanitizer supply?'>
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

export default DipEquipmentTools