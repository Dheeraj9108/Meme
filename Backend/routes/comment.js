const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const Comment = require('../models/comment');
const fetchuser = require('../middleware/fetchuser');

router.post('/postComment/:id',fetchuser,async(req,res)=>{
    // try {
    //     const cmnt = new Comment({
    //         userid:req.user.id,
    //         postid:req.params.id,
    //         comment:req.body.comment
    //     })
    //     const response = await cmnt.save();
    //     res.status(201).json(response);
    // } catch (error) {
    //     console.log(error)
    //     res.status(400).send(error);
    // }
    try {
        const post = await Post.find({_id:req.params.id})
        let commentedPost;
        if(post){
            commentedPost = await Post.findByIdAndUpdate(req.params.id,{
                "$push":{
                    "comments":req.body.comments
                }},{new:true})
        }
        // console.log(commentedPost);
        res.status(200).json(commentedPost);
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})
router.get('/getComment/:id',fetchuser,async(req,res)=>{
    try {
      const comment = await Comment.find({postid:req.params.id});
      
      res.status(200).json(comment);

    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
    
})

module.exports = router