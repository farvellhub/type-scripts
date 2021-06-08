export default class Vowels {
	static getCount( chain: string ): number {
		return chain.toLowerCase().split( "" ).filter(( value ) => {
			return [ "a", "e", "i", "o", "u" ].includes( value );
		}).length;
	}
}
	
console.log( Vowels.getCount( "abracadabrpqoewjrpoqweproqrpiahefoiapwoikrjtgopierhgopi" ));


// import { assert } from "chai";

// describe( "getCount", function(){
// 	it ( "should pass a sample test", function(){
// 		assert.strictEqual( Vowels.getCount( "abracadabra" ), 5 );
// 	});
// });