const validateBody = require("./validateBody")
const isValidId = require("./isValidId")
const validateFavorite = require("./validateFavorite")
const authenticate = require("./authenticate")
const validateSubscription = require("./validateSubscription")
const upload = require("./upload")
const validateEmail = require("./validateEmail")

module.exports = {
    validateBody,
    isValidId,
    validateFavorite,
    authenticate,
    validateSubscription,
    upload,
    validateEmail,
}