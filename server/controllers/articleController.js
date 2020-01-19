const Article = require('../models/article')

class ArticleController{
    static create(req, res, next){
        const {title, content} = req.body
        const author = req.currentUserId
        const featured_image = req.file.cloudStoragePublicUrl
        Article.create({
            title,
            content,
            author,
            published : false,
            featured_image
        })
          .then(article =>{
              console.log(article);
              res.status(201).json({
                  msg: `Article with title ${article.title} created.`
              })
          })
          .catch(err=>{
              next(err)
          })        
    }

    static readAll(req, res, next){
        Article.find({})
            .then(articles=>{
                console.log(articles);                
                if (articles.length > 0){
                    res.status(200).json(articles)
                } else{
                    next({
                        message: 'No article found',
                        status: 404
                    })
                }
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }

    static read(req, res, next){
        Article.findOne({_id : req.params.id})
            .then(article=>{
                console.log(article, 'ini di controller read');
                res.status(200).json(article)
            })
            .catch(err=>{
                next(err)
            })
    }

    static update(req, res, next){
        const {title, content} = req.body
        Article.findByIdAndUpdate(req.params.id, {
            title,
            content
        })
            .then(article=>{
                console.log(article);
                res.status(200).json({
                    article,
                    msg: 'Article updated'
                })
            })
            .catch(err=>{
                console.log(err);
                next(err)
            })
    }

    static publish(req, res, next){
        const {published} = req.body
        Article.findByIdAndUpdate(req.params.id, {published})
            .then(article=>{
                res.status(200).json({
                    article,
                    msg: `Article with title ${article.title} has been published`
                })
            })
            .catch(err=>{
                next(err)
            })
    }

    static delete(req,res,next){
        Article.findByIdAndDelete(req.params.id)
            .then(article=>{
                res.status(200).json({
                    article,
                    msg: 'Delete success'
                })
            })
            .catch(err=>{
                console.log(err);                
                next(err)
            })
    }
}

module.exports = ArticleController