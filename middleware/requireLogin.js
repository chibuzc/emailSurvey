// middleware to ensure that user is logged in 

module.exports = (req, res, next) => {
    if(!req.user){
        // give a status of 401(unauthorized and send an error message)
        return res.status(401).send({ error: "You must be logged in to access this page" })
    }
    next()
}