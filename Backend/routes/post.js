const express =  require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Post = require('../models/post');
var multer = require('multer');
var path = require('path');


var storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
    }
})
var upload = multer({
    storage:storage
})


//rouet 1 :: add post, login reqired
router.post('/addpost',upload.single('userPost'),[
    body('description','Enter a valid description').isLength({min:5})
], async (req,res)=>{
    const file = req.file;
    // console.log(req)
    try {
        const { description, obj } = req.body;

        // console.log(req)
        const post = new Post({
            description, img: `http://localhost:7000/profile/${file.filename}`, user:obj
        })
        //     //or Post.create() method to be used
            const savedPost = await post.save();
            res.json(savedPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }
    // res.json('hellow');
})
// route 2 :: delete post login required
router.delete('/deletepost/:id',fetchuser,async(req,res)=>{
    try{
        let post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).send('Not found');
        }
        if(post.user.toString() !== req.user.id){
            return res.status(401).send('Not Allowed');
        }
        // console.log(post.user.toString());
        // console.log(post.user);
        post = await Post.findByIdAndDelete(req.params.id);
        res.json(post);
    }catch(error){
        console.log(error);
        res.status(500).send("Some error occured");
    }
})


module.exports = router