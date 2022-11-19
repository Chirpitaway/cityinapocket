const asyncHandler = require('express-async-handler');
const Provider = require('../models/ProviderModel');

const AddTicketType = asyncHandler(async (req, res) => {
    const { name, price, description } = req.body;
    
    try {
        const provider = await Provider.findById(req.params.id);
        
        if (provider) {
            const ticketType = {
                name: name,
                price: price,
                description: description,
            };
            provider.ticketTypes.push(ticketType);
            await provider.save();
            res.status(201).json(provider);
        } else {
            res.status(404);
            throw new Error('Provider not found');
        }
    } catch (error) {
        res.status(500);
        throw new Error("Error adding ticket type");
    }
});

