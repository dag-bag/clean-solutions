interface props {
    name: string,
    children: JSX.Element | JSX.Element[],
}

const Question: React.FC<props> = ({ children, name }) => {
    return (
        <div>
            <h2 className="px-2 text-center text-blue-1 text-[25px] md:text-[30px] font-semibold mb-4 md:h-[150px] flex items-center justify-center  capitalize">{name}</h2>
            {children}
        </div >
    )
}
export default Question 