let current_users : string [] = ["faizan","admin","hira","bilal"];
let new_users : string [] = ["waniya","asiya","umer","ahmed"];

new_users.forEach((newuser) =>{
    if(
        current_users.some(
            (current_users) => current_users.toLowerCase() === newuser.toLowerCase()
        )

    ){
        console.log(`${newuser} to enter a new user name. `);
    }else{
        console.log(`${newuser} is available. `);
    }
});
