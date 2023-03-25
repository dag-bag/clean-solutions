interface props {
    children: any,
    isEnabled?: boolean
    onNext: () => void,
    onPrevious: () => void
}

import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'

const Layout = ({ children, onNext, onPrevious, isEnabled }: props) => {
    return (
        <div className="w-full h-full absolute top-0 left-0">
            <button className="fixed left-0 top-1/2 bg-blue-1 bg-opacity-80 shadow-md p-3 md:p-5 text-2xl rounded-tr-full rounded-br-full text-white border border-white border-l-0  z-50" onClick={onNext}><AiOutlineCaretLeft /></button>
            {children}
            <button className=" z-50 disabled:opacity-50 fixed right-0 top-1/2 bg-blue-1 bg-opacity-80 shadow-md  p-3 md:p-5 text-2xl rounded-tl-full rounded-bl-full text-white border border-white  border-r-0 " onClick={onPrevious} disabled={isEnabled} ><AiOutlineCaretRight /></button>
        </div>
    )
}

export default Layout