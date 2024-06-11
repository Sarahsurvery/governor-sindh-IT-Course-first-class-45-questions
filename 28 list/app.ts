// stages of life: write an if-else chain that determines a person's stage
// set a value for the variable age, and then:
// If the person is less than 2 years onload, print a message that the person is a baby.
let age : number = 70;
if (age<2){
    console.log("the person is a baby");
}

// If the person atleast 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4){
console.log("the person is a toddler");
}

// If the person atleast 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13){
    console.log("the person is a kid");
    }

// If the person atleast 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20){
    console.log("the person is a tenager");
    }

// If the person atleast 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65){
    console.log("the person is a adult");
    }

// If the person is age 65 or older, print a message that the person is an elder,
else{
    console.log("the person is a elder");
    }