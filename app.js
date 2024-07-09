"use strict";
function printStarPattern(rows) {
    let i = 1;
    while (i <= rows) {
        let j = 1;
        while (j <= i) {
            process.stdout.write("* ");
            j++;
        }
        process.stdout.write("\n");
        i++;
    }
}
// Example usage
const numberOfRows = 5;
printStarPattern(numberOfRows);
