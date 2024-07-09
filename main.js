"use strict";
// Example of a for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// Example of a reverse for loop
for (let i = 4; i >= 0; i--) {
    console.log(i); // Output: 4, 3, 2, 1, 0
}
let arrays = [10, 20, 30, 40, 50];
// Iterate over the array elements
for (let i = 0; i < arrays.length; i++) {
    console.log(arrays[i]); // Output: 10, 20, 30, 40, 50
}
// Reverse loop over the array elements
for (let i = arrays.length - 1; i >= 0; i--) {
    console.log(arrays[i]); // Output: 50, 40, 30, 20, 10
}
let array = [10, 20, 30, 40, 50];
// Using for...of to iterate forward
for (let num of array) {
    console.log(num); // Output: 10, 20, 30, 40, 50
}
// Reverse iteration using for...of (not directly supported, but can be achieved with reverse array)
for (let num of array.reverse()) {
    console.log(num); // Output: 50, 40, 30, 20, 10
}
