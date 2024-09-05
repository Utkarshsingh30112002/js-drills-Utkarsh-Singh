//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function giveEmail(arr){
    if(!Array.isArray(arr)){
        console.log("undefined pass a valid array");
        return;
    }
    let email=[];
    for(let i=0;i<arr.length;i++){
        let reg=/^[a-z0-9_.+-]+@[a-z]+.[a-z]+$/gi;  // used regex for validating email
        if(arr[i].email==undefined||!reg.test(arr[i].email))continue;
        email.push(arr[i].email);
    }
    if(email.length==0)console.log("no emails found");
    else console.log(email);
    return email;
}

export{giveEmail};//,hobbiesWithAge,studentsOfAustralia,at3,ageOfAll,firstHobby,findWithAge25,cityAndCountry};
