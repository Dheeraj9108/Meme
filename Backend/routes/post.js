const express =  require('express');
const router = express.Router();
const {body,validationResult} = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Post = require('../models/post');


router.post('/addpost',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Enter a valid description').isLength({min:5})
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
        const {title,description} = req.body;
        const post = new Post({
          title,description,user:req.user.id
        })
        //or Post.create() method to be used
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error Occured");
    }
})
module.exports = router