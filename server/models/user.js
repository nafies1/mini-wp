const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Your name is too short. Please input your alias']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type : String,
        required: [true, 'Password is required']
    },
},{
    timestamps: {
        createdAt: 'created_at'
    }
})

userSchema.pre('save', function(next) {
    const hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
    next();
  });

const User = mongoose.model('User', userSchema)

module.exports = User