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
async function readFile(path){
    return fs.readFile(path,"utf-8")
}
async function toUppercase(data){
    data=data.toUpperCase();
    await fs.writeFile("uppercase.txt",data)
    console.log("uppercase file saved")
    await fs.writeFile("./filenames.txt","uppercase.txt\n")
    console.log("uppercase.txt file name added")
}

async function splitToSentences(data){
        data=data.toLowerCase()
        data=data.split(".").join("\n")
        await fs.writeFile("sentences.txt",data)
        console.log("sentence file written successfully")
        await fs.appendFile("./filenames.txt","sentences.txt\n")
        console.log("sentences.txt file name appended")
}
async function sort(data){
        data=data.split(" ").sort().join(" ")
        await fs.writeFile("sortData.txt",data)
        console.log("sortData file written successfully")
        await fs.appendFile("./filenames.txt","sortData.txt")
        console.log("sortData.txt file name appended")
}
async function deletion(data){
        let arr=data.split("\n")
        arr.forEach(async (file)=>{
                await fs.unlink(file)
                console.log(file+" deleted successfully")
            })
}

export async function chain(path){
    let __dirname=dirname(path)
    let data=await readFile(path)
    await toUppercase(data)
    data=await readFile(__dirname+"/uppercase.txt")
    await splitToSentences(data)
    data=await readFile(__dirname+"/sentences.txt")
    await sort(data)
    data=await readFile(__dirname+"/filenames.txt")
    await deletion(data)
   
}