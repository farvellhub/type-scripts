import FizzBuzz from "./FizzBuzz";

describe("Fizz Buzz", () => {
    it("Zero", () => {
        expect(FizzBuzz(0)).toStrictEqual([]);
    });
    it("One", () => {
        expect(FizzBuzz(1)).toStrictEqual(["0"]);
    });
    it("10", () => {
        expect(FizzBuzz(10)).toStrictEqual(["0", "1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz"]);
    });
    it("FizzBuzz", () => {
        expect(FizzBuzz(16)).toStrictEqual(["0", "1", "2", "fizz", "4", "buzz", "fizz", "7", "8", "fizz", "buzz", "11", "fizz", "13", "14", "fizzbuzz"]);
    });
});