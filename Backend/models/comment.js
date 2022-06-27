const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    comment:{
        type:String,
        required:true
    }
})
const Comment = mongoose.model('comment',commentSchema);
module.exports = Comment