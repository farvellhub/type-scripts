import MoveZeros from "./MoveZeros";

describe("Move the zeros", () => {
    it("Zero", () => {
        expect(MoveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    });
});