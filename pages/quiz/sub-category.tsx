import data from "../../data";
import Router from "next/router";
import { motion } from 'framer-motion'
import Modal from "../../components/modal/Modal";
import { selectedCategoryAtom } from "./categories";
import Layout from "../../components/quiz-btn-layout";
import { subCategories as categories_data } from "../../data";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import CategoryCard from "../../components/cards/subCategory-card";
import PrerequisiteDataError from "../../quiz/components/prerequisite";

export const selectedSubCategoryAtom = atom<string[]>({
    key: 'selected-sub-category',
    default: []
})

export const ModelAtom = atom<any>({
    key: 'model-atom',
    default: false
})

export const categoryCounterAtom = atom({
    key: 'category-counter',
    default: 0
})

const SubCategoriesPage = () => {
    const model = useRecoilValue(ModelAtom)
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const [selectedSubCategories] = useRecoilState(selectedSubCategoryAtom)
    const [categoryCounter, setCategoryCounter] = useRecoilState(categoryCounterAtom)


    const categoryName = selectedCategories[categoryCounter]
    const selectedCategoriesLength = selectedCategories.length - 1
    const subCategoriesList: string[] = categories_data[categoryName]
    const subCategoriesDataList: any = data[selectedCategories[categoryCounter]]?.['categories']

    function Next() {
        return (categoryCounter == 0)
            ? Router.push('categories')
            : setCategoryCounter(prev => prev - 1)
    }

    function Previous() {
        return (selectedCategoriesLength === categoryCounter)
            ? Router.push('start')
            : setCategoryCounter(prev => prev + 1)
    }

    if (selectedCategories.length == 0) {
        return (
            <Layout onNext={Next} onPrevious={Previous} isEnabled={selectedSubCategories.length == 0} >
                <div className="w-full flex items-center justify-center h-full absolute">
                    <PrerequisiteDataError />
                </div>
            </Layout>
        )
    }

    return (
        <Layout onNext={Next} onPrevious={Previous} isEnabled={selectedSubCategories.length == 0} >
            <div className="bg-[#74A3B6] h-full border border-blue-1">
                {model && <Modal title={model.title} discription={model.discription} />}
                <motion.div className="bg-[#74A3B6] h-full md:h-auto">
                    <header className=" fixed top-0 left-0 flex items-center justify-center flex-col  px-5 bg-blue-1 w-full">
                        <h1 className="text-center md:text-[40px] text-[30px] text-gray-100 capitalize h-[100px] flex items-center justify-center font-bold ">select categories</h1>
                    </header>
                    <main className="bg-[#74A3B6] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 p-2 max-w-[1400px]  m-auto mt-[100px] md:mt-[120px]">
                        {subCategoriesList?.map((keyName, number) => <CategoryCard disabled={false} data={subCategoriesDataList[keyName]} name={keyName} key={number} />)}
                    </main>
                </motion.div>
            </div>
        </Layout >
    )

}
export default SubCategoriesPage

