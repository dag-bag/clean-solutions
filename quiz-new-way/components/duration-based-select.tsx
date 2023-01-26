
const DurationBasedSelect = (props: any) => {
    const options = ['select  ', '1 month', '2 month', '3 month', '1 year', , '2 year', , '3 year']
    return (
        <select defaultValue={options[0]} {...props}>
            {options.map((optionValue, index) => <option value={optionValue}>{optionValue}</option>)}
        </select>
    )
}
export default DurationBasedSelect