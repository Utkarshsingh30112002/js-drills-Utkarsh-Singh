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
//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function hobbiesWithAge(agee,arr){
    if(!Array.isArray(arr)||!Number.isInteger(agee)||arr.length==0||agee<=0){
        console.log("undefined -- pass a valid arguments");
        return;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].hobbies==undefined||arr[i].hobbies.length==0)continue;
        if(arr[i].age==agee)console.log(`${arr[i].name} has these hobbies - ${arr[i].hobbies}`);
    }
    return ;
}

export{giveEmail,hobbiesWithAge};//,studentsOfAustralia,at3,ageOfAll,firstHobby,findWithAge25,cityAndCountry};
