import SelectionSort from "./SelectionSort";


describe("Selection Sort", () => {
    it("Simple test", () => {
        expect(SelectionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
    });
    it("One thing", () => {
        expect(SelectionSort([0])).toStrictEqual([0]);
    });
    it("complete", () => {
        expect(SelectionSort([8, 5, 2, 4, 9, 3, 0, 1, 6, 7])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});