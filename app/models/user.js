const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 120
    },
    image : {
        type : String
    },
    friends:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    friendrequests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    sentrequests:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
   
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {timestamps: true})

userSchema.pre('save', function(next){
    const user = this
    if(user.isNew){ 
        bcryptjs.genSalt(10)
            .then(function(salt){
                bcryptjs.hash( user.password, salt)
                    .then(function(encryptedPassword){
                        user.password = encryptedPassword
                        next()
                    })
            })
    }else {
        next()
    }
})

userSchema.methods.generateToken = function(){
    const user = this 
    const tokenData = {
        _id: user._id, 
        username: user.username, 
        createdAt: Number(new Date())
    }

    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({
        token
    })

    return user.save()
        .then(function(user){
            return Promise.resolve({token,user})
        })
        .catch(function(err){
            return Promise.reject(err)
        })
}

userSchema.statics.findByCredentials = function(email, password){
    const User = this
    return User.findOne({email})
        .then(function(user){
            if(!user){
                return Promise.reject('invalid username / password')
            }
            return bcryptjs.compare(password, user.password)
                .then(function(result){
                    if(result){
                        return Promise.resolve(user)
                    } else {
                        return Promise.reject('invalid username/password')
                    }
                })
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData
// to handle run time error
    try{
        tokenData = jwt.verify(token, 'jwt@123')
    } catch(err) {
        return Promise.reject(err)
    }
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
}

const User = mongoose.model('User', userSchema)

module.exports = User