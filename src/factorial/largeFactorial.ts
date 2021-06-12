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

    console.log(result.join(""));
    return result.join( "" );

};

export default largeFactorial;
