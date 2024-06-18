let places: string[]=["karachi,lahore,islamabad,quetta"];

console.log('orignal:'+places);

//array in alphabetical order

console.log("copy      "  +  [...places].sort());

//array inits orignal order

console.log("orignal:"+places);

//array in reverse alphabetical order

console.log("copy     " + [...places].sort().reverse());

//array inits orignal order print again

console.log("copy   " + [...places].sort().reverse());

//reverse the order list

console.log("orignal :"+ places.sort());

//reverse the order list again

console.log("orignal :"+ places.sort().reverse());
