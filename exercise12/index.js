// 12:Greetings: Start with the array you used in Exercise 11, but instead of
//  just printing each person’s name, print a message to them. The text of each
//  message should be the same, but each message should be personalized with the person’s name.
var friends = ["fatima", "zoya", "sara", "yashab"];
function printPersonMessage(friendList) {
    for (var _i = 0, friendList_1 = friendList; _i < friendList_1.length; _i++) {
        var friend = friendList_1[_i];
        console.log("Hello, ".concat(friend, "! Be HapPy"));
    }
}
printPersonMessage(friends);
