const express =  require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Post = require('../models/post');

//rouet 1 :: add post, login reqired
router.post('/addpost',fetchuser,[
    body('description','Enter a valid description').isLength({min:5})
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        const {description,img} = req.body;
        const post = new Post({
          description,img,user:req.user.id
        })
        //or Post.create() method to be used
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }
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