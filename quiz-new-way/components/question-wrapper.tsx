interface props {
    onNext: any,
    value: any,
    category: string,
    question: string,
    valueObject?: {},
    subCategory: string,
    children: JSX.Element
}
import meta from "../meta"

const Question = ({ category, subCategory, question, value, onNext, children, valueObject }: props) => {
    return (
        <div>
            <h1>{question}</h1>
            {children}
            <button className="px-10 mx-2 py-2 bg-gray-200 " onClick={() => {
                onNext(subCategory, question, value, valueObject)
            }}>  Next</button>
        </div>
    )
}

export default Question