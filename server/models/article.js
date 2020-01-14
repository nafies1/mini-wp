const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: String,
    content: {
        type: String,
        minlength: [30, 'Your article is too short. Minimum characters is 30']
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    published: Boolean,
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article