import FirstChar from "./FirstChar";

describe("First non-repeating char", () => {
    it("First", () => {
        expect(FirstChar("a")).toStrictEqual("a");
    });
    it("Second", () => {
        expect(FirstChar("stress")).toStrictEqual("t");
    });
    it("Third", () => {
        expect(FirstChar("moonmen")).toStrictEqual("e");
    });
});