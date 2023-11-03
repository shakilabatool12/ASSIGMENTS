//24:
var str1 = "Hello";
var str2 = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
var text1 = "Hello World";
var text2 = "hello world";
console.log(text1.toLowerCase() === text2);
var num1 = 10;
var num2 = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 < num2);
var x = 5;
var y = 10;
var z = 20;
console.log(x < y || y < z); //false
console.log(x < y || y > x); //true
console.log(y > z || z < x); //false
console.log(y < z || x < y); //true
var fruits = ['Apple', 'banana', 'mango', 'grapes'];
console.log(fruits.includes('banana'));
console.log(fruits.includes('kiwi'));
var colours = ['yellow', 'blue', 'green', 'red'];
console.log(!colours.includes('grey'));
console.log(!colours.includes('yellow'));
