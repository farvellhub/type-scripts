// function factorial(userInt) {
//     if (userInt === 0) return '1';
//     if (!userInt) return '';

//   var i, nextNumber, carret,

//       result = userInt.toString().split('')
//             .reverse().map(Number)

//   while(--userInt){
//     i = carret = 0

//     while((nextNumber = result[i++]) !== undefined 
//     || carret) {
//       carret = (nextNumber || 0) * userInt + carret
//       result[i-1] = carret % 10
//       carret = parseInt(carret/10)
//     }
//   }

//   return result.reverse().join('')
// }

const largeFactorial = (factNumber: number): string => {
    if (!factNumber) return "";
    if (factNumber === 0) return "1";
    
    const result = factNumber.toString().split("")
        .map(( value ) => Number( value ));
        
    let amount: number;
    let index: number;
    let next: number;

    while (--factNumber) {
        index = result.length - 1;
        amount = 0;

        while ((next = result[index--]) !== undefined || amount) {
            amount += ((next || 0) * factNumber);

            if (index < -1) {
                result.unshift(amount % 10);
            } else { result[index + 1] = amount % 10; }

            amount = Math.floor( amount / 10 );
        }
    }

    return result.join( "" );

};

export default largeFactorial;