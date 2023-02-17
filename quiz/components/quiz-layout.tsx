import Header from "./header"
interface props {
    title: string,
    children: any,
    category: string,
    stepUp: () => void
    discription: string,
    stepDown?: () => void
    isReadMoreToggled: boolean,
    readMoreClickHandler: () => void,
}

const Layout: React.FC<props> = ({ children, category, title, discription, readMoreClickHandler, isReadMoreToggled, stepUp, stepDown }) => {
    return (
        <div className='md:grid md:gap-2 md:grid-cols-2 xl:max-w-screen-xl w-screen h-screen overflow-auto' >
            <Header {...{ category, title, discription, readMoreClickHandler, isReadMoreToggled }} />
            <div className='md:h-screen flex items-center bg-blue-1 md:px-10 px-5 mt-5 md:mt-0 py-10'>
                <div> {children}
                    <hr className="my-3 md:my-5 opacity-50" />
                    <div className="flex md:items-center md:justify-between mt-2 md:flex-row flex-col ">
                        <button onClick={stepDown ?? undefined} className="w-full mx-1 items-center md:w-[150px] justify-start py-2 overflow-hidden  text-white text-xl transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal hover:bg-green-1 hover:text-blue-1 hover:border-0  focus:bg-green-1 ">{'<< Back'}</button>
                        <button onClick={stepUp} className="w-full mx-1 items-center md:w-[150px] justify-start py-2 overflow-hidden  text-white text-xl transition-all duration-150 ease-in-out rounded-full group border my-2 font-normal hover:bg-green-1 hover:text-blue-1 hover:border-0  focus:bg-green-1  ">{'Next >>'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout