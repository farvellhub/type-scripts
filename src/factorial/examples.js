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

function factorial( n ) {
  var res = [1];
  for (var i = 2; i <= n; ++i) {
    var c = 0;
    for (var j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }   
  }
    
  return res.reverse().join("");
}

const fact128 = factorial(9999);

console.log(fact128);

console.log(fact128.split( "" ).length - 1);