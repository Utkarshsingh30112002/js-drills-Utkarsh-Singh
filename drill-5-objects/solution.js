function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  let ans=[];
  for(let i in obj){
    ans.push(i);
  }
  return ans;
}


function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  let ans=[];
  for(let i in obj){
    if(typeof(obj[i])=="function")continue;
     ans.push(obj[i]);
  }
  return ans;
}


function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  let ans={};
  for(let i in obj){
    ans[i]=cb(obj[i]);
  }
  return ans;
}

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  let ans=[];
  for(let i in obj){
    ans.push([i,obj[i]]);
  }
  return ans;
}
console.log(pairs(testObject));

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  let ans={};
  for(let i in obj){
    ans[obj[i]]=i;
  }
  return ans;
}


function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for(let i in defaultProps){
    if(defaultProps[i]==undefined)continue;
    if(obj[i]==undefined)obj[i]=defaultProps[i];
  }
  return obj;
}

export {keys,values,mapObject,invert,pairs,defaults};
