import dynamic from "next/dynamic"
import Loading from "../../components/Loading"
const Quiz = dynamic(() => import("../../quiz"), {
    loading: () => <Loading />
})
const Start = () => <Quiz />
export default Start