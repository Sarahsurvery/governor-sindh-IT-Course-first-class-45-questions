let current_users:string[]=["faizan","bilal","admin","sarah"];
let new_users:string[]=["sarah","faizan","user6","user5","admin"];


new_users.forEach((newuser)=>{
    if(
        current_users.some(
            (currentuser)=>currentuser.toLowerCase()===newuser.toLowerCase()
        )

    ){
        console.log(`${newuser} will need to enter a new user name`);

    }

    else{
        console.log(` ${newuser} is available`);
    }
})