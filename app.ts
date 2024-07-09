function printStarPattern(rows: number): void {
    let i: number = 1;
    while (i <= rows) {
        let j: number = 1;
        while (j <= i) {
            process.stdout.write("* ");
            j++;
        }
        process.stdout.write("\n");
        i++;
    }
}

// Example usage
const numberOfRows: number = 5;
printStarPattern(numberOfRows);





