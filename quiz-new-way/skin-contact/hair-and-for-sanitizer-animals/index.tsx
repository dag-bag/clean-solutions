
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
import NumberInput from '../../components/NumberInput';

const HairAndFurSanitizerForAnimals = ({ title, category, onComplete }: any) => {
    const Max = 3
    const [step, setStep] = useState(1)
    const componentMeta = quizdata[category].categories[title]
    const [isReadMoreToggled, setReadMore] = useState(true)
    const [data, updateData] = useRecoilState(categoryState)

    const [state, setState] = useState<any>({
        animalQuantity: {
            selected: []
        },
        animalFrequncy: {
            selected: []
        },
        quantityOfOthers: ''
    })

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)


    function calculate() {

        const AnimalsPerQuantityInGallons: any = {
            cats: 3,
            dogs: 5,
            'Other pets with dander, hair or fur': state['quantityOfOthers'],
        }

        try {
            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.animalQuantity.selected.map((key: string) => {
                const quantity = converters.gallonsToPpm(AnimalsPerQuantityInGallons[key]) * state.animalQuantity[key]
                const frequncy = state.animalFrequncy[key]
                const strenght = 160
                console.log(quantity, frequncy, strenght)
                return quantity * frequncy * strenght
            }).reduce((t: number, n: number) => t + n)

            return sum * months
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
                <>
                    <Question name="How many animals do you have?" >
                        <AdvancedMultipleNested
                            state={state}
                            setState={setState}
                            name="animalQuantity"
                            placeholder="Quantity in numbers"
                            options={['cats', 'dogs', 'Other pets with dander, hair or fur']}
                            questions={['How many Cats do you have?', 'How many Dogs do you have?', 'How many Other animals do you have?']}
                        />
                    </Question>

                    {state.animalQuantity.selected.includes('Other pets with dander, hair or fur') && <Question name="How many gallons typically required to wash other animals?">
                        <NumberInput
                            state={state}
                            name="quantityOfOthers"
                            placeholder="usage per day"
                            onChange={(event: any) => {
                                setState({ ...state, 'quantityOfOthers': parseInt(event.target.value) })
                            }}
                        />
                    </Question>}
                </>

            )}

            {step == 2 && (
                <Question name="How many times a month would you sanitize animal hair?" >
                    <AdvancedMultipleNested
                        state={state}
                        setState={setState}
                        name="animalFrequncy"
                        placeholder="Wash Quantity"
                        options={state.animalQuantity.selected}
                        questions={['How many times a month would you sanitize cat hair?', 'How many times a month would you sanitize dog hair?', 'How many times a month would you sanitize other animals hair?']}
                    />
                </Question>
            )}


            {step == 3 && (
                <Question name='How long would you like a hair sanitizing ?'>
                    <Select
                        options={['1 month', '2 month', '3 month', '6 month', '1 year']}
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