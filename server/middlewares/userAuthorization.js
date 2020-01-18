module.exports = (req, res, next)=>{
    const {id} = req.params
    const userId = req.currentUserId
    console.log(req.params.id, 'ini user id authorization');
    console.log(userId, 'ini user id');
    if (userId === id) {
        next()
    } else{
        next({
            status: 401,
            message: 'You are not authorized for access this user'
        })
    }
}