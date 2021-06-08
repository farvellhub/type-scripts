"use strict";
exports.__esModule = true;
var Vowels = /** @class */ (function () {
    function Vowels() {
    }
    Vowels.getCount = function (chain) {
        return chain.toLowerCase().split("").filter(function (value) {
            return ["a", "e", "i", "o", "u"].includes(value);
        }).length;
    };
    return Vowels;
}());
exports["default"] = Vowels;
console.log(Vowels.getCount("abracadabrpqoewjrpoqweproqrpiahefoiapwoikrjtgopierhgopi"));
// import { assert } from "chai";
// describe( "getCount", function(){
// 	it ( "should pass a sample test", function(){
// 		assert.strictEqual( Vowels.getCount( "abracadabra" ), 5 );
// 	});
// });
