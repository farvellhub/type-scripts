export default function Vowels(chain: string): number {
    return chain.toLowerCase().split("").filter((value) => {
        return ["a", "e", "i", "o", "u"].includes(value);
    }).length;
}