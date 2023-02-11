const strenghtObject = {
    'cats': {
        default: 80
    },
    'Pigs': {
        default: 80
    },
    'dogs': {
        default: 80
    },
    'Goats': {
        default: 80
    },
    'Cows': {
        default: 80
    },
    'Sheep': {
        default: 80
    },
    'Ducks': {
        default: 80
    },
    'Chickens': {
        default: 80
    },
    'Rabbits': {
        default: 80
    },
    'Honey Bees': {
        default: 80
    },
}


import { useState } from 'react'
import { ChangeEvent } from 'react';
import categoryState from '../../state';
import { useRecoilState } from 'recoil';
import Select from '../../components/select';
import quizdata from '../../../data';
import Question from '../../components/question';
import Layout from '../../components/quiz-layout';
import AdvancedMultipleNested from '../../components/advanced-multiple-nested-input';
import converters from '../../components/functions/convertors';
import MultipleSelectInsertedSelect from '../../components/multipe-select-inserted-select';


function convertObjectWithArr(arr: string[]) {
    const obj: any = {}
    arr.forEach((key) => {
        obj[key] = ['Spray', 'Soak']
    })
    return obj
}

const LivestocksSanitizerAnsDeodorizer = ({ title, category, onComplete }: any) => {
    const Max = 4
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

        method: {
            selected: []
        },

    })

    const discription = isReadMoreToggled
        ? componentMeta.discription
        : componentMeta.discription.concat(componentMeta.discription_more)


    function calculate() {



        const objValue: any = {
            'cats': {
                'Spray': 100,
                'Soak': 22712.5
            },
            'Pigs': {
                'Spray': 100,
                'Soak': 56781.2
            },
            'dogs': {
                'Spray': 100,
                'Soak': 22712.5
            },
            'Goats': {
                'Spray': 100,
                'Soak': 34068.7
            },
            'Cows': {
                'Spray': 100,
                'Soak': 113562
            },
            'Sheep': {
                'Spray': 100,
                'Soak': 56781.2
            },
            'Ducks': {
                'Spray': 100,
                'Soak': 22712.5
            },
            'Chickens': {
                'Spray': 100,
                'Soak': 22712.5
            },
            'Rabbits': {
                'Spray': 100,
                'Soak': 11356.2
            },
            'Honey Bees': {
                'Spray': 100,
                'Soak': 11356.2
            },
            'Other pets with dander, hair or fur': state["other-quantity"]

        }


        try {

            const months = (state?.duration.includes('month'))
                ? state?.duration.match(/(\d+)/)[0] :
                (state?.duration.match(/(\d+)/)[0] * 12)

            const sum = state.method.selected.map((key: string) => {
                const disinfactantMethodQuantity = converters.mlToPpm(objValue[key][state.method[key]])
                const animalQuantity = state.animalQuantity[key]
                const animalFrequency = state.animalFrequncy[key]
                return disinfactantMethodQuantity * (animalFrequency * animalQuantity) * 0.5
            }).reduce((t: number, k: number) => t + k)

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
                            options={[
                                'cats',
                                'Pigs',
                                'dogs',
                                'Goats',
                                'Cows',
                                'Sheep',
                                'Ducks',
                                'Chickens',
                                'Rabbits',
                                'Honey Bees',
                                'Other pets with dander, hair or fur']}
                            questions={['How many Cats do you have?', 'How many Dogs do you have?', 'How many Goats animals do you have?', 'How many Cows do you have?', 'How many Ducks do you have?', 'How many Chickens do you have?', 'How many Rabbits do you have?', 'How many Pigs do you have?', 'How many Sheep do you have?', 'How many Honey Bees do you have?', 'How many Other Animals do you have?']}
                        />

                        {state.animalQuantity.selected.includes('Other pets with dander, hair or fur') && <Question name="How many gallons typically required to wash other animals?">
                            <input onChange={(event) => { setState({ ...state, 'other-quantity': parseInt(event.target.value) }) }} type="number" placeholder='Times per day' />
                        </Question>}
                    </Question>
                </>

            )}


            {step == 2 && (
                <Question name="Enter how many pounds of goods and commodities are processed on average and select the preferred method for disinfection.">
                    <MultipleSelectInsertedSelect
                        state={state}
                        setState={setState}
                        name="method"
                        options={convertObjectWithArr(state.animalQuantity.selected)}
                    />
                </Question>
            )}

            {step == 3 && (
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


            {step == 4 && (
                <Question name='How long would you like a hair sanitizing supply?'>
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

export default LivestocksSanitizerAnsDeodorizer