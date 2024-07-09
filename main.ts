function printReverseStarPattern(rows: number): void {
    let i: number = rows;
    while (i >= 1) {
        let j: number = 1;
        while (j <= i) {
            process.stdout.write("* ");
            j++;
        }
        process.stdout.write("\n");
        i--;
    }
}

// Example usage
const numberOfRows: number = 5;
printReverseStarPattern(numberOfRows);
