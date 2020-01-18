const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

class UserController{
    static getUsers(req,res,next){
        User.find({})
        .then(users=>{
            console.log(users);                
            if (!users.length) {
                next({
                    status: 404,
                    message: 'No user found'
                })
            }
            else {
                res.status(200).json(users)
            }
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
                if (user){
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
                } else {
                    next({
                        status: 400,
                        message: 'Username/password is wrong'
                    })
                }                    
            })
            .catch(err=>{
                console.log(err);                
                next(err)
            })
    }
    static googleSign(req, res, next){        
        let payload
        let status = {}
        const client = new OAuth2Client(process.env.CLIENT_ID);
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket=>{
                payload = ticket.getPayload();
                const {email} = payload
                return User.findOne({email: email})
            })
            .then(user=>{
                const {name} = payload
                const {email} = payload
                if (!user) {
                    status.ids = 201
                    status.msg = "user not found. Create user"
                    return User.create({
                        name,
                        email,
                        password: 'google_sign'
                    })
                } else{
                    status.msg = "user found"
                    status.ids = 200
                    return user
                }
            })
            .then(user=>{
                const idUser = user._id
                const token = jwt.sign({ id: idUser }, process.env.SECRET);
                res.status(status.ids).json({token, msg: status.msg})
            })
            .catch(err=>{
                next(err)
            })
    }

    static getOneUser(req,res,next){
        User.findById(req.params.id)
          .then(user=>{
              console.log(user);
              res.status(200).json({
                  user,
                  msg: 'Get one user success'
                })
          })
          .catch(err=>{
              next(err)
          })
    }

    static updateUser(req,res,next){
        const {name, email, password} = req.body
        User.findByIdAndUpdate(req.params.id, {
            name,
            email,
            password
        })
          .then(user=>{
              console.log(user);
              res.status(200).json({
                  user,
                  msg: 'Update success'
                })
          })
          .catch(err=>{
              next(err)
          })
    }

    static changePassword(req,res,next){
        let {password} = req.body
        const hash = bcrypt.hashSync(password, salt)
        password = hash
        User.findByIdAndUpdate(req.params.id, {
            password
        })
          .then(user=>{
              console.log(user);
              res.status(200).json({
                  user,
                  msg: 'Change Password success'
                })
          })
          .catch(err=>{
              next(err)
          })
    }

    static deleteUser(req,res,next){
        User.findByIdAndDelete(req.params.id)
          .then(user=>{
              console.log(user);
              res.status(200).json({
                  user,
                  msg: 'Delete user success'
                })
          })
          .catch(err=>{
              next(err)
          })
    }
} // end of class UserController

module.exports = UserController

// Object.keys(emptyObj).length === 0
// ^^^^ Note for check empty Object