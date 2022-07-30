
// function pigIt(str){
//   return str.split(" ").map((el) => {
//     return el.slice(1) + el.slice(0, 1) + "ay";
//   }).join(" ");
// }


function pigTail( phrase: string ){
  return phrase.split( " " ).map(( word: string ) => {
    return `${ word.slice( 1 ) } ${ word.slice( 0, 1 ) } ay`;
  }).join( " " );
}

export default pigTail;