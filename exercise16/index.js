// 16:More Guests: You just found a bigger dinner table, so now more space is
//  available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement 
// to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() 
// to add one new guest to the end of your list. • Print a new set of
//  invitation messages, one for each person in your list.
var guestlist = ["fatima", "Ailiya", "yashab"];
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Hello ".concat(guest, ", we found a bigger dinner table"));
}
var newGuestAtBeginning = "zamal";
guestlist.unshift(newGuestAtBeginning);
console.log(guestlist);
var newGuestInMiddle = "warda";
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, newGuestInMiddle);
console.log(guestlist);
var newGuestAtEnd = "arooba";
guestlist.push(newGuestAtEnd);
console.log(guestlist);
console.log("New set of invitation message:");
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
}
