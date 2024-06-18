let car : string = "civic";
let age : number = 32;
let numbers: number[] = [6,5,4,3,2,1];


//**string test**
//test: 1 comparison true
console.log("Is cars == corolla'? I predict true");
console.log(car == 'civic'); //true (case-insensitive)
//console.log(cars == 'suzuki'); //false

//test: 2 strict equality comparison
console.log("Is cars === corolla'? I predict false");
console.log(car === 'corolla'); //false (case-sensitive)

//test :3 inequality comparison
console.log("Is cars != 'civic'? I predict true");
console.log(car != 'civic'); //true

//test: 4 strict inequality
console.log("Is cars !== corolla'? I predict false");
console.log(car !== 'corolla'); //false (case-sensitive)


//**lowercase function test**

//test: 5 lpwercase conversion
console.log("Is car.tolowercase() == 'corolla'? I predict true");
console.log(car.toLowerCase() == 'corolla'); //true (converted to lowercase)

//test: 6 lowercase conversion false
console.log("Is car === car.tolowercase()? I predict false");
console.log(car === car.toLowerCase()); //false (original value remains uppercase)


//**numerical test**

//test: 7 equality true
console.log("Is age == 32? I predict true");
console.log(age == 32); //true

//test: 8 inequality false
console.log("Is age != 35? I predict true");
console.log(age != 35); //true

//test: 9 greater than false 
console.log("Is age > 35? I predict false");
console.log(age > 35); //true

//test:10 less than or equal (true)
console.log("Is age <= 32? I predict true");
console.log(age <= 32); //true

//test: 11 and (true)
console.log("Is age > 32 && age < 35? I predict true");
console.log(age > 32 && age < 35); //true (both condition met)

//test: 12 OR (false)
console.log("Is age > 32 || age < 20? I predict false");
console.log(age > 32 || age < 20); //false (neither condition met)

//**array test**
//test: 13 in array
console.log("Is 5 in numbers? I predict true");
console.log(5 in numbers); //true (checks for index existance)

//test: 14 not in array (false)
console.log("Is 4 not in numbers? I predict true");
console.log(4 not in numbers); //true (negation of "in" operator)


