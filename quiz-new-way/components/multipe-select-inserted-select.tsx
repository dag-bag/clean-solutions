interface props {
    state: any,
    setState: any
    name: string,
    options: any,
}

interface optionProps {
    name: any,
    state: any,
    options: any
    setState: any
    keyName: string,
    isSelected?: boolean,
}

interface nestedOptionProps {
    state: any,
    setState: any
    name: any,
    keyName2: string,
    isSelected?: boolean,
    keyName: string
}

const MultipleSelectInsertedSelect = ({ state, setState, name, options }: props) => {


    return <div>
        {Object.keys(options).map((keyName) => <Option
            {...{
                name,
                state,
                keyName,
                setState,
                options: options[keyName],
                isSelected: state[name].selected.includes(keyName)
            }} key={keyName} />)}
    </div>
}

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
            style={isSelected ? { border: '2px red dashed' } : undefined}
            className="  my-2 bg-white overflow-hidden" >
            <div onClick={onClick}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName}</h1>
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

    console.log(keyName)

    return (
        <div
            style={isSelected ? { border: '2px red dashed' } : undefined}
            className="  my-2 bg-white overflow-hidden" >
            <div onClick={onClick}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName2}</h1>
            </div>
        </div>
    )
}
export default MultipleSelectInsertedSelect