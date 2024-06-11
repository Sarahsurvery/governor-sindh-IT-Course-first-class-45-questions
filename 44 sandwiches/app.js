function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items.join(','), "."));
}
make_sandwich("cheese", " ketchup");
make_sandwich("turkey", "lettuce");
make_sandwich("avcado", " mustard", "mayo");
