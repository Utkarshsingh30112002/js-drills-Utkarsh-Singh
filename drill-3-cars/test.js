import {infoId33,lastCar,sortCarModels,allTheYears}from "./solution.js";//,olderThan3000,bmwAndAudi} 
import {inventory}from "./cars.js";

// ==== Problem #1 ====
  // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
  ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
  console.log(infoId33(inventory));
  console.log(infoId33([{}]));
  console.log(infoId33());

  // ==== Problem #2 ====
  // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
  ("Last car is a *car make goes here* *car model goes here*");
  console.log(lastCar(inventory));
  console.log(lastCar([{}]));
  console.log(lastCar());
  // ==== Problem #3 ====
  // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  console.log(sortCarModels(inventory));
  console.log(sortCarModels([{}]));
  console.log(sortCarModels());

  // ==== Problem #4 ====
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
  console.log(allTheYears(inventory));
  console.log(allTheYears([{}]));
  console.log(allTheYears());