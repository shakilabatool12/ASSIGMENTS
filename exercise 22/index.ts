//Intentional Error: If you haven’t received an array index error in
//  one of your programs yet, try to make one happen. Change an 
// index in one of your programs to produce an index error. Make sure
//  you correct the error before closing the program.

function createFruit(name:string,colour:string,taste:string){
    return{
        name,
        colour,
        taste,
    };
}

const fruits = [
 createFruit("Apple","red","sweet"),
 createFruit("Banana","yellow","sweet"),
 createFruit("Orange","Orange","sour"),
 createFruit("stawberry","red","sweet"),
]
const invalidIndex = 10;

console.log(`fruit at index ${invalidIndex}:`,fruits [invalidIndex]);

fruits.forEach((fruit)=>{
    console.log(`Name: ${fruit.name},colour:${fruit.colour},taste:${fruit.taste}`)
});

export{}