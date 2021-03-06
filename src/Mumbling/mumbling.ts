
// const accum = phrase => {
//   let inc = 1, sol = "";
  
//   for (var e in phrase) {
//     for (var i = 0; i < inc; i++) {
//       if (i === 0) {sol += phrase[e].toUpperCase();} else {sol += phrase[e].toLowerCase();}
//       if ((i === (inc - 1)) && (e != (phrase.length - 1))) {sol += "-";}
//     } inc++;
//   } return sol;
// };


const mumbling = ( phrase: string ) => {
     let total: number = 1;
  
     return phrase.split( "" ).map(( letter: string, size: number ) => {
         let temp: string = "", accum: number = 0;

         while ( accum < total ) {
             temp += ( accum === 0 )
                 ? letter.toUpperCase()
                 : letter.toLowerCase();
            
             if ( accum++ === ( total - 1 )
             && ( size + 1 ) !== ( phrase.length - 1 )) {
                 temp += "-";
             }
            
             accum = 0;
         }

         return temp;
     }).join( "" );
};

export default mumbling;