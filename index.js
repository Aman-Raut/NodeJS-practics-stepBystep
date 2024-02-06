console.warn("Likee")

const app = require('./app')
console.log(app)
console.log(app.x)
console.log(app.y)
console.log(app.z())

const arr=[2,4,7,1,3,8,3];

let result = arr.filter((item)=>{
    return item
})
console.log(result);
const fs = require('fs')
fs.writeFileSync("hello.txt","this is the 6th teturoial of node js step by step code") 