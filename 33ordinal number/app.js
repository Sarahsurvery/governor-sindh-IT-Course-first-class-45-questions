var my_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < my_number.length; i++) {
    if (my_number[i] == 1) {
        console.log("".concat(my_number[i], "st"));
    }
    else if (my_number[i] == 2) {
        console.log("".concat(my_number[i], "nd"));
    }
    else if (my_number[i] == 3) {
        console.log("".concat(my_number[i], "rd"));
    }
    else if (my_number[i] >= 4 && my_number[i] <= 9) {
        console.log("".concat(my_number[i], "th"));
    }
}
