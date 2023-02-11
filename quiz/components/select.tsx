interface props {
    options: string[],
    onClick: any;
    selectedOption: string,
    id?: string,
}
const Select = ({ options, onClick, selectedOption, id }: props) => {

    return <div className="lg:grid lg:grid-cols-2 lg:gap-x-2 " >
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
            style={isSelected ? { background: '#95D074' } : undefined}
            className="p-2 border-2 border-black rounded-full text-center my-2 capitalize font-semibold" onClick={onClick}>{keyName}</div>
    )
}