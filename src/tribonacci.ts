// function tribonacci(signature,n){
//   var temp = 0;
  
//   if (n <= 1) {
//       signature.splice(n, signature.length);
//   }
  
//   for (var i = 0; i < (n - 3); i++) {
//       temp = signature[i + 2] + signature[i + 1] + signature[i];
//       signature.push(temp);
//   }
    
//   console.log(signature);
//   return signature;
// }

function tribonacci( signature: Array<number>, key: number ){
    var temp: number = 0;
  
  if ( key <= 1 ) {
      signature.splice( key, signature.length );
  }
  
  for ( let i = 0; i < ( key - 3 ); i++ ) {
      temp = signature[ i + 2 ] + signature[ i + 1 ] + signature[ i ];
      signature.push( temp );
  }
    
  return signature;
}