
const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath =`${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,"this is a apple file");

// fs.readFile(filePath,'UTF8',(err,item)=>{
//     console.warn(item);
// })

// fs.appendFile(filePath,' and this fruit is very delicious',(err)=>{
//     if(!err){
//         console.log("Updated successfully")
//     }
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log('renamed successfully')
//     }
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);