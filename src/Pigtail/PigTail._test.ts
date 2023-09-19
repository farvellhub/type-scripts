import PigTail from "./PigTail";

describe("Pig latin dictionary  ", () => {
    it("First", () => {
        expect(PigTail("Pig latin is cool")).toStrictEqual("igPay atinlay siay oolcay");
    });
    it("Second", () => {
        expect(PigTail("This is my string")).toStrictEqual("hisTay siay ymay tringsay");
    });
});