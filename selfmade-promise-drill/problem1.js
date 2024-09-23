
import { error } from "console"
import fs from "fs"

/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
export function createDirThenCreateFilesThenDeleteFiles(path,x){
    return new Promise((resolve,reject)=>{fs.mkdir(path,{recursive:true},(err)=>{
        if(err)reject(err)
        console.log(`${path} directory created`)
        resolve(createFiles(path,x))
    })})
    .catch((error)=>{console.log(error)})
}
function createFiles(path,x){
    let promise=[];
    for(let i=0;i<x;i++){
        let name=`file-${i}.json`
        promise.push(new Promise((resolve,reject)=>{ fs.writeFile(path+"/"+name," ",(err)=>{
            if(err)reject(err);
            console.log(`${name} created successfully`)
            resolve(deleteFiles(path,name))
    })}))
}    
    return Promise.all(promise)
}
function deleteFiles(path,name){
    return new Promise((resolve,reject)=>{
        fs.unlink(path+"/"+name,(err)=>{
            if(err)reject(err)
            console.log(`${name} deleted successFully`)
            resolve()
        })
    })
}