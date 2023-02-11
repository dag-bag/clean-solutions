import React from 'react'
import { NumberInputForMultipleNestedInput } from './NumberInput'
interface props {
    state: any,
    min?: number,
    setState: any
    max?: number,
    name: string,
    options: string[],
    questions?: string[],
    placeholder?: string,
    placeholders?: string[],
    preDefineProperties?: {}
}


interface optionProps {
    name: any,
    state: any,
    min?: number,
    max?: number,
    setState: any
    keyName: string,
    question?: string,
    placeholder: string,
    isSelected: boolean,
    predefined?: boolean,
    preDefineProperties?: any
    arreyWithoutThisKeyName: string[],

}
const AdvancedMultipleNested: React.FC<props> = ({ state, setState, name, options, placeholder, placeholders, questions, max, min, preDefineProperties }) => {
    return <div>
        {
            options.map((keyName, index) => {

                const isSelected = state[name]?.selected?.includes(keyName)
                const arreyWithoutThisKeyName = state[name]?.selected?.filter((k: any) => k !== keyName)

                return <Option key={index}
                    {...{
                        state,
                        setState,
                        name,
                        isSelected,
                        placeholder: placeholder
                            ? placeholder
                            : placeholders
                                ? placeholders[index]
                                : '',
                        max,
                        min,
                        keyName,
                        arreyWithoutThisKeyName,
                        question: questions ? questions[index] : undefined,
                        placeholders: placeholders ? placeholders[index] : undefined,
                        predefined: preDefineProperties ? keyName in preDefineProperties : false,
                        preDefineProperties: preDefineProperties ?? undefined
                    }}
                />
            })
        }
    </div>
}
export default AdvancedMultipleNested



const Option = ({ state, setState, name, keyName, isSelected, placeholder, min, max, question, arreyWithoutThisKeyName, predefined, preDefineProperties }: optionProps) => {
    function onClick() {

        if (predefined) {
            if (isSelected) {
                const payloader = { ...state }
                delete payloader[name][keyName]
                setState({
                    ...payloader,
                    [name]: {
                        ...payloader[name],
                        selected: arreyWithoutThisKeyName,
                        [keyName]: undefined
                    }
                })

            } else {
                setState({
                    ...state,
                    [name]: {
                        ...state[name],
                        selected: [...state[name].selected, keyName],
                        [keyName]: preDefineProperties[keyName]
                    }
                })
            }

        } else {
            if (isSelected) {
                const payloader = { ...state }
                delete payloader[name][keyName]

                setState({ ...payloader, [name]: { ...payloader[name], selected: arreyWithoutThisKeyName } })

            } else {
                setState({ ...state, [name]: { ...state[name], selected: [...state[name].selected, keyName] } })
            }
        }
    }

    function onNestedQuestionHandler(event: any) {
        setState({
            ...state,
            [name]: {
                ...state[name],
                [keyName]: parseInt(event?.target.value)
            }
        })
    }


    return (
        <div
            className="my-2 bg-white overflow-hidden rounded-md" >
            <div onClick={onClick}>
                <h1 className={`capitalize font-semibold ${isSelected ? `bg-green-1` : `bg-gray-200`} px-4 py-2 text-lg `}>{keyName}</h1>
            </div>
            {isSelected && !predefined && (
                <div className="py-4 px-4">
                    <h1 className="font-semibold py-2">{question}</h1>
                    <NumberInputForMultipleNestedInput value={state[name][keyName] ?? ''} min={min} max={max} onChange={onNestedQuestionHandler} name={keyName} placeholder={placeholder} />
                </div>
            )}
        </div>
    )
}