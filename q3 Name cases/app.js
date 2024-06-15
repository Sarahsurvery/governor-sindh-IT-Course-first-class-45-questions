//lowercase
var personName = " Bilal";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
console.log("uppercase:", personName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
