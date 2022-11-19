const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateTicket: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            type: joi.string().required(),
            providerId: joi.string().required(),
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