const Joi = require('joi');
const registerValidation = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    phoneNumber: Joi.number().integer().min(1000000000).max(9999999999).required(),
})
const loginValidation = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})
module.exports = {registerValidation,loginValidation};