interface props {
    options: string[],
    onClick: any;
    selectedOption: string,
    id?: string,
}
const Select = ({ options, onClick, selectedOption, id }: props) => {

    return (
        <div className="max-w-[400px] mx-auto">

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
    )
}
export default Select

interface optionProps {
    keyName: string,
    onClick: any,
    isSelected: boolean,
    id?: string,
}

const Option = ({ keyName, onClick, isSelected, id }: optionProps) => {
    const style = isSelected ? { background: '#518CA4', color: " white", transition: 'all .3s' } : undefined
    return (
        <div
            id={id}
            style={style}
            className="py-3 bg-gray-100 text-blue-1 rounded-md text-center text-lg my-3 capitalize font-bold" onClick={onClick}>{keyName}</div>
    )
}