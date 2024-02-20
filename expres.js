const express = require('express');
const app = express();
app.get('',(req,res)=>{
    //take http req from user and  print output as response
    console.log("data sent by browser",req.query.name);
    res.send("<h1>Welcy</h1><a href ='/about'>go to about</a> "+req.query.name);

})

app.get('/about',(req,res)=>{
    //to take input from user
    res.send(`
    <input type = test, placeholder = "your name" value="{req.query.name}" />
    <button>confirm</button>
    `)
})

app.get('/help',(req,res)=>{
//to json file
    res.send([
        {
            name: 'Aman Raut',
        email: 'amanraut13@gmail.comn'
        },
        {
            name: 'Manuu',
        email: 'manuu@gmail.comn'
        }
    ]
      
    );
})
app.listen(4100);