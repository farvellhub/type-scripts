// const fizzBuzz = ( array ) => {
//     return array.map(( number ) => {
//         if ( number === 0 ) return number;
//         if ( number % 3 === 0 && number % 5 === 0 ) return "fizzbuzz";
//         if ( number % 3 === 0 ) return "fizz";
//         if ( number % 5 === 0 ) return "buzz";
//         return number;
//     });
// };

// console.log( fizzBuzz([ ...Array( 50 ).keys() ]));

class FizzBuzz {
    array: Array<number>;

    constructor( length: number ) {
        this.array =  Array.from( new Array( length ).keys());
    }

    private conditions( value: number ) {
        return {
            zero: ( value === 0 ),
            fizz: ( value % 3 === 0 ),
            buzz: ( value % 5 === 0 )
        };
    }

    public solve(): Array<string> {
        return this.array.map(( value: number ): string => {
            const conds: { [ key: string ]: boolean  } = this.conditions( value );

            if ( conds.zero ) return `${ value }`;
            if ( conds.fizz && conds.buzz ) return "fizzbuzz";
            if ( conds.fizz ) return "fizz";
            if ( conds.buzz ) return "buzz";

            return `${ value }`;
        });
    }
}

export default FizzBuzz;