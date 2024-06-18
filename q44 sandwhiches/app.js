function make_sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("make a sandwhich with: ".concat(items.join(',')));
}
make_sandwhich("ham", "cheeze");
make_sandwhich("turkey", "lettuce", "tomato");
make_sandwhich("avacado", "sprouts", "mustard", "mayo");
