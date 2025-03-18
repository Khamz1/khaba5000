const mongoose = require('mongoose');
const {Mongoose} = require("mongoose");

const commentSchema = mongoose.Schema({
    postId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    text:String,

})
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
