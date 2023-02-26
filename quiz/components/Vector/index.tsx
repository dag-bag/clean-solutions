import Branch from './branch'
import { useState } from 'react'
import Selector from './selector'
import createBranchHeler from './helper'
import { atom, useRecoilState } from "recoil"
export const createBranch = createBranchHeler

interface props {
    data: {
        [key: string]: meta[]
    },
    question: string,
    next: () => void
}

export interface vectorPayload {
    [key: string]: meta[]
}

export interface meta {
    max?: number,
    min?: number,
    question: string,
    options?: string[],
    placeholder: string,
    input: 'number' | 'select',
    data_key: 'quantity' | 'frequency' | 'strenght' | 'additional',
}

export interface componentStateAtomType {
    input: {
        [key: string]: any,
        selected: string[]
    },
    address: 'A' | 'B'
}

export const componentStateAtom = atom<componentStateAtomType>({
    key: 'compoenent-state',
    default: {
        input: {
            'selected': []
        },
        address: 'A'
    }
})

const Vector: React.FC<props> = ({ data, question, next }) => {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [state, setState] = useRecoilState(componentStateAtom)

    const createVector = () => {
        let __vector: meta[][] = [];
        state.input.selected.forEach((keyName) => {
            __vector.push(data[keyName])
        })
        console.log(__vector)
        return __vector
    }

    const __vector = createVector()
    const keys = state.input.selected

    const setAddress = (value: componentStateAtomType['address']) => {
        setState({ ...state, address: value })
    }

    const onNextButtonClickHandler = () => {
        if (keys.length == 0) {
            return next()
        }

        if (state.address == "A") {
            setAddress('B')
        } else {
            if (X < __vector[Y].length - 1) {
                setX(X + 1)
            } else {
                if (Y < __vector.length - 1) {
                    setY(Y + 1)
                    setX(0)
                } else {
                    next()
                }
            }
        }
    }

    const onPreviousButtonClickHandler = () => {
        if (Y == 0 && X == 0) {
            setAddress('A')
        } else {
            if (X > 0) {
                setX(X - 1)
            } else {
                if (Y > 0) {
                    setY(Y - 1)
                }
            }
        }
    }

    return (
        <div>

            {state.address == 'A' && (
                <Selector data={data} question={question} />
            )}

            {state.address == "B" && <Branch name={keys[Y]} data={__vector[Y][X]} onNext={onNextButtonClickHandler} />}

            <hr className="my-3 md:my-5 opacity-50" />

            <div className="flex md:items-center md:justify-between mt-2 md:flex-row flex-col ">
                <button onClick={onPreviousButtonClickHandler} className="w-full mx-1 items-center md:w-[150px] justify-start py-2 overflow-hidden  text-white text-xl transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal hover:bg-green-1 hover:text-blue-1 hover:border-0  focus:bg-green-1 ">{'Back'}</button>
                <button onClick={onNextButtonClickHandler} className="w-full mx-1 items-center md:w-[150px] justify-start py-2 overflow-hidden  text-white text-xl transition-all duration-150 ease-in-out rounded-full group border my-2 font-normal hover:bg-green-1 hover:text-blue-1 hover:border-0  focus:bg-green-1  ">{'Next'}</button>
            </div>

        </div>
    )
}

export default Vector

