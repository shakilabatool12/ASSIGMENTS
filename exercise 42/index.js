//42:
var magicianNames = ["Harry potter", "Malfoy", "Hermione granger", "Dumledore", "Ron wasley"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicianNames);
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
var greatMagicianNames = make_great(magicianNames);
console.log(" Original Magicians:");
show_magicians(greatMagicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
