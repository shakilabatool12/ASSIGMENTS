//They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
var item1 = {
    name: "Book",
    quantity: 10
};
var item2 = {
    name: "Pen",
    quantity: 50
};
var item3 = {
    name: "Notebook",
    quantity: 20
};
var itemObjects = [item1, item2, item3];
console.log("Objects containing items:");
itemObjects.forEach(function (item, index) {
    console.log("Object ".concat(index + 1, ":"), item);
});
