const {Schema, model} = require('mongoose')

const Joi = require('joi')

const {handleMongooseError} = require("../helpers")

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: [emailRegexp, 'Invalid email format'],
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        match: [passwordRegexp, 'Invalid password format'],
        minlength: 8,
        required: [true, 'Password is required'],
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },      
}, {versionKey: false, timeseries: true})

userSchema.post("save", handleMongooseError)

const registerSchema = ({
    name: Joi.string().required(),
    email: Joi.string().pattern(passwordRegexp).required(),
    password: Joi.string().pattern(passwordRegexp).min(8).required(),
})

const loginSchema = ({
    email: Joi.string().pattern(passwordRegexp).required(),
    password: Joi.string().pattern(passwordRegexp).min(8).required(),
})

const schemas = {
    registerSchema,
    loginSchema,
}

const User = model("user", userSchema)

module.exports = {
    User,
    schemas,
}
