export default function RotatingMatrix(matrix: number[][]): number[][] {
    const result: number[][] = [];
    let temp: number[] = matrix[0];

    matrix.forEach((row, index) => {
        result[index] = matrix[index + 1];
        if (index === (row.length - 1)) result[index] = temp;
    });

    return result;
};