export default function SelectionSort(array: number[]) {
    const copy: number[] = [...array];
    for (let index = 0; index < copy.length; index++) {
        for (let next = index + 1; next < copy.length; next++) {
            if (copy[next] < copy[index]) {
                const temp = copy[index];
                copy[index] = copy[next];
                copy[next] = temp;
            }
        }
    };
    return copy;
};