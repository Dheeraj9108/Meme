const express = require('express');
const db = require('./db');
const app = express();
var cors = require('cors'); 
var multer = require('multer');
var path = require('path');
var fetchuser = require("./middleware/fetchuser");
var Post = require("./models/post");

db();//DataBase connection 

app.use(express.json());//built in midleware to parse the incoming req into json
app.use(cors());
app.use('/profile',express.static('./uploads'))




var storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        console.log("before"+JSON.stringify(file));
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
        console.log("After"+file);
    }
})
var upload = multer({
    storage:storage
})


//rouet 1 :: add post, login reqired
app.post('/addpost',upload.single('userPost'), async (req,res)=>{
    // console.log(req.file);
    // const file = req.file;
    // console.log(req);
    // try {
    //     const {description} = req.body;
      
    //     // console.log(req)
    //     const post = new Post({
    //       description,img:`http://localhost:7000/profile/${img}`,user:req.user.id
    //     })
    //     //or Post.create() method to be used
    //     const savedPost = await post.save();
    //     res.json(savedPost);
    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).send("Some error Occured");
    // }
    res.send('hellow');
})











app.get('/',(req,res)=>{
    res.send('Hellow Word');
})
app.post('/',(req,res)=>{
    res.send('Hellow Word');
})


app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/post'));

app.listen(7000,()=>{
    console.log("Srever is listening at port 7000");
})