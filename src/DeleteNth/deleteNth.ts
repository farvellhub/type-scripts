export default function DeleteNth<T>(array: Array<T>, nth: number): Array<T> {
  return array.filter((element: T, index: number) => {
    return array.slice(0, index).filter((value: T) => {
      return value === element;
    }).length < nth;
  });
}