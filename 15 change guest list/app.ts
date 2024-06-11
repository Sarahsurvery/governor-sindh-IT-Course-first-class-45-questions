//exercise 15 change guest_list
let guest_list: string[]=['hira', 'mehak', 'faizan', 'bilal'];
for (let i=0; i< guest_list.length; i++) {
    console.log(`Respected maam/sir ` + guest_list [i]+ `,\nplease come to my birthday party.\nThankyou`)
}
// let not_present : string = "mehak";
// let new_guest : string = "atiya";
// guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++) {
// console.log(`Respected maam/sir ` + guest_list [i] + `,\nplease come to my birthday party.\nThankyou`)
// }
// console.log(`Ms. ${not_present}not come to my birthday party`);

let not_present : string = "bilal";
let new_guest : string = "atiya";
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++) {
console.log(`Respected maam/sir ` + guest_list [i] + `,\nplease come to my birthday party.\nThankyou`)
}
console.log(`Mr. ${not_present} not come to my birthday party `);
