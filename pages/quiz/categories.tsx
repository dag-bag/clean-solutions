import Router from "next/router";
import data from "../../_____quiz-data";
import { useRecoilState, atom } from "recoil";
import Layout from "../../components/quiz-btn-layout";
import CategoryCard from "../../components/cards/category-card";

export const selectedCategoryAtom = atom<string[]>({
    key: 'selected-category',
    default: []
})

const CategoriesPage = () => {
    const [state] = useRecoilState(selectedCategoryAtom)
    function Next() {
        Router.push('welcome')
    }
    function Previous() {
        Router.push(`sub-category`)
    }
    const categories = Object.keys(data)
    return (
        <Layout onNext={Next} onPrevious={Previous} isEnabled={state.length == 0}>
            <div>
                <header className=" md:h-[200px] h-[200px] md:mt-0 flex items-center justify-center flex-col my-2 px-5">
                    <h1 className="text-center md:text-[50px] text-[35px]  text-blue-1 font-[500] capitalize">categories</h1>
                    <p className="text-blue-1 font-[500] text-center px-2 md:text-lg  ">Select the categories in which you are interested.</p>
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

