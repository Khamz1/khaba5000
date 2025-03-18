const mongoose = require('mongoose');
const {Mongoose} = require("mongoose");

const likeSchema = mongoose.Schema({
    user: {
        type:Mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    postId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    commentId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }

})

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
