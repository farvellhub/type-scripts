import mumbling from "../src/mumbling";

describe( "Mumbling", () => {
    it( "Hi", () => {
        expect( mumbling( "Hi" ) ).toStrictEqual( "H-Ii" );
    });
    it( "One", () => {
        expect( mumbling( "One" ) ).toStrictEqual( "O-Nn-Eee" );
    });
    it( "Abracadabra", () => {
        expect( mumbling( "Abracadabra" ) ).toStrictEqual( "A-Bb-Rrr-Aaaa-Ccccc-Aaaaaa-Ddddddd-Aaaaaaaa-Bbbbbbbbb-Rrrrrrrrrr-Aaaaaaaaaaa" );
    });
});