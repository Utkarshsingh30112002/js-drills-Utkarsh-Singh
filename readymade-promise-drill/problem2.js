import { dirname } from "path";

const {default:fs}= await  import("fs/promises")
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
    return fs.readFile(path,"utf-8")
}
function toUppercase(data){
    data=data.toUpperCase();
    return fs.writeFile("uppercase.txt",data).then(()=>{
        console.log("uppercase file saved")
        return fs.writeFile("./filenames.txt","uppercase.txt\n").then(()=>{
            console.log("uppercase.txt file name added")
            return data
        })
})}

function splitToSentences(data){
        data=data.toLowerCase()
        data=data.split(".").join("\n")
        return fs.writeFile("sentences.txt",data).then(()=>{
            console.log("sentence file written successfully")
            return fs.appendFile("./filenames.txt","sentences.txt\n").then(()=>{
                console.log("sentences.txt file name appended")
                return data
            })
    })
}
function sort(data){
        data=data.split(" ").sort().join(" ")
        return fs.writeFile("sortData.txt",data).then(()=>{
            console.log("sortData file written successfully")
            return fs.appendFile("./filenames.txt","sortData.txt").then(()=>{
                console.log("sortData.txt file name appended")
                return readFile("./filenames.txt")
            })
        })
}
function deletion(data){
        let arr=data.split("\n")
        let promise=[]
        arr.forEach(file=>{
            promise.push(fs.unlink(file).then(()=>{
                console.log(file+" deleted successfully")
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