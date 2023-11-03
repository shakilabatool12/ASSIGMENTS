"use strict";
// 14:Guest List: If you could invite anyone, living or deceased, 
// to dinner, who would you invite? Make a list that includes at
//  least three people you’d like to invite to dinner. Then use your
//  list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList = ["Sara", "Ailiya", "Rida", "fatima"];
exports.guestList = guestList;
guestList.forEach(function (guestName) {
    console.log("Dear ".concat(guestName, ", you are invited to dinner today...please join us."));
});
