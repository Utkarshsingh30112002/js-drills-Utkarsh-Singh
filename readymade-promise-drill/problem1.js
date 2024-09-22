import { error } from "console"

const {default:fs}= await  import("fs/promises")
/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
export function createDirThenCreateFilesThenDeleteFiles(path,x){
    return fs.mkdir(path,{recursive:true})
    .then(()=>{
        console.log(`${path} directory created`)
        return createFiles(path,x)
    })
    .catch((error)=>{console.log(error)})
}
function createFiles(path,x){
    let promise=[];
    for(let i=0;i<x;i++){
        let name=`file-${i}.json`
        promise.push( fs.writeFile(path+"/"+name," ")
        .then(()=>{
            console.log(`${name} created successfully`)
            return deleteFiles(path,name)
        }))
    }    
    return Promise.all(promise)
}
function deleteFiles(path,name){
    return fs.unlink(path+"/"+name).then(()=>{console.log(`${name} deleted successFully`)})
}