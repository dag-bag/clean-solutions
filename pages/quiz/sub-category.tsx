import data from "../../data";
import Router from "next/router";
import { motion } from 'framer-motion'
import { selectedCategoryAtom } from "./categories";
import Layout from "../../components/quiz-btn-layout";
import { subCategories as categories_data } from "../../data";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import CategoryCard from "../../components/cards/subCategory-card";
import PrerequisiteDataError from "../../quiz/components/prerequisite";

export const selectedSubCategoryAtom = atom<string[]>({
    key: 'selected-sub-category',
    default: [
        // 'recirculating & shocks'
    ]
})

export const categoryCounterAtom = atom({
    key: 'category-counter',
    default: 0
})

const varients = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0
    },
}

const SubCategoriesPage = () => {
    const [categoryCounter, setCategoryCounter] = useRecoilState(categoryCounterAtom)
    const selectedCategories = useRecoilValue(selectedCategoryAtom)
    const [selectedSubCategories] = useRecoilState(selectedSubCategoryAtom)

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
            <div className="bg-[#74A3B6] h-full overflow-hidden">

                <motion.div className="bg-[#74A3B6] h-full" key={categoryCounter} animate={'animate'} initial="initial" variants={varients} >
                    <header className=" md:h-[20vh] h-[20vh] md:mt-0 flex items-center justify-center flex-col my-2 px-5">
                        <h1 className="text-center md:text-[50px] text-[35px] text-gray-100 uppercase font-bold ">{categoryName}</h1>

                        <div className="md:block hidden w-[500px] bg-gray-100 rounded-full mt-5 ">
                            <motion.div
                                initial={{ width: 0 }}
                                style={{ height: '2px' }}
                                transition={{ duration: 1 }}
                                animate={{ width: (500 / selectedCategories.length) * (categoryCounter + 1) }} className="bg-gray-500 rounded-full"></motion.div>
                        </div>
                        <div className="block md:hidden w-[200px] bg-gray-100 rounded-full mt-5 ">
                            <motion.div
                                initial={{ width: 0 }}
                                style={{ height: '2px' }}
                                transition={{ duration: 1 }}
                                animate={{ width: (200 / selectedCategories.length) * (categoryCounter + 1) }} className="bg-gray-500 rounded-full"></motion.div>
                        </div>
                    </header>

                    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-2 max-w-[1080px] m-auto">
                        {subCategoriesList?.map((keyName, number) => <CategoryCard disabled={false} data={subCategoriesDataList[keyName]} name={keyName} key={number} />)}
                    </main>

                </motion.div>


            </div>
        </Layout >
    )

}
export default SubCategoriesPage



