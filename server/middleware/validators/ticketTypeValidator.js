const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateTicketType: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            price: joi.number().required(),
            description: joi.string().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        } else {
            next();
        }
    }),
    validateTicketTypeEdit: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string(),
            price: joi.number(),
            description: joi.string(),
            duration: joi.number()
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