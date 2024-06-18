function my_Album (artistname: string, albumtitle: string){
    return{artistname, albumtitle}
}

let Album1 = my_Album("Ali", "Rang-e-mohabbat");
let Album2 = my_Album("Madad", "Roshan Andhera");
let Album3 = my_Album("Ayaz", "Mausam-e-Dil");

console.log(Album1);
console.log(Album2);
console.log(Album3);

function my_Album2 (artistname: string, albumtitle: string, numberoftracks?: number){
    return{artistname, albumtitle, numberoftracks}
}

let Album4 = my_Album2("Ali", "Rang-e-mohabbat", 32);
let Album5 = my_Album2("Madad", "Roshan Andhera", 45);
let Album6 = my_Album2("Ayaz", "Mausam-e-Dil");

console.log(Album4);
console.log(Album5);
console.log(Album6);
