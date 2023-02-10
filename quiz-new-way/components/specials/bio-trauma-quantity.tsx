const initial: any = {
    'Blood and Blood Products': {
        'Soak': undefined,
        'Mop': undefined,
        'Spray': undefined,
        'Capeting and Subflooring': undefined
    },
    'Waste, Feces and Urine': {
        'Soak': undefined,
        'Mop': undefined,
        'Spray': undefined,
        'Capeting and Subflooring': undefined
    },
    'Viral Infections': {
        'Soak': undefined,
        'Mop': undefined,
        'Spray': undefined,
        'Capeting and Subflooring': undefined
    },
    'Airborne Pollutants': {
        'Soak': undefined,
        'Mop': undefined,
        'Spray': undefined,
        'Capeting and Subflooring': undefined
    },
    'Personal Protective Equipment': {
        'Soak': undefined,
        'Mop': undefined,
        'Spray': undefined,
        'Capeting and Subflooring': undefined
    },

}
import { NumberInputForMultipleNestedInput } from '../NumberInput'
import { useState } from 'react'

const BioTraumaQuantity = ({ state, setState, name }: any) => {
    const keys = Object.keys(initial)
    return (
        <div>
            {keys.map((keyName: string, i: number) => <First key={i} keyName={keyName} name={name} state={state} setState={setState} />)}
        </div>
    )
}

const First = ({ keyName, state, setState, name }: any) => {
    const keys = Object.keys(initial[keyName])
    const selected = state[name].selected.includes(keyName)
    function onClickHandler() {
        if (selected) {
            setState({
                ...state,
                [name]: {
                    ...state[name],
                    selected: [...state[name].selected.filter((key: string) => key !== keyName)]
                }
            })
        } else {
            setState({
                ...state,
                [name]: {
                    ...state[name],
                    selected: [...state[name].selected, keyName]
                }
            })
        }
    }

    return (
        <div className="my-2 bg-white overflow-hidden rounded-md" >
            <div onClick={onClickHandler}>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName}</h1>
            </div>
            {selected && (
                <div>

                    {keys.map((keyName2: string, i: number) => <Second key={i} parentKeyName={keyName} keyName={keyName2} state={state} setState={setState} name={name} />)}
                </div>
            )}
        </div>
    )
}
const Second = ({ keyName, state, setState, parentKeyName, name }: any) => {

    const [isToggled, setToggled] = useState(false)


    function onClickHandler() {
        setToggled(!isToggled)
    }

    function onChangeHandler(event: any) {
        setState({
            ...state,
            [name]: {
                ...state[name],
                [parentKeyName]: {
                    ...state[name][parentKeyName],
                    [keyName]: event.target.value
                }
            }
        })
    }
    return (
        <div className='my-1 border-l-2 border-gray-500'>
            <div onClick={onClickHandler}>
                <h1 className='capitalize font-[500] bg-gray-100 p-2 text-md'>{keyName}</h1>
            </div>
            {isToggled && (
                <div className='bg-gray-100 px-5'>
                    <NumberInputForMultipleNestedInput min={1} onChange={onChangeHandler} placeholder="Square feet of Area" name={keyName} value={state?.[name]?.[parentKeyName]?.[keyName] ?? NaN} />
                </div>
            )}
        </div>
    )
}



export default BioTraumaQuantity