function describe_city(nameofcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
var city1 = describe_city("karachi", "Pakistan");
var city2 = describe_city("india", "dehli");
var city3 = describe_city("Hyderabad", "Pakistan");
var city4 = describe_city("UAE", "dubai");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
