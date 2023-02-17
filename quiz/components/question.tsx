interface props {
    name: string,
    children: JSX.Element | JSX.Element[],
}

const Question: React.FC<props> = ({ children, name }) => {
    return (
        <div>
            <h1 className='text-2xl mb-5 font-normal text-white'>{name}</h1>
            {children}
        </div>
    )
}
export default Question 