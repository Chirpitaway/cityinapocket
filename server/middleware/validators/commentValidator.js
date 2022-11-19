const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateComment: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            userName: joi.string().required(),
            message: joi.string().required(),
            rating: joi.number().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateCommentEdit: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            userName: joi.string(),
            message: joi.string(),
            rating: joi.number()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    })
}