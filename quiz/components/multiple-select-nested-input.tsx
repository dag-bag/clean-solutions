interface props {
    max?: number,
    onClick: any;
    min?: number,
    options: string[],
    placeholder: string,
    selectedOptions: string[],
    onChangeNestedInputs: any,
    nestedQuestions?: [] | any
}

interface optionProps {
    max?: number,
    min?: number,
    onClick: any,
    keyName: string,
    question?: string,
    isSelected: boolean,
    placeholder: string,
    onChangeNestedInputs: any,
}

const MultipleNestedSelect = ({ options, onClick, selectedOptions, onChangeNestedInputs, placeholder, min, max, nestedQuestions }: props) => (
    <div>
        {options.map((keyName, index) => {
            const isSelected = selectedOptions.includes(keyName)
            const props = {
                keyName, onClick, isSelected, placeholder, min, max, onChangeNestedInputs, question: nestedQuestions ? nestedQuestions[index] : undefined
            }
            return <Option {...props} key={index} />
        })}
    </div>
)

export default MultipleNestedSelect

const Option = ({ keyName, onClick, isSelected, onChangeNestedInputs, placeholder, min, max, question }: optionProps) => {
    return (
        <div className="  my-2 bg-white overflow-hidden" onClick={onClick}>
            <div>
                <h1 className="capitalize font-semibold bg-gray-200 p-2 text-lg">{keyName}</h1>
            </div>
            {isSelected && <div className="p-2">
                <>
                    <h1 className="font-semibold py-2">{question}</h1>
                    <input className="w-[200px]" min={min} max={max} onChange={onChangeNestedInputs} name={keyName} placeholder={placeholder} type="number" />
                </>
            </div>}
        </div>
    )
}