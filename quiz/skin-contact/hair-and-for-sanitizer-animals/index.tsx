import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import Select from '../../components/select';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import converters from '../../components/functions/convertors';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import Vector, { componentStateAtom, createBranch, type vectorPayload } from '../../components/Vector/';

const vector: vectorPayload = {
    'cats': [
        createBranch("How many cats do you have?", 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times a month would you sanitize Cats hair?", 'frequency', 'number', 'placeholder', 1)
    ],
    'dogs': [
        createBranch("How many dogs do you have?", 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times a month would you sanitize dogs hair?", 'frequency', 'number', 'placeholder', 1)
    ],
    'other pets with dander hair or fur': [
        createBranch("How many other pets with dander hair or fur do you have?", 'quantity', 'number', 'placeholder', 1),
        createBranch("How many times a month would you sanitize other pets with dander hair or fur hair?", 'frequency', 'number', 'placeholder', 1)
    ]
}

const HairAndFurSanitizerForAnimals = ({ title, category, onComplete }: any) => {
    const Max = 2
    const [step, setStep] = useState(1)
    const [state, setState] = useState<any>({})
    const [data, updateData] = useRecoilState(categoryState)
    const vectorState = useRecoilValue(componentStateAtom)
    const resetVectorAtom = useResetRecoilState(componentStateAtom);

    function calculate() {
        try {
            const gallonsOfWaterRequire: any = {
                'cats': 3,
                dogs: 5,
                'other pets with dander hair or fur': 3
            }
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = vectorState.input.selected.map((keyName: string) => {
                const Q = converters.gallonsToPpm(vectorState.input[keyName].quantity * gallonsOfWaterRequire[keyName])
                const F = vectorState.input[keyName].frequency
                return Q * F
            }).reduce((t: number, k: number) => t + k)
            return sum * months
        } catch (err) {
            console.error('Question Skipped : cause --skipped flag in result/calculation')
        }
    }

    function stepUp() {
        setStep(prev => prev + 1)
        if (Max == step) {
            resetVectorAtom()
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
            hideButton: step == 1
        }}>

            {step == 1 && (
                <Vector data={vector} question={'Choose Animals?'} next={stepUp} />
            )}

            {step == 2 && (
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

export default HairAndFurSanitizerForAnimals