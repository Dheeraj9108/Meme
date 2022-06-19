const express = require('express');
const db = require('./db');
const app = express();
var cors = require('cors');
var multer = require('multer');
var path = require('path');
var fetchuser = require("./middleware/fetchuser");
// var Post = require("./models/post");
// var fileupload = require('express-fileupload');

db();//DataBase connection 

app.use(express.json());//built in midleware to parse the incoming req into json
// app.use(fileupload());
app.use(cors());
app.use('/profile', express.static('./uploads'))



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));

    }
})

var upload = multer({
    storage: storage
})


app.post('/upload', fetchuser, upload.single('avatar'), async (req, res) => {
    console.log(req.body.description);
    try {
        console.log("hellow")
        res.json("hellow");
    } catch (error) {
        console.log(error);
    }
})
// var upload = multer({
//     storage: storage
// })


//rouet 1 :: add post, login reqired
// app.post('/addpost', upload.single('userPost'), async (req, res) => {

//     const file = req.file;
//     // console.log(req)
//     try {
//         const { description, obj } = req.body;

//         // console.log(req)
//         const post = new Post({
//             description, img: `http://localhost:7000/profile/${file.filename}`, user:obj
//         })
//         //     //or Post.create() method to be used
//             const savedPost = await post.save();
//             res.json(savedPost);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Some error Occured");
//     }
//     res.json('hellow');
// })
app.get('/id', fetchuser, async (req, res) => {
    res.json(req.user.id);
})

app.post('/', (req, res) => {
    res.send('Hellow Word');
})


app.use('/api/auth', require('./routes/auth'));
app.use('/api/post', require('./routes/post'));

app.listen(7000, () => {
    console.log("Srever is listening at port 7000");
})