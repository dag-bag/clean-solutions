const subCateegoriesOfCategories: any = {
    'skin contact': ['skin infections', 'hand disinfactant', 'deodrant & repellent', 'dental & oral hygiene', 'laundry disinfection', 'hair & fur sanitizer for humans', 'hair & fur sanitizer for animals'],
    'water treatment': [
        'drinking water',
        'livestocks, pets & animals',
        'water retention & storage',
        'recirculating & shocks',
        'wastewater treatment',
        'dip tools and equipment'],
    'home and garden': ['hard surfaces and appliances',
        'greenhouse and garden',
        'gloceries and perishable foods',
        'food surfaces and packages',
        'soft surfaces and laundry',
        'fog rooms and carpenting'],
    'travel and recreation': ['portable water preparation', 'commuting and lodging spray', 'gyms spas clubs & locker rooms', 'boat, aircraft & rv water storage', 'body sanitizer & deodrant', 'camping hunting & scent eleminator'],
    'farm and ranch': ['raw produce, egg and meat',
        'horticulture and agriculture tools',
        'fugiment and insecticide',
        'green house and garden',
        'portable water for animals',
        'livestock sanitizer and deodorizer',
    ],
    'professional establishments': [
        'food establishments',
        'office and institution',
        'bottling equipment and facilities',
        'water systems, basins and storage',
        'HVAC, fogging and transportation',
        'bio-trauma remedation'
    ],
}

import Head from "next/head"
import { useRecoilState } from "recoil"
import categoryState from "../../quiz/state"
import Navbar from "../../components/Navbar"
import Drawer from "../../components/utils/Drawer"
import converters from "../../quiz/components/functions/convertors"

const Report = () => {
    const [state] = useRecoilState(categoryState)

    function insertSubCategoriesToCategoriesObject() {
        let obj: any = {}
        Object.keys(subCateegoriesOfCategories).forEach((categories: string) => {
            Object.keys(state).forEach((sub: string) => {
                if (subCateegoriesOfCategories[categories].includes(sub)) {
                    if (state[sub]) {
                        obj = {
                            ...obj,
                            [categories]: {
                                ...obj[categories],
                                [sub]: state[sub]
                            }
                        }
                    }
                }
            })
        })
        return obj
    }
    const actualData = insertSubCategoriesToCategoriesObject()
    return (
        <>
            <Head>
                <title>Report</title>
            </Head>
            <Navbar />
            <Drawer />
            <h1 className="text-center text-3xl py-5 font-semibold">Your Report</h1>
            <section className="border rounded-md overflow-hidden  max-w-7xl m-auto my-5 bg-gray-100">

                <div className="p-5">
                    {
                        Object.keys(actualData).map((keyName: string) => {
                            return (
                                <div>
                                    <h3 className=" p-2 capitalize font-semibold">{keyName}</h3>
                                    <div>
                                        {Object.keys(actualData[keyName]).map((t: string) => {
                                            return (
                                                <div className=" text-gray-500 md:h-10 capitalize grid grid-cols-2 border border-gray-300  md:w-[800px] border-b-0 last:border-b " >
                                                    <h5 className=" border-r border-gray-300 h-full flex items-center pl-5">{t}</h5>
                                                    <b className="font-mono h-full flex items-center pl-5">
                                                        {
                                                            isNaN(converters.ppmToMl(actualData[keyName][t]))
                                                                ? 'skipped'
                                                                : converters.ppmToMl(actualData[keyName][t])

                                                        }</b></div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section >

        </ >
    )
}

export default Report