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
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Like' }],
    image: { type: String }

})


const Post = mongoose.model("Post", postSchema);
module.exports = Post;
