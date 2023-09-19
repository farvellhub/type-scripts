import Tribonacci from "./Tribonacci";

describe("Tribonacci series", () => {
    it("Zero zero zero", () => {
        expect(Tribonacci([0, 0, 0], 10)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    it("One one one", () => {
        expect(Tribonacci([1, 1, 1], 10)).toStrictEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
    });
    it("Zero One One", () => {
        expect(Tribonacci([0, 0, 1], 10)).toStrictEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
    });
    it("Zero One One", () => {
        expect(Tribonacci([0, 1, 1], 10)).toStrictEqual([0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
    });
    it("One zero zero", () => {
        expect(Tribonacci([1, 0, 0], 10)).toStrictEqual([1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
    });

    it("One two three", () => {
        expect(Tribonacci([1, 2, 3], 10)).toStrictEqual([1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
    });
    it("Three two one", () => {
        expect(Tribonacci([3, 2, 1], 10)).toStrictEqual([3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
    });
    it("One step", () => {
        expect(Tribonacci([1, 1, 1], 1)).toStrictEqual([1]);
    });
    it("Zero steps", () => {
        expect(Tribonacci([300, 200, 100], 0)).toStrictEqual([]);
    });
    it("Floating", () => {
        expect(Tribonacci([0.5, 0.5, 0.5], 30)).toStrictEqual([0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5]);
    });
});