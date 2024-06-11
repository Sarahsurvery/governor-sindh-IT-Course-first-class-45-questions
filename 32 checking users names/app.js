var current_users = ["faizan", "admin", "hira", "bilal"];
var new_users = ["waniya", "asiya", "umer", "ahmed"];
new_users.forEach(function (newuser) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " to enter a new user name. "));
    }
    else {
        console.log("".concat(newuser, " is available. "));
    }
});
