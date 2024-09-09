function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter=0;
  function increment(){
    return ++counter;
  }
  function decrement(){
    return --counter;
  }
  return {
    increment,
    decrement
  }
}

function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let count=0;
  function limit(){
    if(count>=n)return null;
    else {
      count++;
      return cb();

    }
  }
  return limit;

}


function cacheFunction(cb,data) {
  // Sould return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let obj={};
  function cache(data){
    if(obj.hasOwnProperty(data)){
      console.log("output comming from cache");
      return obj[data];
    }
    else {
      console.log("output comming by running function");
      obj[data]=cb(data);
      return obj[data];
    }
  }
  return cache;
}
export {cacheFunction,counterFactory,limitFunctionCallCount};


