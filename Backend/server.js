const express = require('express');
const db = require('./db');
const app = express();
var cors = require('cors'); 
var multer = require('multer');
var path = require('path');

db();//DataBase connection 

app.use(express.json());//built in midleware to parse the incoming req into json
app.use(cors());
app.use('/profile',express.static('uploads'))


var storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now+path.extname(file.originalname));
    }
})
var upload = multer({
    storage:storage
})
app.get('/',(req,res)=>{
    res.send('Hellow Word');
})


app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',upload.single('userPost'),require('./routes/post'));

app.listen(7000,()=>{
    console.log("Srever is listening at port 7000");
})