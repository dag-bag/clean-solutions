import data from "../../data";
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import CategoryCard from "../../components/cards/category-card";
import setQueriesChangeRoutes from "../../components/functions/setQueriesChangeRoutes";
export const selectedCategoryAtom = atom<string[]>({
    key: 'selected-category',
    default: []
})

const CategoriesPage = () => {
    const categories = Object.keys(data)
    const [state] = useRecoilState(selectedCategoryAtom)
    function Next() {
        setQueriesChangeRoutes('welcome')
    }
    function Previous() {
        setQueriesChangeRoutes(`sub-category`)
    }
    return (
        <Layout onNext={Next} onPrevious={Previous} isEnabled={state.length == 0}>
            <div className="bg-[#74A3B6] md:h-full">
                <header className=" md:h-[20vh] h-[20vh]  flex items-center justify-center flex-col px-5">
                    <h1 className="text-center md:text-[50px] text-[35px] text-gray-100 uppercase font-bold ">Categories</h1>
                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-2 max-w-[1080px] m-auto">
                    {categories.map((keyName, number) => (
                        <CategoryCard name={keyName} key={number} />
                    ))}
                </main>
            </div>
        </Layout >
    )

}
export default CategoriesPage

