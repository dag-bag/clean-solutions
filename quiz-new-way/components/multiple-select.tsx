interface props {
    id: string;
    onClick: any;
    options: string[],
    selectedOptions: string[],
}
const MultipleSelect = ({ options, onClick, selectedOptions, id }: props) => {
    return <div className="flex flex-wrap gap-x-3 md:block ">
        {options.map((keyName, index) => {
            const isSelected = selectedOptions.includes(keyName)
            const props = {
                id,
                onClick,
                keyName,
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
    id: string;
    isSelected: boolean,
}

const Option = ({ keyName, onClick, isSelected, id }: optionProps) => {
    return (
        <div
            id={id}
            style={isSelected ? { background: '#95D074' } : undefined}
            className="p-2  border-2 border-black rounded-full text-center my-2 capitalize font-semibold" onClick={onClick}>{keyName}</div>
    )
}