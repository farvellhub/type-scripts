// const fizzBuzz = ( size ) => {
//     return [ ...Array( size ).keys() ].map(( number ) => {
//         if ( number === 0 ) return number;
//         if ( number % 3 === 0 && number % 5 === 0 ) return "fizzbuzz";
//         if ( number % 3 === 0 ) return "fizz";
//         if ( number % 5 === 0 ) return "buzz";
//         return number;
//     });
// };

// console.log( fizzBuzz( 50 ));

const fizzbuzz = ( size: number ): Array<string> => {
    return [...Array( size ).keys()].map(( value: number ): string => {
        if ( value === 0 ) return `${ value }`;
        if ( value % 3 === 0 && value % 5 === 0 ) return "fizzbuzz";
        if ( value % 3 === 0 ) return "fizz";
        if ( value % 5 === 0 ) return "buzz";

        return `${ value }`;
    });
};


export default fizzbuzz;