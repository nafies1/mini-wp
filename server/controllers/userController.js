const User = require('../models/user')

class UserController{
    static getUsers(req,res,next){
        User.find({})
            .then(users=>{
                res.status(201).json(users)
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }

    static register(req,res,next){

    }
    static login(req,res,next){

    }
    static googleSign(req,res,next){

    }
}

module.exports = UserController

// Object.keys(emptyObj).length === 0
// ^^^^ Note for check empty Object