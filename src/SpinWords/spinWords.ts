export default function SpinWords(phrase: string) {
  return phrase.split(" ").map((word: string) => {
    return (word.length > 4)
      ? word.split("").reverse().join("")
      : word;
  }).join(" ");
}