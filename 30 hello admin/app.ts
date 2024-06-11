let users : string [] = ['faizan', 'hira', 'bilal','admin']

for (let user of users){
   if (user === "admin"){
    console.log("hello admin, would u like to apple?")
}

else{
    console.log(`hello ${user},'thank u so much'`)
}
}