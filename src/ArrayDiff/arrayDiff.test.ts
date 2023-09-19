import ArrayDiff from "./ArrayDiff";

describe("Difference between arrays", () => {
    it("Some", () => {
        expect(ArrayDiff([1, 2, 2, 1, 3, 3, 4], [1, 3])).toStrictEqual([2, 2, 4]);
    });

    it("Repeated", () => {
        expect(ArrayDiff([1, 2, 2, 1, 3, 3, 4], [1, 3, 1, 4])).toStrictEqual([2, 2]);
    });

    it("Long test", () => {
        expect(ArrayDiff([4, 5, 6, 7, 1, 4, 2, 3, 4, 1, 3], [1, 2])).toStrictEqual([4, 5, 6, 7, 4, 3, 4, 3]);
    });
});