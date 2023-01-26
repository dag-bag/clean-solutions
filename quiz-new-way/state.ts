import { atom } from 'recoil'

interface atomType {
    [key: string]: string | false;
}

const categoryState = atom<atomType>({
    key: 'anythong',
    default: {
        'skin infections': false,
        'hand disinfactant': false,
        'deodrant & repellent': false,
        'dental & oral hygiene': false,
        'laundry disinfection': false,

    }
})

export default categoryState