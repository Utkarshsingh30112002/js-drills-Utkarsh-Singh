import {giveEmail,hobbiesWithAge}from "./solution.js";//,studentsOfAustralia,at3,ageOfAll,firstHobby,findWithAge25,cityAndCountry} 
import {arrayOfObjects} from "./persons.js";

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
giveEmail(arrayOfObjects);
console.log(giveEmail([{}]));
console.log(giveEmail());
  
  //    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
  hobbiesWithAge(30,arrayOfObjects);
  hobbiesWithAge(arrayOfObjects);
  hobbiesWithAge({});
  
  //    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
  
  //    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
  
  //    Implement a loop to access and print the ages of all individuals in the dataset.
  
  //    Create a function to retrieve and display the first hobby of each individual in the dataset.
  
  //    Write a function that accesses and prints the names and email addresses of individuals aged 25.
  
  //    Implement a loop to access and log the city and country of each individual in the dataset.