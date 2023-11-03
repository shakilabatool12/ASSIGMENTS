//24:






const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); 
console.log(str1 !== str2);

const text1: string = "Hello World";
const text2: string = "hello world";
console.log(text1.toLowerCase() === text2);

const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 < num2);

const x: number = 5;
const y: number = 10;
const z: number = 20;

console.log(x < y || y < z) //false
console.log(x < y || y > x) //true
console.log( y > z || z < x)//false
console.log( y < z || x < y)//true

const fruits: string[] = ['Apple', 'banana','mango','grapes'];

console.log(fruits.includes('banana'));
console.log(fruits.includes('kiwi'));

const colours: string[] = ['yellow', 'blue', 'green', 'red'];

console.log(!colours.includes('grey'));
console.log(!colours.includes('yellow'));

