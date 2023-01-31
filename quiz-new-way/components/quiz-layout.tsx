import Header from "./header"
interface props {
    stepUp: any
    children: any,
    title: string,
    category: string,
    discription: string,
    readMoreClickHandler: any,
    isReadMoreToggled: boolean,
    stepDown?: any
}

const Layout = ({ children, category, title, discription, readMoreClickHandler, isReadMoreToggled, stepUp, stepDown }: props) => {
    return (
        <div className='md:grid md:gap-2 md:grid-cols-2 xl:max-w-screen-xl w-screen h-screen overflow-auto' >
            <Header {...{ category, title, discription, readMoreClickHandler, isReadMoreToggled }} />

            <div className='md:h-screen flex items-center bg-blue-1 px-10 mt-5 md:mt-0 py-10'>
                <div>
                    {children}
                    <div className="flex items-center justify-between mt-2">
                        <button onClick={stepDown ?? undefined} className=" mx-1 items-center w-[150px] justify-start py-2 overflow-hidden  text-white transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal ">
                            Previous
                        </button>

                        <button onClick={stepUp} className=" mx-1 items-center w-[150px] justify-start py-2 overflow-hidden  text-white transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal ">
                            Next
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Layout