
function make_cars(manufacturer:string, model:string, ...options: [string, any][]): Object {
    let cars = { manufacturer , model };
options.forEach (([key, value]) => cars[key] = value);
    return cars;
}

console.log(make_cars("toyota", "civic",  ["black","grey"],["year", 2020]));
console.log(make_cars("BMW","cultus", ["blue","red"],["sunroof", true]));