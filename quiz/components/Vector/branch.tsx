interface props {
    data: meta,
    name: string,
    onNext: () => void
}

import Select from "../select";
import Question from "../question";
import { useRecoilState } from "recoil";
import { componentStateAtom, type meta } from './'
import { NumberInputForMultipleNestedInput as Input } from '../NumberInput'

const Branch: React.FC<props> = ({ data, name, onNext }) => {
    const { data_key, input, question, min, max, placeholder, options } = data;

    const [state, setState] = useRecoilState(componentStateAtom)
    const onChangeHandler = (event: any) => {
        const { value } = event.target;
        const __name: any = state.input;
        setState({
            ...state,
            input: {
                ...state.input,
                [name]: {
                    ...__name[name],
                    [data_key]: value
                }
            }
        })
    }

    if (input == 'select') {
        const onClickHandler = (event: any) => {
            setState({
                ...state,
                input: {
                    ...state.input,
                    [name]: {
                        ...state.input[name],
                        [data_key]: event.target.innerHTML
                    }
                }
            })
        }

        const onNotSureButtonClickHandler = () => {
            setState({
                ...state,
                input: {
                    ...state.input,
                    [name]: {
                        ...state.input[name],
                        'strenght': 50
                    }
                }
            })
            onNext()
        }

        return (
            <>
                <Question name={question}>
                    <Select id="quantity" options={options as string[]} onClick={onClickHandler} selectedOption={state.input[name]?.[data_key]} />
                </Question>

                {data_key == 'strenght' && (
                    <button onClick={onNotSureButtonClickHandler} className=" mx-1 items-center w-[150px] justify-start py-2 overflow-hidden  text-white transition-all duration-150 ease-in-out rounded-full group border my-2 font-normal"> Not Sure</button>
                )}

            </>
        )
    }

    return (
        <Question name={data.question} >
            <Input
                min={min}
                max={max}
                name={name}
                placeholder={placeholder}
                onChange={onChangeHandler}
                value={state.input[name]?.[data_key] ?? NaN}
            />
        </Question>
    )
}

export default Branch