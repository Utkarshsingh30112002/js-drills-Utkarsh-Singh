import { error } from "console";

const { default: fs } = await import("fs/promises");
/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
export async function createDirThenCreateFilesThenDeleteFiles(path, x) {
  await fs.mkdir(path, { recursive: true });
  console.log(`${path} directory created`);
  await createFiles(path, x);
}
async function createFiles(path, x) {
 for (let i = 0; i < x; i++) {
    let name = `file-${i}.json`;
    await fs.writeFile(path + "/" + name, " ");
    console.log(`${name} created successfully`);
    await deleteFiles(path, name);
  }
}
async function deleteFiles(path, name) {
  await fs.unlink(path + "/" + name);
  console.log(`${name} deleted successFully`);
}
