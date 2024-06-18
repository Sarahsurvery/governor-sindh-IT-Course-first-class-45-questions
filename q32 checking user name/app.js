var current_users = ["faizan", "bilal", "admin", "sarah"];
var new_users = ["sarah", "faizan", "user6", "user5", "admin"];
new_users.forEach(function (newuser) {
    if (current_users.some(function (currentuser) { return currentuser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new user name"));
    }
    else {
        console.log(" ".concat(newuser, " is available"));
    }
});
