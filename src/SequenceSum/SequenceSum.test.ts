import SequenceSum from "./SequenceSum";

describe("Sum a sequence of N numbers", () => {
    it("Little one", () => {
        expect(SequenceSum(2, 6, 2)).toStrictEqual(12);
    });
    it("Little two", () => {
        expect(SequenceSum(1, 5, 1)).toStrictEqual(15);
    });
    it("Little three", () => {
        expect(SequenceSum(1, 5, 3)).toStrictEqual(5);
    });
    it("Zero", () => {
        expect(SequenceSum(16, 15, 3)).toStrictEqual(0);
    });
    it("Negative one", () => {
        expect(SequenceSum(-24, -2, 22)).toStrictEqual(-26);
    });
    it("Negative two", () => {
        expect(SequenceSum(-2, 4, 658)).toStrictEqual(-2);
    });
    it("Large one", () => {
        expect(SequenceSum(780, 68515438, 5)).toStrictEqual(469436517521190);
    });
    it("Large two", () => {
        expect(SequenceSum(9383, 71418, 2)).toStrictEqual(1253127200);
    });
    it("Large three", () => {
        expect(SequenceSum(20, 67338879, 5)).toStrictEqual(453452442295970);
    });
});