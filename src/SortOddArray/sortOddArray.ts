export default function SortOddArray(array: number[]) {
    return array
        .filter((value: number) => Math.round(value % 2) === 1)
        .sort((a: number, b: number) => a - b);
}