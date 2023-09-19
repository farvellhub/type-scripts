import SpinWords from "./SpinWords";

describe("Spinning words", () => {
    it("Hi", () => {
        expect(SpinWords("Hi")).toStrictEqual("Hi");
    });
    it("One thing", () => {
        expect(SpinWords("One thing")).toStrictEqual("One gniht");
    });
    it("Abracadabra", () => {
        expect(SpinWords("Abracadabra")).toStrictEqual("arbadacarbA");
    });
});