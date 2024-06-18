var guest_list = ["faizan", "waniya", "hira", "bilal"];
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my party at home,\n thank you\n');
// }
var not_present = 'faizan';
var new_guest = 'bilal';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected friends ' + guest_list[i] + '\n please come to my party at home,\n thank you\n');
}
//console.log(`Mr. ${not_present} will not come tomorrow party`)
guest_list.unshift('sarah', 'umer', 'asiya');
for (var i = 0; i < guest_list.length; i++) {
    console.log(' Respected friends ' + guest_list[i] + '\n please come to my home, we celebrate eid festival, \n thank you\n');
}
