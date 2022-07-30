// const getCount = ( string ) => {
//   const array = [ ...string ];
//   return array.filter(( letter ) => {
//     return [ "a", "e", "i", "o", "u" ]
//         .includes( letter );
//   }).length;
// }

const vowels = ( chain: string ): number => {
    return chain.toLowerCase().split( "" ).filter(( value ) => {
        return [ "a", "e", "i", "o", "u" ].includes( value );
    }).length;
}

export default vowels;