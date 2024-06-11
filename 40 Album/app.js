function myAlbum(artistname, Albumtitle) {
    return { artistname: artistname, Albumtitle: Albumtitle };
}
var album1 = myAlbum("sarah", "dard-e-dil");
var album2 = myAlbum("Faizan", "Agaz_E_Dosti");
var album3 = myAlbum("hira", "mausam_e_dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistname, Albumtitle, numberoftracks) {
    return { artistname: artistname, Albumtitle: Albumtitle, numberoftracks: numberoftracks };
}
var album4 = myAlbum2("Faizan", "Rang_e_mohabbat", 33);
var album5 = myAlbum2("bilal", "roshan Andhera", 45);
var album6 = myAlbum2("hira", "typescrit ki coding");
console.log(album4);
console.log(album5);
console.log(album6);
