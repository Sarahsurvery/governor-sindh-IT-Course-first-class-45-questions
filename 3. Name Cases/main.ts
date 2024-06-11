let myName : string = "Developer Sarah";

//print lowercase

console.log(`lowercase: ${myName.toLowerCase()}`);

//print Uppercase

console.log(`uppercase: ${myName.toUpperCase()}`);

//print titlecase

console.log(`titlecase: ${myName.replace(/\b\w/g,c=> c.toUpperCase())}`);

