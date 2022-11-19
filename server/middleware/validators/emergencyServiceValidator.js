const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateEmergencyService: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            contact: joi.string().required(),
            city: joi.string().required(),
            country: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateEmergencyServiceEdit: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string(),
            contact: joi.string(),
            city: joi.string(),
            country: joi.string()
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