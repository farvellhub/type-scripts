const pascalTriangle = ( lines: number ) => {
    const triangle: Array<Array<number>> = [];
    let currentLine: Array<number> = [1];
    triangle.push( currentLine );
    
    if ( lines <= 1 ) return triangle;

    for ( let i = 1; i <= lines; i++ ) {
        const nextLine = [];
        nextLine[0] = 1;
        nextLine[i] = 1;

        for ( let j = 1; j < i; j++ )
            nextLine[j] = currentLine[j-1] + currentLine[j];
        
        currentLine = nextLine;
        triangle.push( currentLine );
    }

    return triangle;
};

export default pascalTriangle;