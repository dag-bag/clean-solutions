import { atom } from 'recoil'

interface atomType {
    [key: string]: string | undefined;
}

const categoryState = atom<atomType>({
    key: 'anythong',
    default: {
        'hand-disinfactant': undefined,
        'deodrant-repellent': undefined,
        'dental-oral-hygeine': undefined,
        'skin-infactions': undefined,
        'laundry-disinfection': undefined,
    }
})

export default categoryState