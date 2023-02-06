interface props {
    state: any,
    setState: any
    name: string,
    options: any,
    filteredOption?: any,
    setDefaultStrenght: any,
    stepUp: any
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


        <button onClick={onNotSureButtonClickHandler} className=" mx-1 items-center w-[150px] justify-start py-2 overflow-hidden  text-white transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal ">
            Not Sure
        </button>
    </div>
}

const Option = ({ state, setState, name, keyName, isSelected, options }: optionProps) => {
    const isDefaultValuePresent = Object.keys(options).includes('default')

    function onClick() {

        if (isSelected) {
            setState({
                ...state, [name]: {
                    ...state[name],
                    selected: [...state[name].selected.filter((key: string) => key !== keyName)],

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
            style={isSelected ? { border: '2px red dashed' } : undefined}
            className="  my-2 bg-white overflow-hidden" >
            <div onClick={onClick}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName}</h1>
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
            style={isSelected ? { border: '2px red dashed' } : undefined}
            className="  my-2 bg-white overflow-hidden" >
            <div onClick={onClick}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName2}</h1>
            </div>
        </div>
    )
}
export default Strenght