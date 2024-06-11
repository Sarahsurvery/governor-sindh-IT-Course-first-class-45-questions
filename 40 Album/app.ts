function myAlbum(artistname: string, Albumtitle: string){
    return{artistname, Albumtitle}
}

let album1 = myAlbum ("sarah", "dard-e-dil");
let album2 = myAlbum ("Faizan", "Agaz_E_Dosti");
let album3 = myAlbum ("hira", "mausam_e_dil");

console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistname: string, Albumtitle: string, numberoftracks?: number){
    return{artistname, Albumtitle, numberoftracks}
}

let album4 = myAlbum2 ("Faizan", "Rang_e_mohabbat", 33);
let album5 = myAlbum2 ("bilal", "roshan Andhera", 45);
let album6 = myAlbum2 ("hira", "typescript ki coding");

console.log(album4);
console.log(album5);
console.log(album6);

