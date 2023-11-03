"use strict";
// 15:Changing Guest List: You just heard that one of your guests can’t
//  make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// • Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it
//  with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each 
// person who is still in your list.
var guestList = ["fatima", "Ailiya", "saira", "momina"];
exports.guestList = guestList;
var guestWhoCantMakeIt = "Ailiya";
console.log("".concat(guestWhoCantMakeIt, " cant make it to dinner"));
var newGuest = "yashab";
var indexOfGuestWhoCanMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCanMakeIt == -1) {
    guestList[indexOfGuestWhoCanMakeIt] = newGuest;
    console.log("second set of invitation message:");
    guestList.forEach(function (guest) {
        console.log("dear ".concat(guest, ", you are invited to dinner"));
    });
}
