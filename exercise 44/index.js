//44:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich summary:");
    if (items.length === 0) {
        console.log("    -you ordered an empty sandwich.Please add some items.");
    }
    else {
        items.forEach(function (item, i) {
            console.log(" ".concat(i + 1, ". ").concat(item));
        });
    }
    console.log("\n");
}
makeSandwich();
makeSandwich("Turkey", "Lettuce", "Mayonise", "Tomato");
makeSandwich("chese", "ham");
makeSandwich("jelly", "Honey", "banana", "Butter");
