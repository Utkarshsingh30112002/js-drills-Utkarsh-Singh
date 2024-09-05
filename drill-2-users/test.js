import {intrestInVideoGames,inGermany,withMasters,groupUsers}from "./solution.js";//} 
import {users} from "./users.js";

// Q1 Find all users who are interested in playing video games.
console.log(intrestInVideoGames(users));
intrestInVideoGames({});
intrestInVideoGames();

// // Q2 Find all users staying in Germany.
console.log("These are the users Staying in Germany :-");
 console.log(inGermany(users));
 inGermany({});
 inGermany();

 // Q3 Find all users with masters Degree.
console.log("These are the users having masters Degree :-");
console.log(withMasters(users));
withMasters({});
withMasters();

// Q4 Group users based on their Programming language mentioned in their designation.
console.log("Users based on programming language :-");
  console.log(groupUsers(users));
  console.log(groupUsers([]));
  console.log(groupUsers({a:{}}));
  console.log(groupUsers());