import data from "../../data";
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import CategoryCard from "../../components/cards/category-card";
import setQueriesChangeRoutes from "../../components/functions/setQueriesChangeRoutes";
export const selectedCategoryAtom = atom<string[]>({
    key: 'selected-category',
    default: [
    ]
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
            <div className="h-full max-h-max min-h-full bg-[#74A3B6]  overflow-y-auto">
                <header className=" fixed top-0 left-0 z-50 flex items-center justify-center flex-col  px-5 bg-blue-1 w-full">
                    <h1 className="text-center md:text-[40px] text-[20px] text-gray-100  h-[100px] flex items-center justify-center font-medium  ">Please select all that interest you</h1>
                </header>
                <div className="h-[150px]">)</div>
                <main className=" grid-rows-[250px_250px_250px_250px_250px_250px] md:grid-rows-[250px_250px_250px] lg:grid-rows-[250px_250px]  grid h-[calc(100%-200px)] md:grid-cols-2  lg:grid-cols-3 gap-5 lg:gap-6  p-2 max-w-[1280px]  m-auto bg-[#74A3B6]  ">
                    {categories.map((keyName, number) => (
                        <CategoryCard name={keyName} key={number} />
                    ))}
                </main>
            </div>
        </Layout >
    )

}
export default CategoriesPage

