interface props {
    id: string;
    onClick: any;
    options: string[],
    selectedOptions: string[],
}
const MultipleSelect = ({ options, onClick, selectedOptions, id }: props) => {

    return (
        <div className="max-w-[400px] mx-auto">
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
    )
}
export default MultipleSelect

interface optionProps {
    keyName: string,
    onClick: any,
    id: string;
    isSelected: boolean,
}

const Option = ({ keyName, onClick, isSelected, id }: optionProps) => {
    const style = isSelected ? { background: '#518CA4', color: " white", transition: 'all .3s' } : undefined

    return (
        <div
            id={id}
            style={style}
            className="py-3 bg-gray-100 text-blue-1 rounded-md text-center text-lg my-3 capitalize font-bold"
            onClick={onClick}>{keyName}</div>
    )
}