function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = " I love TS"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt("small");
make_shirt("medium");
make_shirt("large", "print TS");
