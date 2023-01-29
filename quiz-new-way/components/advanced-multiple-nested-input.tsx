interface props {
    state: any,
    setState: any
    name: string,
    options: string[],
    placeholder: string,


    placeholders?: string[],
    questions?: string[],
    min?: number,
    max?: number,
}


const AdvancedMultipleNested = ({ state, setState, name, options, placeholder, placeholders, questions, max, min }: props) => {

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
                        placeholder,
                        max,
                        min,
                        keyName,
                        arreyWithoutThisKeyName,
                        question: questions ? questions[index] : undefined,
                        placeholders: placeholders ? placeholders[index] : undefined

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
    arreyWithoutThisKeyName: string[]
}
// we need to setup min max values;

const Option = ({ state, setState, name, keyName, isSelected, placeholder, min, max, question, arreyWithoutThisKeyName }: optionProps) => {
    function onClick() {

        if (isSelected) {
            setState({ ...state, [name]: { ...state[name], selected: arreyWithoutThisKeyName } })

        } else {
            setState({ ...state, [name]: { ...state[name], selected: [...state[name].selected, keyName] } })
        }

    }
    function onNestedQuestionHandler(event: any) {

        setState({ ...state, [name]: { ...state[name], [keyName]: event?.target.value } })

    }
    return (
        <div
            style={isSelected ? { borderLeft: '' } : undefined}
            className="  my-2 bg-white overflow-hidden" >
            <div onClick={onClick}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName}</h1>
            </div>
            {isSelected && <div className="p-2">
                <>
                    <h1 className="font-semibold py-2">{question}</h1>
                    <input className="w-[200px]" min={min} max={max} onChange={onNestedQuestionHandler} name={keyName} placeholder={placeholder} type="number" />
                </>
            </div>}


        </div>
    )
}