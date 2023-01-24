// here we assume only skin-contact (caategory) is selected

import SkinContact from "./skin-contact"
import { atom, useRecoilState } from 'recoil'

const categoroiesAtom = atom<any>({
    key: 'flfkdsf;ldfkd',
    default: {

    }
})


const QuizNewWay = () => {
    return (
        <div className="fixed w-full h-full flex items-center justify-center">
            <SkinContact title="skin-content" />
        </div>
    )
}
export default QuizNewWay