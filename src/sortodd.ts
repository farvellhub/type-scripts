// const sortArray = (array) => {
//   let odd = findOddNumbers(array), inc = 0;
  
//   for (let i = 0; i < array.length; i++) {
//     if (Math.round(array[i] % 2) === 1) {
//       array[i] = odd[inc++];
//     }
//   }
  
//   return array;
// }

// const findOddNumbers = (array) => {
//   let odd = [];
  
//   for (let i = 0; i < array.length; i++) {
//     if (Math.round(array[i] % 2) === 1) {
//       odd.push(array[i]);
//     }
//   }
  
//   return odd.sort((a, b) => {
//     return a - b;
//   });
// }

const sortOddArray = ( array: Array<number> ) => {
    let odd = array.filter(( value ) => {
        return Math.round( value % 2 ) === 1;
    });
        
    let inc = 0;
  
    return odd.sort((a, b) => {
        return a - b;
    });
};

export default sortOddArray;