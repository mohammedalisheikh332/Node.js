"use strict";
function printReverseStarPattern(rows) {
    let i = rows;
    while (i >= 1) {
        let j = 1;
        while (j <= i) {
            process.stdout.write("* ");
            j++;
        }
        process.stdout.write("\n");
        i--;
    }
}
// Example usage
const numberOfRows = 5;
printReverseStarPattern(numberOfRows);
