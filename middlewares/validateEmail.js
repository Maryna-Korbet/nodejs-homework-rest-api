const validateEmail = (req, res, next) => {
    if (!req.body || !req.body.email) {
        return res.status(400).json({ message: "missing required field email" })
    }
    next()
}

module.exports = validateEmail