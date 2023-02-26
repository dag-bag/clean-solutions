import { type meta } from './'
type createBranch = (question: string, data_key: 'quantity' | 'frequency' | 'strenght' | 'additional', input: 'number' | 'select', placeholder: string, min?: number, max?: number, options?: string[]) => meta
const createBranch: createBranch = (question, data_key, input, placeholder, min, max, options) => {
    return { question, data_key, input, min, max, options, placeholder }
}

export default createBranch
