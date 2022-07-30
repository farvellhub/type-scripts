type Matrix = Array<number[]>;

const matrix: Matrix = [
    [1.6, 1.7, 1.4, 1.2],
    [1.4, 1.5, 1.4, 1.1],
    [0.9, -1, 0.7, -1],
    [0.7, 1, 0.7, 0.9]
];

const rotatingMatrix = ( matrix: Matrix ): Matrix => {
    const result: Matrix = [];
    let temp: number[] = matrix[0];

    matrix.forEach(( row, index ) => {
        result[ index ] = matrix[ index + 1 ]

        if ( index === ( row.length - 1 ) ) {
            result[ index ] = temp;
        }
    });

    return result;
};  

console.log( rotatingMatrix( matrix ) );