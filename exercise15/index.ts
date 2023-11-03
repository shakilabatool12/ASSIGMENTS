

// 15:Changing Guest List: You just heard that one of your guests can’t
//  make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it
//  with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each 
// person who is still in your list.


let guestList:Array<string> =["fatima","Ailiya","saira","momina"];
let guestWhoCantMakeIt:string =  "Ailiya"
console.log(`${guestWhoCantMakeIt} cant make it to dinner`)

let newGuest:string="yashab"
let indexOfGuestWhoCanMakeIt:number = guestList.indexOf(guestWhoCantMakeIt)
if (indexOfGuestWhoCanMakeIt! ==-1){
    guestList[indexOfGuestWhoCanMakeIt]=newGuest
    console.log("second set of invitation message:")
    guestList.forEach((guest:string)=>{
        console.log(`dear ${guest}, you are invited to dinner`)
    })
}
//export{guestList}