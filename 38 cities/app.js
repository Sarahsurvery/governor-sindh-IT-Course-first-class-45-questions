function describe_city(nameofcity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
;
var city1 = describe_city("Pakistan, Karachi");
var city2 = describe_city("Pakistan, Hyderabad");
var city3 = describe_city("Punjab, Lahore");
var city4 = describe_city("Peshawar, Quetta");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
