"use strict";
let guest_list = ['hira', 'mehak', 'faizan', 'bilal'];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected maam/sir ` + guest_list[i] + `,\nplease come to my birthday party.\nThankyou`);
}
// let not_present : string = "mehak";
// let new_guest : string = "atiya";
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
// console.log(`Respected maam/sir ` + guest_list [i] + `,\nplease come to my birthday party.\nThankyou`)
// }
// console.log(`Ms. ${not_present}not come to my birthday party`);
let not_present = "bilal";
let new_guest = "atiya";
guest_list[3] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
// console.log(`Respected maam/sir ` + guest_list [i] + `,\nplease come to my birthday party.\nThankyou`)
// }
//console.log(`Mr. ${not_present} not come to my birthday party `);
guest_list.unshift(`asiya`, `waniya`);
// for (let i=0; i<guest_list.length; i++) {
// console.log(`Respected maam/sir ` + guest_list [i] + `,\nplease attend my birthday party on tomorrow.\nThankyou`)
// }
//exercise 17
console.log(`\nI'm arrange a big party, all friends are invited`);
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/maam.${remove_guest}sorry cancel my party`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected maam/sir ` + guest_list[i] + `,\nplease attend my birthday party on tomorrow all friends are invited.\nThankyou`);
}
guest_list.splice(0, 2);
console.log(guest_list);
