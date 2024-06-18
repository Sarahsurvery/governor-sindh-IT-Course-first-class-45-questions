function make_cars(manufacturer, model, ...options) {
    let cars = { manufacturer, model };
    //options.forEach (([key, value]) => cars[key] = value);
    return cars;
}
console.log(make_cars("toyota", "civic", ["black", "grey"], ["year", 2020]));
console.log(make_cars("BMW", "cultus", ["blue", "red"], ["sunroof", true]));
export {};
