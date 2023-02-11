interface props {
    category: string,
    title: string,
    discription: string,
    isReadMoreToggled: boolean,
    readMoreClickHandler: () => void,
}

const Header = ({ category, title, discription, readMoreClickHandler, isReadMoreToggled }: props) => {
    return (
        <div className=' flex flex-col justify-center xl:pr-20 md:px-5 xl:pl-0 px-10 py-10 '>

            <h3 className='font-[400] capitalize text-blue-1'>{category}</h3>
            <h1 className='text-2xl py-2 font-semibold capitalize  text-green-1' > {title}</h1>
            <p className=''> {discription}</p>
            <button onClick={readMoreClickHandler} className="items-center max-w-[150px] justify-start py-2 overflow-hidden  text-green-1 transition-all duration-150 ease-in-out rounded-full bg-none group border border-green-1  my-2 font-normal ">Read {!isReadMoreToggled ? 'Less' : 'More'}</button>
        </div>
    )
}


export default Header