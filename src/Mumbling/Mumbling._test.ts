import Mumbling from "./mumbling";

describe("Mumbling", () => {
    it("Hi", () => {
        expect(Mumbling("Hi")).toStrictEqual("H-Ii");
    });
    it("One", () => {
        expect(Mumbling("One")).toStrictEqual("O-Nn-Eee");
    });
    it("Abracadabra", () => {
        expect(Mumbling("Abracadabra")).toStrictEqual("A-Bb-Rrr-Aaaa-Ccccc-Aaaaaa-Ddddddd-Aaaaaaaa-Bbbbbbbbb-Rrrrrrrrrr-Aaaaaaaaaaa");
    });
});