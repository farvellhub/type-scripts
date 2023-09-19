export default function Triangular(result: number) {
  return (result > 0)
    ? result * (result + 1) / 2
    : 0;
}