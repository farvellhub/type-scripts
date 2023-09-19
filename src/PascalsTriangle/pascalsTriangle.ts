export default function PascalTriangle(lines: number): number[][] {
    const triangle: number[][] = [];
    let currentLine: number[] = [1];
    triangle.push(currentLine);

    if (lines <= 1) return triangle;

    for (let line = 1; line <= lines; line++) {
        const nextLine: number[] = [];
        nextLine[0] = 1;
        nextLine[line] = 1;

        for (let index = 1; index < line; index++)
            nextLine[index] = currentLine[index - 1] + currentLine[index];

        currentLine = nextLine;
        triangle.push(currentLine);
    }

    return triangle;
}