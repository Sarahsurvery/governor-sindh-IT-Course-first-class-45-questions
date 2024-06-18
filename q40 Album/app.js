function my_Album(artistname, albumtitle) {
    return { artistname: artistname, albumtitle: albumtitle };
}
var Album1 = my_Album("Ali", "Rang-e-mohabbat");
var Album2 = my_Album("Madad", "Roshan Andhera");
var Album3 = my_Album("Ayaz", "Mausam-e-Dil");
console.log(Album1);
console.log(Album2);
console.log(Album3);
function my_Album2(artistname, albumtitle, numberoftracks) {
    return { artistname: artistname, albumtitle: albumtitle, numberoftracks: numberoftracks };
}
var Album4 = my_Album2("Ali", "Rang-e-mohabbat", 32);
var Album5 = my_Album2("Madad", "Roshan Andhera", 45);
var Album6 = my_Album2("Ayaz", "Mausam-e-Dil");
console.log(Album4);
console.log(Album5);
console.log(Album6);
