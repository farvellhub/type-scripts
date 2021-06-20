// const moveZeros = (arr) => {
//   return arr.filter((n) => {
//     return n !== 0;
//   }).concat(arr.filter((x) => {
//     return x === 0;
//   }));
// }

const moveZeros = ( array: Array<number> ) => {
  return array.filter(( value: number ) => {
    return value !== 0;
  }).concat( array.filter(( value: number ) => {
    return value === 0;
  }));
}

export default moveZeros;