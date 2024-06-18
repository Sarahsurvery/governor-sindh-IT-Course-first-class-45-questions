var cars = "corolla";
//comparison true
console.log("Is cars == corolla'? I predict true");
console.log(cars == 'corolla'); //true
//console.log(cars == 'suzuki'); //false
//test: 2 equality comparison
console.log("Is cars === corolla'? I predict true");
console.log(cars === 'corolla'); //true
//test :3 inequality comparison
console.log("Is cars != corolla'? I predict false");
console.log(cars != 'corolla'); //
//test: 4 strict inequality
console.log("Is cars !== corolla'? I predict false");
console.log(cars !== 'corolla'); //false
//test: 5 less than comparison
console.log("Is cars < corolla'? I predict false");
console.log(cars < 'corolla'); //false
//test: 6 greater than comparison
console.log("Is cars > corolla'? I predict false");
console.log(cars > 'corolla'); //false (lexicographic comparison)
//test: 7 less than or equal comparison
console.log("Is cars <= corolla'? I predict true");
console.log(cars <= 'corolla'); //true
//test: 8 greater than or equal comparison
console.log("Is cars >= corolla'? I predict true");
console.log(cars >= 'corolla'); //true
//test: 9 checking truthiness 
console.log("Is cars? I predict true");
console.log(cars); //true (non-empty string is truthy)
//test:10 checking falsiness
console.log("Is cars? I predict false");
console.log(cars); //false (negation of a truthy value)
