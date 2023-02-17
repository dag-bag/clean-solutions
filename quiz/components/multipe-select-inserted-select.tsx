interface props {
    state: any,
    setState: any
    name: string,
    options: any,
}

interface optionProps {
    name: string,
    state: any,
    options: any
    setState: any
    keyName: string,
    isSelected?: boolean,
}

interface nestedOptionProps {
    state: any,
    setState: any
    name: string,
    keyName2: string,
    isSelected?: boolean,
    keyName: string
}

const MultipleSelectInsertedSelect = ({ state, setState, name, options }: props) => (<div>
    {Object.keys(options).map((keyName) => <Option
        {...{
            name, state, keyName, setState, options: options[keyName], isSelected: state[name].selected.includes(keyName)
        }} key={keyName} />)}
</div>)

const Option = ({ state, setState, name, keyName, isSelected, options }: optionProps) => {
    function onClick() {
        if (isSelected) {
            setState(
                {
                    ...state,
                    [name]: {
                        ...state[name],
                        selected: [...state[name].selected.filter((value: string) => value !== keyName)]
                    }
                })
        } else {
            setState(
                {
                    ...state,
                    [name]: {
                        ...state[name],
                        selected: [...state[name].selected, keyName]
                    }
                })
        }
    }
    return (
        <div
            className="my-2 bg-white overflow-hidden rounded-md" >
            <div onClick={onClick}>
                <h1 className={`capitalize font-semibold ${isSelected ? `bg-green-1` : `bg-gray-200`} px-4 py-2 text-lg `}>{keyName}</h1>
            </div>
            {isSelected && <div className="p-2">
                {options.map((keyName2: string, index: number) => (
                    <NestedOption key={index}
                        {...{
                            name,
                            state,
                            setState,
                            keyName2,
                            keyName,
                            isSelected: state[name][keyName] == keyName2
                        }} />
                ))}
            </div>}
        </div>
    )
}




const NestedOption = ({ state, setState, name, isSelected, keyName2, keyName }: nestedOptionProps) => {
    function onClick() {
        setState({
            ...state, [name]: {
                ...state[name],
                [keyName]: keyName2
            }
        })
    }


    return (
        <div className={` my-2 bg-white overflow-hidden rounded-md ${isSelected ? `border-2 border-green-1 text-green-1` : `border-2`}`
        } >
            <div onClick={onClick}>
                <h1 className="capitalize  bg-gray-200 p-2 text-md">{keyName2}</h1>
            </div>
        </div >
    )
}
export default MultipleSelectInsertedSelect