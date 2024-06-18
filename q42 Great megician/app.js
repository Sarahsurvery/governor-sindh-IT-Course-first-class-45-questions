var magician = ["don", "herry houdini", "die vernon", "sabir ali", "afzal afridi", "zia chohuan"];
function make_great(megician) {
    for (var i = 0; i < megician.length; i++) {
        megician[i] = megician[i] + " the great ";
        console.log(megician[i]);
        make_great(megician);
        console.log("the great ".concat(megician[i]));
    }
}
//show_megician(megician);
