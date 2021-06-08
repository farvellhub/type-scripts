"use strict";
exports.__esModule = true;
var FizzBuzz = /** @class */ ( function () {
	function FizzBuzz( length ) {
		this.array = Array.from( new Array( length ).keys());
		return this.solve();
	}
	FizzBuzz.prototype.conditions = function ( value ) {
		return {
			zero: ( value === 0 ),
			fizz: ( value % 3 === 0 ),
			buzz: ( value % 5 === 0 )
		};
	};
	FizzBuzz.prototype.solve = function () {
		var _this = this;
		return this.array.map( function ( value ) {
			var conds = _this.conditions( value );
			if ( conds.zero )
				return value;
			if ( conds.fizz && conds.buzz )
				return "fizzbuzz";
			if ( conds.fizz )
				return "fizz";
			if ( conds.buzz )
				return "buzz";
			return value;
		});
	};
	return FizzBuzz;
}());
exports["default"] = FizzBuzz;
console.log( new FizzBuzz( 9999 ));
