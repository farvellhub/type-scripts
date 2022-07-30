import vowels from "./vowels";

describe( "Count Vowels", () => {
    it( "Hi", () => {
        expect( vowels( "Hi" ) ).toStrictEqual( 1 );
    });
    it( "One", () => {
        expect( vowels( "One" ) ).toStrictEqual( 2 );
    });
    it( "Abracadabra", () => {
        expect( vowels( "Abracadabra" ) ).toStrictEqual( 5 );
    });
    it( "Too long phrase that we count all chars in.", () => {
        expect( vowels( "Too long phrase that we count all chars in." ) ).toStrictEqual( 12 );
    });
});