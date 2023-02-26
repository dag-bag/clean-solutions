interface props {
    data: {
        [key: string]: meta[]
    },
    question: string
}

interface optionProps {
    name: string,
    onClick: any,
    isSelected: boolean
}

import Question from "../question"
import { useRecoilState } from "recoil"
import { componentStateAtom, meta } from './'

const Selector: React.FC<props> = ({ data, question }) => {
    const keys = Object.keys(data)
    const [state, setState] = useRecoilState(componentStateAtom)

    const onClickHandler = (keyName: string) => {
        const isSelected = state.input.selected.includes(keyName)
        return (isSelected)
            ? setState({
                ...state,
                input: {
                    ...state.input,
                    selected: [...state.input.selected.filter((key) => key !== keyName)]
                }
            })
            : setState({
                ...state,
                input: {
                    ...state.input,
                    selected: [...state.input.selected, keyName]
                }
            })
    }

    return (
        <Question name={question}>
            {keys.map((keyName: string) => (
                <Option name={keyName}
                    onClick={onClickHandler}
                    isSelected={state.input.selected.includes(keyName)} />
            ))}
        </Question>
    )
}

const Option: React.FC<optionProps> = ({ name, onClick, isSelected }) => {
    const style = isSelected ? { background: '#95D074' } : undefined
    return (
        <div style={style}
            onClick={() => { onClick(name) }}
            className="p-2 border-2 border-black rounded-full text-center my-2 capitalize font-semibold">{name}</div>
    )
}

export default Selector