interface props {
    options: string[],
    onClick: any;
    selectedOptions: string[],
    onChangeNestedInputs: any,
}
const MultipleNestedSelect = ({ options, onClick, selectedOptions, onChangeNestedInputs }: props) => {

    return <div>
        {options.map((keyName, index) => {
            const isSelected = selectedOptions.includes(keyName)
            const props = {
                keyName,
                onClick,
                isSelected,
                onChangeNestedInputs
            }
            return <Option {...props} key={index} />
        })}
    </div>
}
export default MultipleNestedSelect

interface optionProps {
    keyName: string,
    onClick: any,
    isSelected: boolean,
    onChangeNestedInputs: any
}

const Option = ({ keyName, onClick, isSelected, onChangeNestedInputs }: optionProps) => {
    return (
        <div
            style={isSelected ? { color: 'red' } : undefined}
            className="p-2 border border-black" onClick={onClick}>

            <h1>{keyName}</h1>
            {isSelected && <div className="p-2">
                <input onChange={onChangeNestedInputs} name={keyName} placeholder="Gallon of water use" type="number" />
            </div>}


        </div>
    )
}