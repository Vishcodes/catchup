const mongoose = require('../../config/database')

const Schema = mongoose.Schema
const postSchema =  new Schema({
    title :{
        type : String
    },
    body: {
        type: String
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    creator: {
        type: String
    },
    image : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            body: {
                type: String
            } 
        }
    ]
})
const Post = mongoose.model('Post', postSchema)
module.exports = Post