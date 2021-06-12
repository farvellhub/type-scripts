// function factorial( n ) {
//   var res = [1];
//   for (var i = 2; i <= n; ++i) {
//     var c = 0;
//     for (var j = 0; j < res.length || c !== 0; ++j) {
//       c += (res[j] || 0) * i;
//       res[j] = c % 10;
//       c = Math.floor(c / 10);
//     }   
//   }
    
//   return res.reverse().join("");
// }

const largeFactorial = (factNumber: number): string => {
    if (!factNumber) return "";
    if (factNumber === 0) return "1";
    
    const result = [Number(...factNumber.toString().split(""))];
        
    let amount: number;
    let index: number;
    let next: number;

    while (--factNumber) {
        index = 0;
        amount = 0;

        while (( next = Number( result[ index++ ])) !== undefined || amount) {
            amount += ( next || 0 ) * factNumber;
            result[ index - 1 ] = amount % 10
            amount = Math.floor( amount / 10 );
        }
    }

    return result.join( "" );
};

console.log("hello" )

export default largeFactorial;


// function factorial(userInt) {
//     if (userInt === 0) return '1';
//     if (!userInt) return '';

//   var i, nextNumber, carret,

//   result = userInt.toString().split('').reverse().map(Number)

//   while(--userInt){
//     i = carret = 0

//     while((nextNumber = result[i++]) !== undefined || carret) {
//       carret = (nextNumber || 0) * userInt + carret
//       result[i-1] = carret % 10
//       carret = parseInt(carret/10)
//     }
//   }

//   return result.reverse().join('')
// }