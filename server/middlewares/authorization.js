const Article = require('../models/article')

module.exports = (req, res, next)=>{
    const articleId = req.params.id
    const userId = req.currentUserId
    console.log(req.params.id, 'ini articleId authorization');
    console.log(userId, 'ini user id');
    
    Article.findOne({_id : articleId})
        .then(article=>{
            console.log(article, "ini di otorisasi");
            
            if (article) {
                if (article.ownerId == userId) {
                    next()
                } else {
                    next({
                        status: 401,
                        message: 'You are not authorized for access this article'
                    })
                }
            } else{
                next({
                    status: 404,
                    message: 'Article not found'
                })
            }
        })
        .catch(err=>{
            console.log(err, 'ini di catch authorization');
            next(err)
        })
}