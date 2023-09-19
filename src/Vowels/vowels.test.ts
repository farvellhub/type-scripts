import Vowels from "./Vowels";

describe("Count vowels", () => {
    it("Hi", () => {
        expect(Vowels("Hi")).toStrictEqual(1);
    });
    it("One", () => {
        expect(Vowels("One")).toStrictEqual(2);
    });
    it("Abracadabra", () => {
        expect(Vowels("Abracadabra")).toStrictEqual(5);
    });
    it("Too long phrase that we count all chars in.", () => {
        expect(Vowels("Too long phrase that we count all chars in.")).toStrictEqual(12);
    });
});