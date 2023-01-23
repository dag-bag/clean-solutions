interface props {
    options: string[],
    onClick: any;
    selectedOptions: string[],
}
const MultipleSelect = ({ options, onClick, selectedOptions }: props) => {

    return <div>
        {options.map((keyName, index) => {
            const isSelected = selectedOptions.includes(keyName)
            const props = {
                keyName,
                onClick,
                isSelected,
            }
            return <Option {...props} key={index} />
        })}
    </div>
}
export default MultipleSelect

interface optionProps {
    keyName: string,
    onClick: any,
    isSelected: boolean
}

const Option = ({ keyName, onClick, isSelected }: optionProps) => {
    return (
        <div
            style={isSelected ? { color: 'red' } : undefined}
            className="p-2 border border-black" onClick={onClick}>{keyName}</div>
    )
}