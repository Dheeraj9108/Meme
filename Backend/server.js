const express = require('express');
const db = require('./db');
const app = express();

db();//DataBase connection 

app.use(express.json());//built in midleware to parse the incoming req into json

app.get('/',(req,res)=>{
    res.send('Hellow Word');
})

app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/post'));

app.listen(7000,()=>{
    console.log("Srever is listening at port 7000");
})