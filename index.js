 import {promises as fs} from 'fs';

async function readFile() {
    try {
       const data = await fs.readFile('file.txt', 'utf8');
       return data
    } catch (err) {
        console.error(err);
    }
}
async function writeFile(data,newdata) {
    try {
        console.log('File content:', data.concat(newdata));
        await fs.writeFile('file.txt',data.concat(newdata))
    } catch (err) {
        console.error(err);
    }
}
readFile().then((data)=>{
    writeFile(data,"!")
})

