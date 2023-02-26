const stenghtObject: any = {
    'Residential': {
        'light': 5,
        'moderate': 50,
        heavy: 500
    },
    'Commercial': {
        'light': 5,
        'moderate': 50,
        heavy: 500
    },
    'RV Tanks': {
        'light': 5,
        'moderate': 50,
        heavy: 500
    },
}

import Vector, { createBranch } from '../../components/Vector/';

const vector = {
    'Residential': [
        createBranch("How much water Residential system with wastewater hold?", 'quantity', 'select', 'placeholder', undefined, undefined, ['small', 'medium', 'large']),
        createBranch("How many times per month do you sanitize Commercial water systems?", 'frequency', 'number', 'placeholder', 1, 30)
    ],
    "Commercial": [
        createBranch("How much water Commercial system with wastewater hold?", 'quantity', 'select', 'placeholder', undefined, undefined, ['small', 'medium', 'large']),
        createBranch("How many times per month do you sanitize Commercial water systems?", 'frequency', 'number', 'placeholder', 1, 30)
    ],
    "RV Tanks": [
        createBranch("How much water RV Tanks system with wastewater hold?", 'quantity', 'select', 'placeholder', undefined, undefined, ['small', 'medium', 'large']),
        createBranch("How many times per month do you sanitize RV Tanks water systems?", 'frequency', 'number', 'placeholder', 1, 30)
    ]
}

import { useState } from 'react'
import { ChangeEvent } from 'react';
import quizdata from '../../../data';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';

const WasteWaterTreatment = ({ title, category, onComplete }: any) => {
    const Max = 2 // total number of question (start from 1)
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({
        quantity: {
            selected: []
        },
        frequency: {
            selected: []
        },
        strenght: {
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
        function extractNumbers(str: string): number[] {
            return str.match(/\d+/g)?.map(Number) || [];
        }
        try {
            const months = (state?.duration?.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)
            return 0 * months
        } catch (err) {
            console.log(err)
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
                <Question name='How long would you like a wastewater disinfectant supply to last?'>
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

export default WasteWaterTreatment