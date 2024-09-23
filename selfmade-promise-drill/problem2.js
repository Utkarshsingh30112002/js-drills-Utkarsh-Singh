import { dirname } from "path";
import fs from "fs";
//const {default:fs}= await  import("fs/promises")
/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/
function readFile(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err)reject(err)
            else resolve(data)
        })
    }) 
}
function toUppercase(data){
    //console.log(data)
    data=data.toUpperCase();
    return new Promise((resolve,reject)=>{
        fs.writeFile("uppercase.txt",data,(err)=>{
            if(err)reject(err)
            resolve(data)
        })})
        .then((data)=>{
        console.log("uppercase file saved")
        return new Promise((resolve,reject)=>{
            fs.writeFile("./filenames.txt","uppercase.txt\n",(err)=>{
                if(err)reject(err)
                console.log("uppercase.txt file name added")
                resolve(data)
            })
            
        })
})}

function splitToSentences(data){
        data=data.toLowerCase()
        data=data.split(".").join("\n")
        return new Promise((resolve,reject)=>{
            fs.writeFile("sentences.txt",data,(err)=>{
                if(err)reject(err)
                resolve(data)
            }) })
            .then((data)=>{
            console.log("sentence file written successfully")
            return new Promise((resolve,reject)=>{
                fs.appendFile("./filenames.txt","sentences.txt\n",(err)=>{
                    if(err)reject(err)
                    console.log("sentences.txt file name appended")
                    resolve(data)
                })
                
            }) 
        })
   
}
function sort(data){
        data=data.split(" ").sort().join(" ")
        return new Promise((resolve,reject)=>{
            fs.writeFile("sortData.txt",data,(err)=>{
                if(err)reject(err)
                console.log("sortData file written successfully")
                resolve()
                })}) 
                .then(()=>{
                return new Promise((resolve,reject)=>{
                    fs.appendFile("./filenames.txt","sortData.txt",(err)=>{
                        if(err)reject(err)
                        console.log("sortData.txt file name appended")
                        resolve(readFile("./filenames.txt"))
                    })
                })
            })
           
            
        
        
}
function deletion(data){
        let arr=data.split("\n")
        let promise=[]
        arr.forEach(file=>{
            promise.push( new Promise((resolve,reject)=>{
                fs.unlink(file,(err)=>{
                    if(err)reject(err)
                    resolve(console.log(file+" deleted successfully"))
                })
                
            }))
        })
        return Promise.all(promise)
}

export function chain(path){
    let __dirname=dirname(path)
    readFile(path)
    .then(toUppercase)
    .then(splitToSentences)
    .then(sort)
    .then(deletion)
    .catch((error)=>console.log(error))
}