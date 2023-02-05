import Router from "next/router";
import { flatten } from "lodash";
import data from "../../_____quiz-data";
import { selectedCategoryAtom } from "./categories";
import Layout from "../../components/quiz-btn-layout";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import CategoryCard from "../../components/cards/subCategory-card";
import PrerequisiteDataError from "../../quiz-new-way/components/prerequisite";

const disebledSubCategories = ['food surfaces and packages',
    'bio-trauma remedation', 'HVAC, fogging and transportation', 'fugiment and insecticide', 'livestock sanitizer and deodorizer']

export const selectedSubCategoryAtom = atom<string[]>({
    key: 'selected-sub-category',
    default: []
})

const SubCategoriesPage = () => {
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const [state, setState] = useRecoilState(selectedSubCategoryAtom)

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
        Router.back()
    }
    function Previous() {
        Router.push(`start`)
    }

    console.log(selectedCategories)

    // here is something
    function getCategory() {
        return flatten(selectedCategories.map((key) => {
            return Object.keys(data[key].categories).filter((key) => key !== 'self')
        }))
    }

    const categories = getCategory()

    return (
        <Layout onNext={Next} onPrevious={Previous} isEnabled={state.length == 0} >
            <div className="  ">
                <header className=" md:h-[200px] h-[100px] md:mt-0 flex items-center justify-center flex-col my-10 px-5">
                    <h1 className="text-center md:text-[50px] text-[35px]  font-heading text-blue-1 font-[800] capitalize">
                        Choose the sub categories
                    </h1>
                    <p className="text-gray-800 text-center p-2 text-lg ">Select the sub categories in which you are interested.</p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-2 max-w-[1080px] m-auto ">
                    {categories?.map((keyName, number) => {
                        return (
                            <CategoryCard disabled={disebledSubCategories.includes(keyName)} data={subCategories} name={keyName} key={number} />
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

