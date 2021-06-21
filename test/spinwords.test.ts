import spinWords from "../src/spinwords";

describe( "Sppinning words", () => {
    it( "Hi", () => {
        expect( spinWords( "Hi" ) ).toStrictEqual( "Hi" );
    });
    it( "One thing", () => {
        expect( spinWords( "One thing" ) ).toStrictEqual( "One gniht" );
    });
    it( "Abracadabra", () => {
        expect( spinWords( "Abracadabra" ) ).toStrictEqual( "arbadacarbA" );
    });
});