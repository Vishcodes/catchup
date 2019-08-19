const User = require('../models/user')

module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(function(user) {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.login = (req, res) => {
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then(user => {
            return user.generateToken()
        })
        .then(token => {
            res.json({token,body})
            // res.json({token})
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const {user} = req
    res.json(user)
}

module.exports.logout = (req, res) => {
    const {user, token} = req
    console.log(token)
    
    User.findByIdAndUpdate(user._id, { $pull: { tokens: {token: token}}})
    .then( function(){
        res.send({notice: 'successfully logged out'})
    })
    .catch(err => {
        res.send(err)
    })

}

module.exports.add = (req, res) => {
    const newUserId = req.params.id
    const userId = req.user._id
    // console.log(newUserId)
    // console.log(userId)
    User.findById(userId)
        .then(user => {
            // console.log(user)
            if(user){
                if(!user.friends.includes(newUserId)){
                    if(!user.friendrequests.includes(newUserId)){
                        if(!user.sentrequests.includes(newUserId)){
                            user.sentrequests.push(newUserId)
                            user.save()
                            User.findById(newUserId)
                                .then(newUser => {
                                    // console.log(newUser.friendrequests)
                                    if(newUser){
                                        if(!newUser.friends.includes(userId)){
                                            if(!newUser.friendrequests.includes(userId)){
                                                newUser.friendrequests.push(userId)
                                                newUser.save()
                                                res.json('req send')
                                            }else{
                                                res.json('error')
                                            }
                                        }else{
                                            res.json('already friend')
                                        }
                                    }else{
                                        res.status('404').json('user not found')
                                    }
                                })
                                .catch(err =>{
                                    res.status('404').json(err)
                                })
                        }else{
                            res.json('req pending')
                        }
                    }else {
                        res.json('profile in requested list')
                    }
                   
                }else{
                    res.json('you are already friend')
                }
            }else {
                res.json('Are you logged in ???')
            }
        })
        .catch(err => {
            res.status('404').json(err)
        })
}

module.exports.accept =(req, res) => {
    const userId = req.user._id
    const newUserId = req.params.id
    User.findById(userId)
        .then(user => {
            if(user){
                if(!user.friends.includes(newUserId)){
                    if(user.friendrequests.includes(newUserId)){
                        user.friendrequests.splice(user.friendrequests.indexOf(newUserId), 1)
                        user.friends.push(newUserId)
                        user.save()
                        User.findById(newUserId)
                            .then(newUser => {
                                if(newUser){
                                    if(!newUser.friends.includes(userId)){
                                        if(newUser.sentrequests.includes(userId)){
                                            newUser.sentrequests.splice(newUser.sentrequests.indexOf(userId))
                                            newUser.friends.push(userId)
                                            newUser.save()
                                            res.json('accepted')
                                        } else {
                                            res.json('no request')
                                        }
                                    } else {
                                        res.json('Already friend')
                                    }
                                } else {
                                    res.json('No Profile found')
                                }
                            })
                            .catch(err => {
                                res.status('404').json(err)
                            })
                    } else {
                        res.status('404').json('no request found')
                    }
                }else {
                    res.json('Already friend')
                }
            }else {
                    res.json('Something went wrong')     
            } 
        })
        .catch(err => {
            res.status('404').json(err)
        })
}

module.exports.cancelreq = (req, res) => {
    const userId = req.user._id
    const newUserId = req.params.id

    User.findById(userId)
        .then(user => {
            if(user){
                console.log(user)
                if(user.sentrequests.includes(newUserId)){
                    user.sentrequests.splice(user.sentrequests.indexOf(newUserId), 1)
                    user.save()
                    User.findById(newUserId)
                        .then(newUser => {
                            if(newUser.friendrequests.includes(userId)){
                                newUser.friendrequests.splice(newUser.friendrequests.indexOf(userId), 1)
                                newUser.save()
                                res.json('Friend request canceled')
                            }else{
                                res.status('404').json('no request found')
                            }
                        })
                        .catch(err => {
                            res.status('404').json(err)
                        })
                }else {
                    res.json('no req sent to this user')
                }
            }else {
                res.json('Are you logged in')
            }
        })
        .catch(err => {
            res.status('404').json(err)
        })
}

module.exports.remove = (req, res) => {
    const userId = req.user._id
    const newUserId = req.params.id
    User.findById(userId)
        .then(user => {
            if(user){
                if(user.friends.includes(newUserId)){
                    user.friends.splice(user.friends.indexOf(newUserId),1)
                    user.save()
                    User.findById(newUserId)
                        .then(newUser => {
                            if(newUser){
                                if(newUser.friends.includes(userId)){
                                    newUser.friends.splice(user.friends.indexOf(userId),1)
                                    newUser.save()
                                    res.json('removed friend')
                                }else{
                                    res.json('This person is not your friend')
                                }
                            }else{
                                res.json('Person not found')
                            }
                        })
                        .catch(err => {
                            res.json(err)
                        })
                } else {
                    res.json('This person is not your friend')
                }
            }else{
                res.status('401').json('Are you logged in')
            }
        })
        .catch(err => {
            res.json(err)
        })
}

