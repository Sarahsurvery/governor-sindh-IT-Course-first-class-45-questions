function city_country(city, country) {
    //return ` "${city}, ${country}"
    console.log("\"".concat(city, ", ").concat(country, "\""));
}
city_country("Karachi", "Pakistan");
var mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("london", "UK"));
console.log(city_country("Makkah", "SaudiArabia"));
