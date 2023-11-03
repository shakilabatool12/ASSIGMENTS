"use strict";
//Intentional Error: If you haven’t received an array index error in
//  one of your programs yet, try to make one happen. Change an 
// index in one of your programs to produce an index error. Make sure
//  you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
function createFruit(name, colour, taste) {
    return {
        name: name,
        colour: colour,
        taste: taste,
    };
}
var fruits = [
    createFruit("Apple", "red", "sweet"),
    createFruit("Banana", "yellow", "sweet"),
    createFruit("Orange", "Orange", "sour"),
    createFruit("stawberry", "red", "sweet"),
];
var invalidIndex = 10;
console.log("fruit at index ".concat(invalidIndex, ":"), fruits[invalidIndex]);
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ",colour:").concat(fruit.colour, ",taste:").concat(fruit.taste));
});
