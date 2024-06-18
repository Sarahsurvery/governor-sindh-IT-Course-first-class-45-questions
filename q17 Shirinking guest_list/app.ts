let guest_list: string []=["faizan","waniya","hira","bilal"];
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my party at home,\n thank you\n');
// }

let not_present: string = 'faizan';
let new_guest: string = 'bilal';
guest_list[2] =new_guest;
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my party at home,\n thank you\n');
// }
//console.log(`Mr. ${not_present} will not come tomorrow party`)

guest_list.unshift('sarah','umer','asiya');
// for (let i =0; i < guest_list.length; i++){
//     console.log(' Respected friends ' + guest_list[i]+'\n please come to my home, we celebrate eid festival, \n thank you\n');
// }
console.log(`\n unfortunately we cannot celebrate eid festival`);
while(guest_list.length){
    let remove_guest = guest_list.pop ();
    console.log(` Sorry friends . ${remove_guest} you nor not invited.`)
    for (let i =0; i < guest_list.length; i++){
        console.log(' Respected friends ' + guest_list[i]+'\n please come to my home, we celebrate eid festival, \n thank you\n');
    }
}
guest_list.splice(1,3);
console.log(guest_list)