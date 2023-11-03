// Favorite Fruit: Make a array of your favorite fruits, and then 
// write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit 
// is in your array. If the fruit is in your array, the if block should print a 
// statement, such as You really like bananas!

const favorite_Fruits:string[]= ["apple","banana","mango"];

if(favorite_Fruits.includes("apple")){
    console.log("Apples give us energy!");
}
if (favorite_Fruits.includes("banana")){
    console.log("I Like Bananas!");
}
if (favorite_Fruits.includes("orange")){
    console.log("oranges are tasty!");
}
if (favorite_Fruits.includes("mango")){
    console.log("mangoes are one of my favorite fruit!");
}
if (favorite_Fruits.includes("grapes")){
    console.log("I Like grapes too!");
}
