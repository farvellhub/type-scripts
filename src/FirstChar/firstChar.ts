export default function FirstChar(word: string): string {
  let arr = word.toLowerCase().split("");

  return word[arr.findIndex((letter: string) => {
    return arr.filter((other: string) => {
      return letter === other;
    }).length === 1;
  })] || "";
}