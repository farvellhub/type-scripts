import DeleteNth from "./DeleteNth";

describe("Delete repeated elements", () => {
    it("One", () => {
        expect(DeleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
    });
    it("Three", () => {
        expect(DeleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toStrictEqual([1, 1, 3, 3, 7, 2, 2, 2]);
    });
});