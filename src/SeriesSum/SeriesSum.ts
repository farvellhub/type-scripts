export default function SeriesSum(number: number): string {
    return [...Array(number).keys()]
        .map(element => 1 / (element * 3 + 1))
        .reduce((acc, value) => acc + value, 0)
        .toFixed(2)
        .toString();
}