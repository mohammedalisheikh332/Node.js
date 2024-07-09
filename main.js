"use strict";
var gobalvar = "Welcome To Pakistan";
function scope() {
    console.log(gobalvar);
}
scope();
//// Local VS Gobal scope.
// gobal scope
// gobal variable can accesable ever
var gobalvar = "25";
function gobal() {
}
console.log(gobalvar);
scope();
