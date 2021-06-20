// const arrayDiff = ( a, b ) => {
//     return a.filter(( number ) => {
//       return !b.includes( number );
//     })
// }

const arrayDiff = (array: Array<any>, diff: Array<any>) => {
    return array.filter(( value: any ) => {
      return !diff.includes( value );
    })
}

export default arrayDiff;