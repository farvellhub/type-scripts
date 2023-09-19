import SeriesSum from "./SeriesSum";

describe("Sum a serie of N numbers", () => {
    it("Zero", () => {
        expect(SeriesSum(0)).toStrictEqual("0.00");
    });
    it("One", () => {
        expect(SeriesSum(1)).toStrictEqual("1.00");
    });
    it("Two", () => {
        expect(SeriesSum(2)).toStrictEqual("1.25");
    });
    it("Three", () => {
        expect(SeriesSum(3)).toStrictEqual("1.39");
    });
    it("Four", () => {
        expect(SeriesSum(4)).toStrictEqual("1.49");
    });
});