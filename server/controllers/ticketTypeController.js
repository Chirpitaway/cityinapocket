const asyncHandler = require('express-async-handler');
const Provider = require('../models/ProvidersModel');

const AddTicketType = asyncHandler(async (req, res) => {
    const { name, price, description } = req.body;

    try {
        let provider = await Provider.findById(req.params.id);

        if (provider) {
            const ticketType = {
                name: name,
                price: price,
                description: description,
            };
            provider.ticketTypes.push(ticketType);
            await provider.save();
            const ticketTypeId = provider.ticketTypes[provider.ticketTypes.length - 1]._id;
            const blob = bucket.file(`${provider._id}-${ticketTypeId}.${req.file.mimetype.split('/')[1]}`);
            const blobStream = blob.createWriteStream()
            blobStream.on('finish', async () => {
                res.status(201).json(provider);
            })
            blobStream.on('error', (err) => {
                res.status(500);
                throw new Error("Error creating provider");
            })
            blobStream.end(req.file.buffer)
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error adding ticket type");
    }
});

const EditTicketType = asyncHandler(async (req, res) => {
    const { name, price, description, duration } = req.body;

    try {
        const provider = await Provider.findById(req.params.id);

        if (provider) {
            const ticketType = {
                name: name,
                price: price,
                description: description,
                duration: duration,
            };
            if (provider.ticketTypes.id(req.params.ticketTypeId)) {
                provider.ticketTypes.id(req.params.ticketTypeId).set(ticketType);
                await provider.save();
                res.status(201).json(provider);
            } else {
                res.status(404);
                throw new Error('Ticket type not found');
            }
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error editing ticket type");
    }
});

const DeleteTicketType = asyncHandler(async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id);

        if (provider) {
            if (provider.ticketTypes.id(req.params.ticketTypeId)) {
                provider.ticketTypes.id(req.params.ticketTypeId).remove();
                await provider.save();
                res.status(201).json(provider);
            } else {
                res.status(404);
                throw new Error('Ticket type not found');
            }
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error deleting ticket type");
    }
});

module.exports = {
    AddTicketType,
    EditTicketType,
    DeleteTicketType,
};