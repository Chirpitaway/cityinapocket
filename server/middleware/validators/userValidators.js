const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateLogin: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateRegister: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().required(),
            city: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateEditUser: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            email: joi.string().email().required(),
            city: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
}