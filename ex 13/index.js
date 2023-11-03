// 13:Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several
//  examples. Use your list to print a series of statements about these
//  items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = [];
favoriteTransportation.push(["motorcycle", "honda"]);
favoriteTransportation.push(["car", "toyota"]);
favoriteTransportation.push(["bicycle", "honda"]);
favoriteTransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log(" I would liked to own a ".concat(brand, " ").concat(transport));
});
