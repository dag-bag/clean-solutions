interface props {
    options: string[],
    onClick: any;
    selectedOptions: string[],
    onChangeNestedInputs: any,
    placeholder: string,
    min?: number,
    max?: number,
}
const MultipleNestedSelect = ({ options, onClick, selectedOptions, onChangeNestedInputs, placeholder, min, max }: props) => {

    return <div>
        {options.map((keyName, index) => {
            const isSelected = selectedOptions.includes(keyName)
            const props = {
                keyName,
                onClick,
                isSelected,
                placeholder,
                min, max,
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
    onChangeNestedInputs: any,
    placeholder: string,
    min?: number,
    max?: number,
}
// we need to setup min max values;

const Option = ({ keyName, onClick, isSelected, onChangeNestedInputs, placeholder, min, max }: optionProps) => {
    return (
        <div
            style={isSelected ? { color: 'red' } : undefined}
            className="p-2 border border-black" onClick={onClick}>

            <h1>{keyName}</h1>
            {isSelected && <div className="p-2">
                <>
                    <input className="w-[200px]" min={min} max={max} onChange={onChangeNestedInputs} name={keyName} placeholder={placeholder} type="number" />
                </>
            </div>}


        </div>
    )
}