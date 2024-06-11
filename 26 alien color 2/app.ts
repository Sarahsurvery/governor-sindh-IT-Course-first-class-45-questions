// choose a color for an alien as you
//did in exercise 25, and write an if-else chain.
let alien_color: string = "red";

// If the alien's color is red, print a statement that 
//the player just earned 5 points for shooting the alien.
if (alien_color == "red"){
    console.log("the player just earned 5 points for shooting the alien.");
}
else{
    console.log("the player just earned 10 points.");
}
alien_color ="green";
if (alien_color == "red"){
    console.log("the player just earned 5 points for shooting the alien.");
}