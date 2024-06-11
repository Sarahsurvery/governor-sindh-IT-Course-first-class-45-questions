let cars : string = 'civic';

//Test 1 : Equality comparison (True)
console.log("is cars == 'civic' ? I think True.")
console.log(cars == 'civic');//True

//Test 2 : strict equality comparison (True)
console.log("Is cars === 'civic' ? I think true.")
console.log(cars === 'civic');//True

//Test 3 : inequality comparison ( false)
console.log("Is cars != 'civic'? I think false.")
console.log(cars != 'civic');//false

//Test 4 : strict equality comparison (False)
console.log("Is cars !== 'civic' ? I think false.")
console.log(cars !== 'civic');//False

//Test 5 : less than comparison (False)
console.log("Is cars < 'civic' ? I think false.")
console.log(cars < 'civic');//False (lexicographic comparison)

//Test 6 : greater than comparison (False)
console.log("Is cars > 'civic' ? I think false.")
console.log(cars > 'civic');//False (lexicographic comparison)

//Test 7 : less than or equal comparison (true)
console.log("Is cars <= 'civic' ? I think true.")
console.log(cars <= 'civic');//True

//Test 8 : greater than or equal comparison (True)
console.log("Is cars >= 'civic' ? I think true.")
console.log(cars >= 'civic');//true

//Test 9 : checking truthiness(True)
console.log("Is cars ?  I think true.")
console.log(cars);//true (non-empty string is truthy)

//Test 10 : checking falsiness (False)
console.log("Is !cars? I think false.")
console.log(!cars);//False (negation of atruthy value)






