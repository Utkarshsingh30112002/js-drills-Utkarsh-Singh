import {cacheFunction,counterFactory,limitFunctionCallCount} from "./solution.js";

const fn=counterFactory().increment;
console.log(fn());
console.log(fn());
console.log(fn());


const f2=limitFunctionCallCount(()=>"hello",3);
console.log(f2());
console.log(f2());
console.log(f2());
console.log(f2());
console.log(f2());

const f3=cacheFunction((data)=>data);
console.log(f3({a:1}));
console.log(f3({a:1}));
console.log(f3(2));