const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController{
    static getUsers(req,res,next){
        User.find({})
            .then(users=>{
                res.status(200).json(users)
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }

    static register(req,res,next){
        const {name, email, password} = req.body
        User.create({
            name,
            email,
            password
        })
          .then(user=>{
              console.log(user);
              const token = jwt.sign({ id: user._id }, process.env.SECRET);
              res.status(201).json({
                  token,
                  msg: 'Register success'
                })
          })
          .catch(err=>{
              next(err)
          })
    }
    static login(req,res,next){
        const {email, password} = req.body
        User.findOne({email})
            .then(user=>{
                console.log(user);                
                const token = jwt.sign({ id: user._id }, process.env.SECRET);
                if (bcrypt.compareSync(password, user.password)){
                    res.status(200).json({
                        token,
                        msg: 'Login success'
                    })
                } else{
                    next({
                        message: 'Username/password is wrong',
                        status: 400
                    })
                }
                
            })
            .catch(err=>{
                console.log(err);                
                next(err)
            })
    }
    static googleSign(req,res,next){

    }
}

module.exports = UserController

// Object.keys(emptyObj).length === 0
// ^^^^ Note for check empty Object