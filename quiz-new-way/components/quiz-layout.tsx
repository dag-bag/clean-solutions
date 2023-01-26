import Header from "./header"
import categoryState from "../state"
import { useRecoilValue } from "recoil"
interface props {
    title: string,
    category: string,
    discription: string,
    children: any,
    isReadMoreToggled: boolean,
    readMoreClickHandler: any,
    stepUp: any
}

const Layout = ({ children, category, title, discription, readMoreClickHandler, isReadMoreToggled, stepUp }: props) => {
    const state = useRecoilValue(categoryState)
    return (
        <div className='md:grid md:gap-2 md:grid-cols-2 xl:max-w-screen-xl w-screen h-screen overflow-auto' >
            <Header {...{ category, title, discription, readMoreClickHandler, isReadMoreToggled }} />

            <div className='md:h-screen flex items-center bg-blue-1 px-10 mt-5 md:mt-0 py-10'>
                <div>
                    {JSON.stringify(state)}
                    {children}
                    <button onClick={stepUp} className="items-center w-[150px] justify-start py-2 overflow-hidden  text-white transition-all duration-150 ease-in-out rounded-full  group border  my-2 font-normal ">
                        Submit
                    </button>
                </div>



            </div>
        </div>
    )
}
export default Layout