interface props {
    options: string[],
    onClick: any;
    selectedOption: string,
}
const Select = ({ options, onClick, selectedOption }: props) => {

    return <div>
        {options.map((keyName, index) => {
            const isSelected = selectedOption == keyName
            const props = {
                keyName,
                onClick,
                isSelected,
            }
            return <Option {...props} key={index} />
        })}
    </div>
}
export default Select

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