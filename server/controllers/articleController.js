const Article = require('../models/article')

class ArticleController{
    static create(req, res, next){
        const {title, content} = req.body
        const ownerId = req.currentUserId
        Article.create({
            title,
            content,
            ownerId,
            published : false,
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


}

module.exports = ArticleController