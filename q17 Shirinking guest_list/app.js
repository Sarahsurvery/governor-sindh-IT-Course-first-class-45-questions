var guest_list = ["faizan", "waniya", "hira", "bilal"];
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my party at home,\n thank you\n');
// }
var not_present = 'faizan';
var new_guest = 'bilal';
guest_list[2] = new_guest;
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my party at home,\n thank you\n');
// }
//console.log(`Mr. ${not_present} will not come tomorrow party`)
guest_list.unshift('sarah', 'umer', 'asiya');
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my home, we celebrate eid festival, \n thank you\n');
// }
console.log("\n unfortunately we cannot celebrate eid festival");
while (guest_list.length) {
    var remove_guest = guest_list.pop();
    console.log(" Sorry friends . ".concat(remove_guest, " you nor not invited."));
    for (var i = 0; i < guest_list.length; i++) {
        console.log(' Respected friends ' + guest_list[i] + '\n please come to my home, we celebrate eid festival, \n thank you\n');
    }
}
guest_list.splice(1, 3);
console.log(guest_list);
