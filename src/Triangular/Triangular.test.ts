import Triangular from "./Triangular";

describe("Tringular numbers", () => {
    it("Two", () => {
        expect(Triangular(2)).toStrictEqual(3);
    });
    it("Four", () => {
        expect(Triangular(4)).toStrictEqual(10);
    });
    it("Negative", () => {
        expect(Triangular(-454)).toStrictEqual(0);
    });
});