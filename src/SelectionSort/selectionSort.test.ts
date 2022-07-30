import selectionSort from "./selectionSort";


describe( "Selection Sort", () => {
    it( "Simple test", () => {
        expect( selectionSort( [ 3, 2, 1 ] ) ).toStrictEqual( [ 1, 2, 3 ] );
    });
    it( "One thing", () => {
        expect( selectionSort( [ 0 ] ) ).toStrictEqual( [ 0 ] );
    });
    it( "complete", () => {
        expect( selectionSort( [ 8, 5, 2, 4, 9, 3, 0, 1, 6, 7 ] ) ).toStrictEqual( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] );
    });
});