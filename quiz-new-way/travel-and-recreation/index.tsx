import { useState } from 'react'
import { useRecoilValue } from 'recoil';

import { selectedSubCategoryAtom } from '../../pages/quiz/sub-category';
import findSimilarInArr from '../components/functions/findSimilarInArr';
import CampingHuntingAndScentEleminator from './camping-hunting-and-scent-eleminator';
import BoatAircraftAndRVWaterStorage from './boat-aircraft-and-rv-water-storage';
import BodySanitizerAndDeodrant from './body-sanitizer-and-deodrant';
import GymSpasClubsAndLockerRooms from './gyms-spas-clubs-and-locker-rooms';
import PortableWaterRecreation from './portable-water-preparation';
import CommutingAndLodgingSpray from './commuting-and-lodging-spray';
const TravelAndRecreation = ({ title, onComplete }: any) => {
    const [step, setStep] = useState(1)
    const subCategories = useRecoilValue(selectedSubCategoryAtom)

    const props = {
        category: title,
        onComplete: stepSubCategoriesCount
    }

    const renderObject: any = {
        'portable water preparation': <PortableWaterRecreation {...props} title={'portable water preparation'} />,
        'commuting and lodging spray': <CommutingAndLodgingSpray {...props} title={'commuting and lodging spray'} />,
        'gyms spas clubs & locker rooms': <GymSpasClubsAndLockerRooms {...props} title={'gyms spas clubs & locker rooms'} />,
        'boat, aircraft & rv water storage': <BoatAircraftAndRVWaterStorage {...props} title={'boat, aircraft & rv water storage'} />,
        'body sanitizer & deodrant': <BodySanitizerAndDeodrant {...props} title={'body sanitizer & deodrant'} />,
        'camping hunting & scent eleminator': <CampingHuntingAndScentEleminator {...props} title={'camping hunting & scent eleminator'} />
    }

    const mySubCategories = findSimilarInArr(Object.keys(renderObject), subCategories)
    const Max = mySubCategories.length; // it represent total count of selected categories

    function stepSubCategoriesCount() {
        setStep(prev => prev + 1)
        if (Max == step) {
            onComplete()
        }
    }


    return (
        <div>{renderObject[mySubCategories[step - 1]]}</div>
    )
}

export default TravelAndRecreation