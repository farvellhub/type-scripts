// const deleteNth = (arr, x) => {
//   return arr.filter((e, i) => {
//     return arr.slice(0, i).filter((l) => {
//       return l === e;
//     }).length < x;
//   });
// }

const deleteNth = ( array: Array<any>, nth: number ) => {
  return array.filter(( element: any, index: number ) => {
    return array.slice( 0, index ).filter(( value: any ) => {
      return value === element;
    }).length < nth;
  });
}

export default deleteNth;