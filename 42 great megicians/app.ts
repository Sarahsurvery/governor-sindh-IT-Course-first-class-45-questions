let megicians: string[]=["don","raeez","ainak wala jin"];

function make_great(megicians:string[]){
    for(let i = 0; i< megicians.length; i++){
        megicians[i] = megicians[i] + " the great";
    }
}
make_great(megicians);
//show_megicians(megicians);