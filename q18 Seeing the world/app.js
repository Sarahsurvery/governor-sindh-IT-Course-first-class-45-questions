var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["karachi,lahore,islamabad,quetta"];
console.log('orignal:' + places);
//array in alphabetical order
console.log("copy      " + __spreadArray([], places, true).sort());
//array inits orignal order
console.log("orignal:" + places);
//array in reverse alphabetical order
console.log("copy     " + __spreadArray([], places, true).sort().reverse());
//array inits orignal order print again
console.log("copy   " + __spreadArray([], places, true).sort().reverse());
//reverse the order list
console.log("orignal :" + places.sort());
//reverse the order list again
console.log("orignal :" + places.sort().reverse());
