
// 16:More Guests: You just found a bigger dinner table, so now more space is
//  available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement 
// to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() 
// to add one new guest to the end of your list. • Print a new set of
//  invitation messages, one for each person in your list.

let guestlist:Array<string> =["fatima","Ailiya","yashab"];
for (let guest of guestlist){
console.log(`Hello ${guest}, we found a bigger dinner table`)
}
let newGuestAtBeginning:string ="zamal"
guestlist.unshift(newGuestAtBeginning)
console.log(guestlist)
let newGuestInMiddle:string ="warda"
let middleIndex:number=Math.floor(guestlist.length/2)
guestlist.splice(middleIndex,0,newGuestInMiddle)
console.log(guestlist)

let newGuestAtEnd:string ="arooba"
guestlist.push(newGuestAtEnd)
console.log(guestlist)

console.log("New set of invitation message:")

for (let guest of guestlist){
    console.log(`Dear ${guest}, you are invited to dinner`)
}
