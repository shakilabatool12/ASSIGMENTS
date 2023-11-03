
// 18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order 
// of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array
// to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.

let travelDestinations:string[]=["tokyo","paris","turkey","madina","swizerland"]

console.log("Original order")
console.log(travelDestinations)

console.log("\n Alphabetical order without modifiying the actual list")
console.log([...travelDestinations].sort())

console.log("\n showing array is still in its original order")
console.log(travelDestinations)

console.log("\n Reverse Alphabetical order without modifying the actual list")
console.log([...travelDestinations].sort().reverse())

console.log("\n showing array is still in its original order")
console.log(travelDestinations)

console.log("\n Reverse order")
travelDestinations.reverse()
console.log(travelDestinations)

console.log("\n Back to original")
travelDestinations.reverse()
console.log(travelDestinations)

console.log("\n change to Albhabetical order")
travelDestinations.sort()
console.log(travelDestinations)

console.log("\n change to reverse Albhabetical order")
travelDestinations.sort().reverse()
console.log(travelDestinations)



// 20:Think of something you could store in a array.
//  For example, you could make a list of mountains, rivers, countries,
//  cities, languages, or anything else you’d like. Write a program that 
// creates a list containing these items.

const languages:string[]=["English","urdu","pashto","balochi","punjabi","sindhi"];
console.log("list of languages:")
for (let i of languages){
    console.log(i)
}



