let car: string  ='corolla';
let age : number = 22;
let numbers : number[] =[1, 2, 3, 4];













//string test**

//test 1: equality (True)
console.log("is car == 'corolla' ? I think true.")
console.log(car =='corolla'); // True (case-insensitive)

//Test 2: strict equality (False)
console.log("is car === 'corolla' ? I think false.")
console.log(car ==='corolla'); // False (case-sensitive)

//test 3: Inequality (True)
console.log("is car != 'mazda' ? I think true.")
console.log(car !='mazda'); // True 

//Test 4: Inequality (False)
console.log("is car !== 'civic' ? I think false.")
console.log(car !=='civic'); // False (case-sensitive)






//** lowercase function test**

//Test 5: lowercase conversion (True)
console.log("Is car.tolowercase() == 'civic'? I think true.");
console.log(car.toLowerCase() == 'civic'); // true (converted to lowercase)

//Test 6: lowercase conversion (False)
console.log("Is car.tolowercase() === 'civic'? I think false.");
console.log(car.toLowerCase() === 'civic'); // false (original value remains uppercase)

//** numerical Test**

//Test 7: equality (True)
console.log("Is age == 22? I think true.");
console.log(age == 22); // true

//Test 8: inequality (False)
console.log("Is age != 28? I think True.");
console.log(age != 28); // true

//Test 9: greater than (False)
console.log("Is age > 28? I think False.");
console.log(age > 28); // false

//Test 10: less than (True)
console.log("Is age <= 28? I think True.");
console.log(age <= 28); // true

// **Logical Operator**
//Test 11: AND (True)
console.log("is age > 22 && age < 28? I think true.");
console.log(age > 22 && age < 28); // true ( both condition met)

//Test 12: OR (False)
console.log("is age > 28 || age < 28? I think false.");
console.log(age > 28 || age < 28); // false ( neither condition met)

// **Array Test**
//Test 13: In array (True)
console.log("Is 3 in numbers? I think true.");
console.log(3 in numbers); // true ( check for index existance)

//Test 14: Not in array (False)
console.log("Is 5 not in numbers? I think true.");
console.log(3 not in numbers); // true ( negation of "in" operator)







