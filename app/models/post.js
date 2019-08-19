const mongoose = require('../../config/database')

const Schema = mongoose.Schema

const postSchema =  new Schema({
    title :{
        type : String
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    image : {
        type : String
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    Likes: [
        {
            title: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    }
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post


