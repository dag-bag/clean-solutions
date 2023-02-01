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
}

const MoreAdvancedMultipleNestedSelect = ({ state, setState, name, options }: props) => {
    return <div>
        {Object.keys(options).map((keyName) => <Option
            {...{
                name,
                state,
                keyName,
                setState,
                options: options[keyName],
                isSelected: state[name].value == keyName
            }} key={keyName} />)}
    </div>
}

const Option = ({ state, setState, name, keyName, isSelected, options }: optionProps) => {
    function onClick() {
        if (state[name].value == keyName) {
            setState({
                ...state, [name]: {
                    ...state[name],
                    value: '',
                }
            })
        } else {
            setState({
                ...state, [name]: {
                    ...state[name],
                    value: keyName,
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
                {Object.keys(options).map((keyName2, index) => (
                    <NestedOption key={index}
                        {...{
                            name,
                            state,
                            setState,
                            keyName2,
                            isSelected: state[name].sub_value == keyName2
                        }} />
                ))}
            </div>}
        </div>
    )
}




const NestedOption = ({ state, setState, name, isSelected, keyName2 }: nestedOptionProps) => {
    function onClick() {
        setState({
            ...state, [name]: {
                ...state[name],
                sub_value: keyName2
            }
        })
    }
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
export default MoreAdvancedMultipleNestedSelect