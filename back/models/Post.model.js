const mongoose = require('mongoose');
const {Mongoose} = require("mongoose");
const {Schema} = mongoose;


const postSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    date: Date,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    },
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }

})


const Post = mongoose.model("Post", postSchema);
module.exports = Post;
