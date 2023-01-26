interface props {
    children: any,
    name: string,
}


const Question = ({ children, name }: props) => {
    return (
        <div>
            <h1 className='text-2xl py-2 font-normal text-white'>{name}</h1>
            {children}
        </div>
    )
}

export default Question 