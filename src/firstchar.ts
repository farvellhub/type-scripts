// const firstNonRepeatingLetter = (s) => {
//   let arr = s.toLowerCase().split('');
  
//   return s[arr.findIndex((l) => {
//     return arr.filter((i) => {
//       return l === i;
//     }).length === 1;
//   })] || "";
// }

const firstChar = ( word: string ) => {
  let arr = word.toLowerCase().split("");
  
  return word[arr.findIndex(( letter: string ) => {
    return arr.filter(( other: string ) => {
      return letter === other;
    }).length === 1;
  })] || "";
}

export default firstChar;