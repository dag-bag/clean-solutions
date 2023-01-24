interface props {
    options: string[],
    onClick: any;
    selectedOption: string,
    id?: string,
}
const Select = ({ options, onClick, selectedOption, id }: props) => {

    return <div >
        {options.map((keyName, index) => {
            const isSelected = selectedOption == keyName
            const props = {
                keyName,
                onClick,
                isSelected,
                id
            }
            return <Option {...props} key={index} />
        })}
    </div>
}
export default Select

interface optionProps {
    keyName: string,
    onClick: any,
    isSelected: boolean,
    id?: string,
}

const Option = ({ keyName, onClick, isSelected, id }: optionProps) => {
    return (
        <div
            id={id}
            style={isSelected ? { color: 'red' } : undefined}
            className="p-2 border border-black" onClick={onClick}>{keyName}</div>
    )
}