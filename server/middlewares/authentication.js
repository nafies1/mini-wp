const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = (req, res, next)=>{
    const token = req.headers.token
    if (token) {
        const authenticated = jwt.verify(token, process.env.SECRET)
        User.findOne({_id : authenticated.id})
            .then(user=>{
                if (user) {
                    req.currentUserId = authenticated.id
                    next()
                } else{
                    next({
                        status: 403,
                        message: 'Your account not found. Please register or login using valid account'
                    })
                }
            })
            .catch(err=>{
                next(err)
            })
    } else{
        next({
            status: 400,
            message: 'Please Login to get access'
        })
    }   
}