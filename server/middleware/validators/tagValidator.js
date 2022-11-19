const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateTag: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            type: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateTagEdit: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string(),
            type: joi.string()
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