import fizzbuzz from "../src/fizzbuzz/fizzbuzz";

describe( "Large Factorials", () => {
    it( "Zero", () => {
        expect( fizzbuzz( 0 ) ).toStrictEqual( [] );
    });
    it( "One", () => {
        expect( fizzbuzz( 1 ) ).toStrictEqual( [ "0" ] );
    });
    it( "10", () => {
        expect( fizzbuzz( 10 ) ).toStrictEqual( [ "0", "1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz" ] );
    });
    it( "FizzBuzz", () => {
        expect( fizzbuzz( 16 ) ).toStrictEqual( [ "0", "1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz", "buzz", "11", "fizz" , "13", "14", "fizzbuzz"] );
    });
});