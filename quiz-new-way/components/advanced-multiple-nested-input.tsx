interface props {
    state: any,
    setState: any
    name: string,
    options: string[],
    placeholder?: string,


    placeholders?: string[],
    questions?: string[],
    min?: number,
    max?: number,
    preDefineProperties?: {}
}


const AdvancedMultipleNested = ({ state, setState, name, options, placeholder, placeholders, questions, max, min, preDefineProperties }: props) => {

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

interface optionProps {
    state: any,
    setState: any
    name: any,
    keyName: string,
    isSelected: boolean,
    placeholder: string,
    min?: number,
    max?: number,
    question?: string,
    arreyWithoutThisKeyName: string[],
    predefined?: boolean,
    preDefineProperties?: any

}
// we need to setup min max values;

const Option = ({ state, setState, name, keyName, isSelected, placeholder, min, max, question, arreyWithoutThisKeyName, predefined, preDefineProperties }: optionProps) => {
    function onClick() {

        if (predefined) {

            if (isSelected) {
                setState({
                    ...state,
                    [name]: {
                        ...state[name],
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
                setState({ ...state, [name]: { ...state[name], selected: arreyWithoutThisKeyName } })

            } else {
                setState({ ...state, [name]: { ...state[name], selected: [...state[name].selected, keyName] } })
            }
        }






    }
    function onNestedQuestionHandler(event: any) {

        setState({ ...state, [name]: { ...state[name], [keyName]: event?.target.value } })

    }
    return (
        <div
            style={isSelected ? { border: '2px red dashed' } : undefined}
            className="  my-2 bg-white overflow-hidden" >
            <div onClick={onClick}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName}</h1>
            </div>
            {isSelected && !predefined && <div className="p-2">
                <>
                    <h1 className="font-semibold py-2">{question}</h1>
                    <input className="w-[200px]" min={min} max={max} onChange={onNestedQuestionHandler} name={keyName} placeholder={placeholder} type="number" />
                </>
            </div>}


        </div>
    )
}