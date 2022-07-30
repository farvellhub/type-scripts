
// const spinWords = (str) => {
//   return str.split(" ").map((w) => {
//     return (w.length > 4) ? w.split("").reverse().join("") : w;
//   }).join(" ");
// };


const spinWords = ( phrase: string ) => {
  return phrase.split( " " ).map(( word: string ) => {
      return ( word.length > 4 )
          ? word.split( "" ).reverse().join( "" )
          : word;
  }).join( " " );
};

export default spinWords;