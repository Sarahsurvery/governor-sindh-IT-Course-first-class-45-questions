function describe_city(nameofcity: string, country: string = "Pakistan"){
    return `${nameofcity} is in ${country}`
};

let city1 = describe_city ("Pakistan, Karachi");
let city2 = describe_city ("Pakistan, Hyderabad");
let city3 = describe_city ("Punjab, Lahore");
let city4 = describe_city ("Peshawar, Quetta");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);