export default function ArrayDiff<T>(array: Array<T>, diff: Array<T>): Array<T> {
  return array.filter((value: T) => !diff.includes(value));
}