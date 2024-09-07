import {keys,values,mapObject,invert,pairs,defaults} from "./solution.js";
import {testObject} from "./objects.js";

console.log(keys(testObject));

console.log(values(testObject));

console.log(mapObject(testObject,a=>a+1));

console.log(pairs(testObject));

console.log(invert(testObject));

console.log(defaults(testObject,{x:1,y:undefined}));
