interface props {
    options: string[],
    onClick: any;
    selectedOptions: string[],
    id: string;
}
const MultipleSelect = ({ options, onClick, selectedOptions, id }: props) => {

    return <div>
        {options.map((keyName, index) => {
            const isSelected = selectedOptions.includes(keyName)
            const props = {
                keyName,
                onClick,
                isSelected,
                id,
            }
            return <Option {...props} key={index} />
        })}
    </div>
}
export default MultipleSelect

interface optionProps {
    keyName: string,
    onClick: any,
    id: string;
    isSelected: boolean,
}

const Option = ({ keyName, onClick, isSelected, id }: optionProps) => {
    return (
        <div
            id={id}
            style={isSelected ? { color: 'red' } : undefined}
            className="p-2 border border-black" onClick={onClick}>{keyName}</div>
    )
}