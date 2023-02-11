import { atom } from 'recoil'

interface atomType {
    [key: string]: string | false;
}

const categoryState = atom<atomType>({
    key: 'anythong',
    default: {
        'drinking water': false,
        'skin infections': false,
        'hand disinfactant': false,
        'deodrant & repellent': false,
        'laundry disinfection': false,
        'dental & oral hygiene': false,
        'livestocks, pets & animals': false,
        'water retention & storage': false,
        'recirculating & shocks': false,
        'wastewater treatment': false,
        'dip tools and equipment': false,
        'food surfaces and packages': false,
        'gloceries and perishable foods': false,
        'hard surfaces and appliances': false,
        'soft surfaces and laundry': false,
        'greenhouse and garden': false,
        'fog rooms and carpenting': false,
        'portable water preparation': false,
        'commuting and lodging spray': false,
        'gyms spas clubs & locker rooms': false,
        'boat, aircraft & rv water storage': false,
        'body sanitizer & deodrant': false,
        'camping hunting & scent eleminator': false
    }
})

export default categoryState