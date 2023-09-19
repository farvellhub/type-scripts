export default function Factorial(factNumber: number): string {
    if (!factNumber) return "";
    if (factNumber === 0) return "1";

    const result = factNumber
        .toString()
        .split("")
        .map((value: string) => Number(value));

    let amount: number, index: number, next: number;

    while (--factNumber) {
        index = result.length - 1;
        amount = 0;

        while ((next = result[index--]) !== undefined || amount) {
            amount += ((next || 0) * factNumber);

            if (index < -1) {
                result.unshift(amount % 10);
            } else { result[index + 1] = amount % 10; }

            amount = Math.floor(amount / 10);
        }
    }

    return result.join("");
};