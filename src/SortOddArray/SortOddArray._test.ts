import SortOddArray from "./SortOddArray";

describe("Odd sorting method", () => {
    it("Complete", () => {
        expect(SortOddArray([5, 3, 2, 8, 1, 4])).toStrictEqual([1, 3, 2, 8, 5, 4]);
    });
    it("Zero", () => {
        expect(SortOddArray([5, 3, 1, 8, 0])).toStrictEqual([1, 3, 5, 8, 0]);
    });
    it("Void", () => {
        expect(SortOddArray([])).toStrictEqual([]);
    });
});