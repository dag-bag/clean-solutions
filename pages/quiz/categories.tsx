import data from "../../data";
import { motion } from 'framer-motion'
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import CategoryCard from "../../components/cards/category-card";
import setQueriesChangeRoutes from "../../components/functions/setQueriesChangeRoutes";
export const selectedCategoryAtom = atom<string[]>({
    key: 'selected-category',
    default: [
        'water treatment'
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
            <div className="bg-[#74A3B6] h-full border border-blue-1">
                <motion.div className="bg-[#74A3B6] h-full md:h-auto">
                    <header className=" fixed top-0 left-0 z-50 flex items-center justify-center flex-col  px-5 bg-blue-1 w-full">
                        <h1 className="text-center md:text-[40px] text-[25px] text-gray-100 capitalize h-[100px] flex items-center justify-center font-bold  ">Please select all that interest you</h1>
                    </header>
                    <main className="bg-[#74A3B6] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 p-2 max-w-[1400px]  m-auto mt-[100px] md:mt-[120px]">
                        {categories.map((keyName, number) => (
                            <CategoryCard name={keyName} key={number} />
                        ))}
                    </main>
                </motion.div>
            </div>
        </Layout >
    )

}
export default CategoriesPage

