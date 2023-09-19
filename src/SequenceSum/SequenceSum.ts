export default function SequenceSum(begin: number, end: number, step: number) {
    let sum = Math.floor((end - begin) / step) + 1;
    return (sum <= 0) ? 0 : ((2 * begin + step * (sum - 1)) * sum / 2);
}