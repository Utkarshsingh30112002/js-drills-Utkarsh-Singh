import {intrestInVideoGames,inGermany}from "./solution.js";//,withMasters,groupUsers} 
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