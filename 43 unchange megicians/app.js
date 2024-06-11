var megicians = ["Alice", "David", "Chris"];
function make_great(megicians) {
    var greatmegicians = [];
    megicians.forEach(function (megicians) {
        greatmegicians.push["".concat(megicians, " the great")];
    });
    return greatmegicians;
}
var greatmegicians = make_great(megicians.slice());
console.log("original megicians:");
//show_megicians(megicians);
console.log("great megicians:");
//show_megicians(greatmegicians);
