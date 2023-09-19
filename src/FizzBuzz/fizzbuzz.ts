export default function FizzBuzz(size: number): string[] {
    return [...Array(size).keys()].map((value: number) => {
        if (value === 0) return `${value}`;
        if (value % 3 === 0 && value % 5 === 0) return "fizzbuzz";
        if (value % 3 === 0) return "fizz";
        if (value % 5 === 0) return "buzz";

        return `${value}`;
    });
};