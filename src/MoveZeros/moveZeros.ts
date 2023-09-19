export default function MoveZeros(array: Array<number>): Array<number> {
  return array.filter((value: number) => value !== 0)
    .concat(array.filter((value: number) => value === 0));
}