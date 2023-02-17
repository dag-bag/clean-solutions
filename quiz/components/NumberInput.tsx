import { ChangeEvent } from "react"
interface props {
    placeholder: string,
    name: string,
    onChange?: any
    setState?: any,
    state?: any,
    min?: number,
    max?: number
}

interface NumberInputForMultipleNestedInputProps {
    placeholder: string,
    name: string,
    onChange?: any
    min?: number,
    max?: number,
    value: number
}
const NumberInput = ({ max, min, name, state, setState, placeholder, onChange }: props) => {

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setState((prev: any) => { return { ...prev, [name]: parseInt(value) } })
    }

    const value = state[name]
    return (
        <label htmlFor="input">
            <input
                id="input"
                name={name}
                type="number"
                value={value}
                placeholder={placeholder}
                onChange={!onChange ? onChangeHandler : onChange as any}
                className="rounded-md"
            />
            <p className="text-red-700 py-1">{!value ? '🔍Please fill input' : null}</p>
            <p className="text-red-700 py-1">{min ? min > value ? '🔍The value of the input is greater than the minimum value' : null : null}</p>
            <p className="text-red-700 py-1">{max ? max < value ? '🔍The value of the input is greater than the minimum value' : null : null}</p>
        </label>
    )
}

export default NumberInput


export const NumberInputForMultipleNestedInput = ({ max, min, name, placeholder, onChange, value }: NumberInputForMultipleNestedInputProps) => {

    return (
        <label htmlFor="input">
            <input
                id="input"
                name={name}
                type="number"
                value={value}
                placeholder={placeholder}
                onChange={onChange as any}
                className="rounded-md w-20"
            />
            <p className="text-red-700 py-1">{!value ? '🔍Please fill input' : null}</p>
            <p className="text-red-700 py-1">{min ? min > value ? '🔍The value of the input is greater than the minimum value' : null : null}</p>
            <p className="text-red-700 py-1">{max ? max < value ? '🔍The value of the input is greater than the minimum value' : null : null}</p>
        </label>
    )
}
