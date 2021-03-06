const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    comments:[
        {
            comment:{type:String}
        }
    ]
}) 
const Post = mongoose.model('post',postSchema);
module.exports = Post;