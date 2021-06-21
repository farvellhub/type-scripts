// const accum = str => {
//   let inc = 1, sol = "";
  
//   for (var e in str) {
//     for (var i = 0; i < inc; i++) {
//       if (i === 0) {sol += str[e].toUpperCase();} else {sol += str[e].toLowerCase();}
//       if ((i === (inc - 1)) && (e != (str.length - 1))) {sol += "-";}
//     } inc++;
//   } return sol;
// };

const mumbling = ( phrase: string ) => {
    let total: number = 1, accum: number = 0;
  
    let sol: string = phrase.split( "" ).map(( letter: string ) => {
        
        do {
            if ( accum === ( total - 1 ))
                return "-";
            
            return ( accum++ === 0 )
                ? letter.toUpperCase
                : letter.toLowerCase;
        
        } while ( accum < total++ );;

    }).join( "" );

    return sol;
};