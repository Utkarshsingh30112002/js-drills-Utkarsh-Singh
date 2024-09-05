function validArgument(users){
    if(!users){
        console.log("Pass a valid argument");
        return false;
    }
    let arr=Object.keys(users);
    if(users.length==0){
        console.log("Pass a valid argument");
        return false;
    }
    for(let i=0;i<arr.length;i++){
        if(!Number.isInteger(users[arr[i]].age)||users[arr[i]].age<0){
            console.log(`Check age of ${arr[i]}`);
            return false;
        }
        if(!users[arr[i]].desgination||users[arr[i]].desgination.trim().length==0){
            console.log("Check desgination of "+arr[i]);
            return false;
        }
        if(!users[arr[i]].qualification||users[arr[i]].qualification.trim().length==0){
            console.log("Check qualification of "+arr[i]);
            return false;
        }
        if(!users[arr[i]].nationality||users[arr[i]].nationality.trim().length==0){
            console.log("Check nationality of "+arr[i]);
            return false;
        }
        if(!Array.isArray(users[arr[i]].interests)||users[arr[i]].interests.length==0){
            console.log("Check interests of "+arr[i]);
            return false;
        }
    }
    return true;
}
//Wrote the valid argument which checks the formet of users object other wise it gives error message and undefined

// Q1 Find all users who are interested in playing video games.
function intrestInVideoGames(users){
    if(!validArgument(users))return;
    let reg=/video games/i;
    let arr=[];
    for(let user in users){
        if(reg.test(users[user]["interests"]?.[0]))arr.push(user);
    }
    return arr;
}
// Q2 Find all users staying in Germany.
function inGermany(users){
    if(!validArgument(users))return;
    let arr=[];
    for(let user in users){
        if(users[user].nationality=="Germany")arr.push(user);
    }
    return arr;
}

export{intrestInVideoGames,inGermany}//,withMasters,groupUsers};