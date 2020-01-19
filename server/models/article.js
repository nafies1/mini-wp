const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema = new mongoose.Schema({
    title: String,
    content: {
        type: String,
        minlength: [30, 'Your article is too short. Minimum characters is 30']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    published: Boolean,
    featured_image: String
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article