const joi = require('joi');
const asyncHandler = require('express-async-handler');

module.exports = {
    validateCity: asyncHandler(async (req, res, next) => {
        const schema = joi.object({
            name: joi.string().required(),
            country: joi.string().required(),
            centerLat: joi.number().required(),
            centerLng: joi.number().required(),
            radius: joi.number().required()
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