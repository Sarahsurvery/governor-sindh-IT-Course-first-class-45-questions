let megicians: string[]=["Alice","David","Chris"];

function make_great(megicians:string[]): string[] {
    let greatmegicians = [];
    megicians.forEach(megicians => {
        greatmegicians.push[`${megicians} the great`];
    });
    return greatmegicians;
}

let greatmegicians = make_great(megicians.slice());
console.log("original megicians:");
//show_megicians(megicians);
console.log("great megicians:");
//show_megicians(greatmegicians);
    