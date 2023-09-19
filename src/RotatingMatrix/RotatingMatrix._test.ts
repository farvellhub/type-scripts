import RotatingMatrix from "./RotatingMatrix";

describe("Rotate a matrix", () => {
    it("Test", () => {
        expect(RotatingMatrix([
            [1.6, 1.7, 1.4, 1.2],
            [1.4, 1.5, 1.4, 1.1],
            [0.9, -1, 0.7, -1],
            [0.7, 1, 0.7, 0.9]
        ])).toStrictEqual([
            [0.7, 0.9, 1.4, 1.6],
            [1, -1, 1.5, 1.7],
            [0.7, 0.7, 1.4, 1.4],
            [0.9, -1, 1.1, 1.2]
        ]);
    });
});