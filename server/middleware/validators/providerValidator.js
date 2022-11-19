const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateProvider: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            type: joi.string().required(),
            city: joi.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateProviderEdit: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string(),
            type: joi.string(),
            city: joi.string(),
            tags: joi.array().items(joi.string())
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
