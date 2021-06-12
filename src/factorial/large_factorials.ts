const factorial = ( factNumber: number ): string => {
    if ( factNumber === 0 ) return "1";
    if ( !factNumber ) return "";

    let carret: number;
    let index: number;
    let next: number;

    const result: number[] = [ Number( ...factNumber.toString().split( "" ))];

    // 15 factNumber, is already set to result.
    while ( --factNumber ) {
        carret = 0;
        index = result.length - 1;
        
        while ( next = ( index >= 0 ) ? result[ index-- ] : 0 || carret ) {
            carret += ( next * factNumber );
            result[ index + 1 ] = carret % 10;
            carret = Math.floor( carret / 10 );
        }
    }

    return result.join( "" );
};

// while ( nexNumber === undefined ) || ( carret !== undefined )

console.log(`!7 = 5040 ${factorial(7)}`);