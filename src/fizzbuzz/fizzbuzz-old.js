const fizzBuzz = ( array ) => {
	return array.map(( number ) => {
		if ( number === 0 ) return number;
		if ( number % 3 === 0 && number % 5 === 0 ) return "fizzbuzz";
		if ( number % 3 === 0 ) return "fizz";
		if ( number % 5 === 0 ) return "buzz";
		return number;
	});
};

console.log( fizzBuzz([ ...Array( 50 ).keys() ]));