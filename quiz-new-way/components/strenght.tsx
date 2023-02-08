interface props {
    state: any,
    stepUp: any
    name: string,
    options: any,
    setState: any
    filteredOption?: any,
    setDefaultStrenght: any,
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
    name: any,
    state: any,
    setState: any
    keyName: string,
    keyName2: string,
    isSelected?: boolean,
}

const Strenght = ({ state, setState, name, options, filteredOption, setDefaultStrenght, stepUp }: props) => {
    const allKeys = Object.keys(options)
    const filteredKeys = filteredOption ? allKeys.filter((value: string) => filteredOption.includes(value)) : allKeys

    function onNotSureButtonClickHandler() {
        stepUp()
        setDefaultStrenght()
    }

    return <div>
        {filteredKeys.map((keyName) => <Option
            {...{
                name,
                state,
                keyName,
                setState,
                options: options[keyName],
                isSelected: state[name]?.selected.includes(keyName)
            }} key={keyName} />)}

        <button onClick={onNotSureButtonClickHandler} className=" mx-1 items-center w-[150px] justify-start py-2 overflow-hidden  text-white transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal "> Not Sure</button>
    </div>
}

const Option = ({ state, setState, name, keyName, isSelected, options }: optionProps) => {
    const isDefaultValuePresent = Object.keys(options).includes('default')

    function onClick() {

        if (isSelected) {
            const payloader = { ...state }
            delete payloader[name][keyName]
            setState({
                ...payloader, [name]: {
                    ...payloader[name],
                    selected: [...payloader[name].selected.filter((key: string) => key !== keyName)],

                }
            })
        } else {
            if (isDefaultValuePresent) {
                setState({
                    ...state, [name]: {
                        ...state[name],
                        selected: [...state[name].selected, keyName],
                        [keyName]: 'default'

                    }
                })
            } else {
                setState({
                    ...state, [name]: {
                        ...state[name],
                        selected: [...state[name].selected, keyName]
                    }
                })
            }
        }
    }

    return (
        <div
            className="my-2 bg-white overflow-hidden rounded-md" >
            <div onClick={onClick}>
                <h1 className={`capitalize font-semibold ${isSelected ? `bg-green-1` : `bg-gray-200`} px-4 py-2 text-lg `}>{keyName}</h1>
            </div>
            {isSelected && !isDefaultValuePresent && <div className="p-2">
                {Object.keys(options).map((keyName2, index) => (
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
        <div
            className={`p-2  border-2 border-black rounded-full text-center my-2 capitalize font-semibold ${isSelected ? `bg-blue-300` : `bg-transparent`}`} onClick={onClick}>{keyName2}</div>
    )
}
export default Strenght