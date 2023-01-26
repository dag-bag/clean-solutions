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
    const [state, setState] = useRecoilState(selectedCategoryAtom)
    console.log(state)
    function Next() {
        Router.back()
    }
    function Previous() {
        Router.push(`sub-category`)
    }

    const categories = [...Object.keys(data), ...Object.keys(data), ...Object.keys(data)]

    return (
        <Layout onNext={Next} onPrevious={Previous} isEnabled={state.length == 0}>
            <div className="  ">
                <header className=" md:h-[200px] h-[100px] md:mt-0 flex items-center justify-center flex-col my-10 px-5">
                    <h1 className="text-center md:text-[50px] text-[35px]  font-heading text-blue-1 font-[800] capitalize">
                        Choose the categories
                    </h1>
                    <p className="text-gray-800 text-center p-2 text-lg ">Select the categories in which you are interested.</p>


                </header>
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-2 max-w-[1080px] m-auto ">


                    {categories.map((keyName, number) => (
                        <CategoryCard name={keyName} key={number} />
                    ))}

                </main>
            </div>




        </Layout >
    )

}
export default CategoriesPage

