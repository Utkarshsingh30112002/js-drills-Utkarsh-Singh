import {each,map,reduce,find,filter,flatten,items,nestedArray} from "./solution.js";

console.log("qs 1 Test :-");
each(items,(a)=>{console.log(a)});


console.log("qs 2 Test :-");
console.log(map(items,a=> a+1))


console.log("qs 3 Test :-");
console.log(reduce(items,(a,b)=> a+b))
console.log(reduce(items,(a,b)=> a+b,10))


console.log("qs 4 Test :-");
console.log(find(items,a => a>3));


console.log("qs 5 Test :-");
console.log(filter(items,a => a>3));


console.log("qs 6 Test :-");
console.log(flatten(nestedArray));


