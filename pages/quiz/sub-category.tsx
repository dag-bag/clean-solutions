import Router from "next/router";
import { flatten } from "lodash";
import data from "../../_____quiz-data";
import { selectedCategoryAtom } from "./categories";
import Layout from "../../components/quiz-btn-layout";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import CategoryCard from "../../components/cards/subCategory-card";
import PrerequisiteDataError from "../../quiz-new-way/components/prerequisite";

export const selectedSubCategoryAtom = atom<string[]>({
    key: 'selected-sub-category',
    default: []
})

const SubCategoriesPage = () => {
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const [state] = useRecoilState(selectedSubCategoryAtom)

    function getSub() {
        let arr = {};
        const categoryNames = Object.keys(data)
        categoryNames.forEach((key) => {
            arr = { ...arr, ...data[key].categories }
        })
        return arr
    }

    const subCategories = getSub()
    function Next() {
        Router.push('categories')
    }
    function Previous() {
        Router.push(`start`)
    }

    function getCategory() {
        return flatten(selectedCategories.map((key) => {
            return Object.keys(data[key].categories).filter((key) => key !== 'self')
        }))
    }

    const categories = getCategory()

    return (
        <Layout onNext={Next} onPrevious={Previous} isEnabled={state.length == 0} >
            <div>
                <header className=" md:h-[200px] h-[200px] md:mt-0 flex items-center justify-center flex-col my-2 px-5">
                    <h1 className="text-center md:text-[50px] text-[35px]  text-blue-1 font-[500] capitalize">sub categories</h1>
                    <p className="text-blue-1 font-[500] text-center px-2 md:text-lg  ">Select the categories in which you are interested.</p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-2 max-w-[1080px] m-auto">
                    {categories?.map((keyName, number) => {
                        return (
                            <CategoryCard disabled={false} data={subCategories} name={keyName} key={number} />
                        )
                    })}
                </main>
            </div>

            <div className="w-full flex items-center justify-center ">
                <PrerequisiteDataError />
            </div>

        </Layout >
    )

}
export default SubCategoriesPage

