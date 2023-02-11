
export default function countMySubCategories(arr1: string[], arr2: string[]) {

    const arr: string[] = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr.push(arr1[i])
            }
        }
    }

    return arr


}