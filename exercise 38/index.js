//38: 
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown country"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("lahore", 'pakistan');
describe_city("newyork");
describe_city("baghdad", "Iraq");
