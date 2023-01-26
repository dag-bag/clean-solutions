interface props {
    children: any,
    isEnabled?: boolean
    onNext: () => void,
    onPrevious: () => void
}

const Layout = ({ children, onNext, onPrevious, isEnabled }: props) => {
    return (
        <div className="w-full h-full">
            <button className="absolute left-0 top-1/2 bg-red-500 p-2" onClick={onNext}>{'<'}</button>
            {children}
            <button className=" disabled:opacity-50 absolute right-0 top-1/2 bg-red-500 p-2" onClick={onPrevious} disabled={isEnabled} >{'>'}</button>
        </div>
    )
}

export default Layout