// middleware to ensure that user has credits

module.exports = (req, res, next) => {
    if(req.user.credits < 1){
        // give an error status of 403
        return res.status(403).send({ error: "Must have Credits" })
    }
    next()
}