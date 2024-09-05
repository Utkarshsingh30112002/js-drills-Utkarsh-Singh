//Solution can handel empty array, invalid email, undefined values,not declared values......
// if even a single value(required for that function) is undefined/empty i am skipping the print for that 

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
//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function studentsOfAustralia(arr){
    if(!Array.isArray(arr)||arr.length==0){
        console.log("undefined pass a valid array");
        return;
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==undefined||arr[i].name.trim().length==0)continue;
        if(arr[i].isStudent==true&&arr[i].country=='Australia')console.log(arr[i].name);
    }
    return ;
}
//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function at3(arr){
    if(!Array.isArray(arr)||arr.length==0){
        console.log("undefined pass a valid array");
        return;
    }

    if(arr.length<3){
        console.log("Given array has length less then three");
        return;
    }
    if(arr[3].name==undefined||arr[3].city==undefined||arr[3].name.trim().length==0||arr[3].city.trim().length==0) {
        console.log("no name or city found at index 3");
        return;
    } 
    console.log("name = "+arr[3].name+" and  City = "+arr[3].city);
    return ;
}
//    Implement a loop to access and print the ages of all individuals in the dataset.
function ageOfAll(arr){
    if(!Array.isArray(arr)||arr.length==0){
        console.log("undefined pass a valid array");
        return;
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i].age==undefined||!Number.isInteger(arr[i].age)||arr[i].age<=0)continue;
        console.log(`index ${i} - he is ${arr[i].age} years old`);
    }
    return ;
}
function firstHobby(arr){
    if(!Array.isArray(arr)||arr.length==0){
        console.log("undefined pass a valid array");
        return;
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i].hobbies==undefined||arr[i].hobbies.length==0)console.log(`index ${i}- has no hobby`);
        else if(arr[i].hobbies[0].trim().length==0)console.log("first hobby is empty");
        else console.log(`index ${i} - first hobby is ${arr[i].hobbies[0]}`);
    }
    return ;
}
//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function findWithAge25(arr){
    if(!Array.isArray(arr)||arr.length==0){
        console.log("undefined pass a valid array");
        return;
    }
    let reg=/^[a-z0-9_.+-]+@[a-z]+.[a-z]+$/i;
    for(let i=0;i<arr.length;i++){
        if(arr[i].name==undefined||arr[i].email==undefined||!reg.test(arr[i].email||arr[i].name.trim().length==0))continue;
        if(arr[i].age==25)console.log(`${arr[i].name}'s mail is - ${arr[i].email}`);
    }
    return ;
}
//    Implement a loop to access and log the city and country of each individual in the dataset.
function cityAndCountry(arr){
    if(!Array.isArray(arr)||arr.length==0){
        console.log("undefined pass a valid array");
        return;
    }
    

    for(let i=0;i<arr.length;i++){
        if(arr[i].city==undefined||arr[i].country==undefined||arr[i].city.trim().length==0||arr[i].country.trim().length==0)continue;
        
        console.log(`index ${i} - lives in city - ${arr[i].city} and country - ${arr[i].country}`);
    }
    return ;
}
export{giveEmail,hobbiesWithAge,studentsOfAustralia,at3,ageOfAll,firstHobby,findWithAge25,cityAndCountry};//};
