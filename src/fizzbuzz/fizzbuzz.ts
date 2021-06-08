export default class FizzBuzz {
	array: Array<number>;

	constructor( length: number ) {
		this.array =  Array.from( new Array( length ).keys());

		return this.solve();
	}

	private conditions( value: number ) {
		return {
			zero: ( value === 0 ),
			fizz: ( value % 3 === 0 ),
			buzz: ( value % 5 === 0 )
		};
	}

	private solve(): any {
		return this.array.map(( value ) => {
			const conds = this.conditions( value );

			if ( conds.zero ) return value;
			if ( conds.fizz && conds.buzz ) return "fizzbuzz";
			if ( conds.fizz ) return "fizz";
			if ( conds.buzz ) return "buzz";

			return value;
		});
	}
}

console.log( new FizzBuzz( 9999 ));